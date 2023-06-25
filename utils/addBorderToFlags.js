import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as xmljs from 'xml-js';
import countryNames from './country-names.json' assert { type: 'json' };

const caseDir = path.dirname(fileURLToPath(import.meta.url)),
  flagsDir = path.join(caseDir, '..', 'src/assets/flags'),
  outputDir = path.join(caseDir, '..', 'src/components/flags');

let mapCodes = [];
for (let file of fs.readdirSync(flagsDir)) {
  const countryCode = file.replace('.svg', ''),
    svgPath = path.join(flagsDir, file),
    svgFile = fs.readFileSync(svgPath, 'utf8');

  try {
    // Check if is syslink
    if (svgFile.match(/^.*\.svg$/gi)) {
      mapCodes.push({
        code: countryCode,
        fallback: svgFile.replace('.svg', '')
      });
    } else {
      const xmlJson = xmljs.xml2js(svgFile),
        xmlJsonWithStroke = addStroke(xmlJson),
        xmlUniqueMaskId = uniqueIdMask(xmlJsonWithStroke),
        newXml = xmljs.js2xml(xmlUniqueMaskId);

      // Save vue SFC
      const newVue = injectSvg(newXml),
        filePath = path.join(outputDir, `/${countryCode}.vue`);

      fs.writeFile(filePath, newVue, (err) => {
        if (err) process.stdout.write(`Failed writing file: ${err}`);
        // console.log(`Converted '${file}' to '${filePath}'`)
      });

      mapCodes.push({
        code: countryCode,
        name: countryNames[countryCode],
        ref: countryCode
      });
    }
  } catch (e) {
    process.stdout.write(`Failed to load ${svgPath}\n`);
    process.stdout.write(`${e}\n`);
  }
}

// Save mapCodes
fs.writeFile(
  path.join(outputDir, '..', 'mapCodes.ts'),
  `export const mapCodes = ${JSON.stringify(mapCodes, null, 2)} as const;
  `,
  (err) => {
    if (err) process.stdout.write('Failed writing mapCodes.json\n');
  }
);

/**
 * Add a stroke into svg
 * @param {*} xml the XML of the SVG
 * @returns
 */
function addStroke(xml) {
  // Add class to SVG element
  xml.elements[0].attributes.class = 'svg-circle-flags';

  // Remove width and height
  xml.elements[0].attributes.width = undefined;
  xml.elements[0].attributes.height = undefined;

  // Change viewBox to use template string
  xml.elements[0].attributes.viewBox = undefined;
  xml.elements[0].attributes[':viewBox'] =
    '`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`';

  // Add title
  const title = {
    type: 'element',
    name: 'title',
    attributes: {
      'v-if': 'props.flagName'
    },
    elements: [
      {
        type: 'text',
        text: '{{ props.flagName }}'
      }
    ]
  };
  xml.elements[0].elements[1].elements.unshift(title);

  // Add stroke
  const gCircle = {
    type: 'element',
    name: 'g',
    attributes: {
      fill: 'none'
    },
    elements: [
      {
        type: 'element',
        name: 'circle',
        attributes: {
          cx: 256,
          cy: 256,
          ':r': 'circleStroke',
          fill: 'none',
          ':style':
            '{stroke: props.strokeColor, strokeWidth: props.strokeWidth}'
        }
      }
    ]
  };
  xml.elements[0].elements.push(gCircle);

  return xml;
}

/**
 * Create unique id for every SVG mask
 * @param {*} xmlSvg the XML of the SVG
 * @returns
 */
function uniqueIdMask(xml) {
  const mask = xml.elements[0].elements[0],
    gMask = xml.elements[0].elements[1];

  // Change mask element id
  mask.attributes.id = undefined;
  mask.attributes[':id'] = '`${maskId}`';

  // Change g url id
  gMask.attributes.mask = undefined;
  gMask.attributes[':mask'] = '`url(#${maskId})`';

  return xml;
}

/**
 * Inject the svg xml into vue template
 * @param {*} xmlSvg the XML of the SVG
 * @returns
 */
function injectSvg(xmlSvg) {
  const template = `
    <template>{{svg}}</template>
    <script setup lang="ts">
      import { computed, ref, onMounted } from 'vue';

      const props = withDefaults(
        defineProps<{
          flagName: string | undefined;
          strokeColor?: string;
          strokeWidth?: number;
        }>(),
        {
          strokeColor: '#000',
          strokeWidth: 0
        }
      );

      const maskId = ref<string>();

      const svgSize = computed(() => 512 + 2 * props.strokeWidth),
        viewBoxOrigin = computed(() => -props.strokeWidth),
        circleStroke = computed(() => 256 + props.strokeWidth / 2);

      onMounted(() => maskId.value = window.crypto.randomUUID() )
    </script>
  `;

  return template.replace('{{svg}}', xmlSvg);
}
