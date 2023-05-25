# Vue Circle Flags 

A Vue 3 component with 400+ circular SVG country flags 🚩 (base on [circle-flags](https://github.com/HatScripts/circle-flags))

![image](https://github.com/luizzappa/vue-circle-flag/assets/65685842/15473c0d-3cdd-48b0-ac0f-cc65181995ed)


👉 [Live demo](https://q3lwoq.csb.app/)

## Features

📏 Custom size with CSS

🌎 Flag names (and custom name to allow internationalization)

✨ Circular border

## Installation

```bash
npm install vue-circle-flags
```

## Usage

### Vue 3

In your `main` file:

```js
import CircleFlags from "vue-circle-flags";
import "vue-circle-flags/dist/vue-circle-flags.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(CircleFlags);

app.mount("#app");
```

### Nuxt 3

Create a new plugin in `plugins\vue-circle-flags.js`:

```js
import CircleFlags from "vue-circle-flags";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('CircleFlags', CircleFlags);
})
```

Add the styles to `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  // ...
  css : [
  "vue-circle-flags/dist/vue-circle-flags.css"
  ]
  // ...
})

```

## Example 📜

Once the plugin is registered in your app, in your template you can call it:

```js
// Without border
<CircleFlags
   size="medium"
   country="br"
/>

// With border
<CircleFlags
   size="medium"
   strokeColor="#000"
   strokeWidth="4"
   country="br"
/>
```

## API 💻

**Mandatory properties**

| Property | Description | Type | Value
|:--|:--|:--|:--|
| country | identifier of the country | `string` | one of the codes defined [here](#available-flags-) |

**Optional properties**

| Property | Description | Type | Value
|:--|:--|:--|:--|
| size | Flag size | `string` | `small`, `medium`, `large` (for custom size see [here](#custom-size-)) |
| strokeWidth | Stroke size in pixels | `number` | `0` or `undefined` for no stroke |
| strokeColor | Stroke color | `string` | e.g.: `#000000`, `red`, ... 
| showFlagName | Show flag name in english when hover | `boolean` | e.g.: `true`, `false` |
| newFlagName | Custom flag name to show when hover | `string` | e.g.: `França` |

## Custom size 📏

You can customize the size of the flags by setting a new `height` and `width` value for the selector:

```css
div.circle-flags {
  height: 42px;
  width: 42px;
}
```

## Available flags 🚩

| **Code** | **Country name** |
|---------|--------------|
| ad | Andorra |
| ae | United Arab Emirates |
| af | Afghanistan |
| af-emirate | Afghanistan |
| afar | Afar |
| ag | Antigua and Barbuda |
| ai | Anguilla |
| al | Albania |
| am | Armenia |
| an | Netherlands Antilles |
| ao | Angola |
| aq | Antarctica |
| aq-true_south | Antarctica |
| ar | Argentina |
| as | American Samoa |
| at | Austria |
| au | Australia |
| au-aboriginal | Australian Aboriginal |
| au-act | Australian Capital Territory |
| au-nsw | New South Wales |
| au-nt | Northern Territory |
| au-qld | Queensland |
| au-sa | South Australia |
| au-tas | Tasmania |
| au-vic | Victoria |
| au-wa | Western Australia |
| aw | Aruba |
| ax | Åland Islands |
| az | Azerbaijan |
| ba | Bosnia and Herzegovina |
| bb | Barbados |
| bd | Bangladesh |
| be | Belgium |
| bf | Burkina Faso |
| bg | Bulgaria |
| bh | Bahrain |
| bi | Burundi |
| bj | Benin |
| bl | Saint Barthélemy |
| bm | Bermuda |
| bn | Brunei |
| bo | Bolivia |
| bq-bo | Bonaire |
| bq-sa | Saba |
| bq-se | Sint Eustatius |
| br | Brazil |
| bs | Bahamas |
| bt | Bhutan |
| bv | Bouvet Island |
| bw | Botswana |
| by | Belarus |
| bz | Belize |
| ca | Canada |
| ca-bc | British Columbia |
| cc | Cocos (Keeling) Islands |
| cd | Congo, Democratic Republic of the |
| cf | Central African Republic |
| cg | Congo |
| ch | Switzerland |
| ch-gr | Grisons |
| ci | Ivory Coast |
| ck | Cook Islands |
| cl | Chile |
| cm | Cameroon |
| cn | China |
| cn-xj | Xinjiang |
| co | Colombia |
| cq | Sark |
| cr | Costa Rica |
| cu | Cuba |
| cv | Cabo Verde |
| cw | Curaçao |
| cx | Christmas Island |
| cy | Cyprus |
| cz | Czechia |
| de | Germany |
| dj | Djibouti |
| dk | Denmark |
| dm | Dominica |
| do | Dominican Republic |
| dz | Algeria |
| earth | Earth |
| east_african_federation | East African Federation |
| easter_island | Easter Island |
| ec | Ecuador |
| ec-w | Galápagos |
| ee | Estonia |
| eg | Egypt |
| eh | Western Sahara |
| er | Eritrea |
| es | Spain |
| es-variant | Spain |
| es-ar | Aragon |
| es-ce | Ceuta |
| es-cn | Canary Islands |
| es-ct | Catalonia |
| es-ga | Galicia |
| es-ib | Balearic Islands |
| es-ml | Melilla |
| es-pv | Basque Country |
| et | Ethiopia |
| et-or | Oromia |
| et-ti | Tigray Region |
| european_union | European Union |
| ewe | Ewe |
| fi | Finland |
| fj | Fiji |
| fk | Falkland Islands (Malvinas) |
| fm | Micronesia |
| fo | Faroe Islands |
| fr | France |
| fr-20r | Corsica |
| fr-bre | Brittany |
| fr-cp | Clipperton Island |
| ga | Gabon |
| gb | United Kingdom |
| gb-con | Cornwall |
| gb-eng | England |
| gb-nir | Northern Ireland |
| gb-ork | Orkney |
| gb-sct | Scotland |
| gb-wls | Wales |
| gd | Grenada |
| ge | Georgia |
| ge-ab | Abkhazia |
| gf | French Guiana |
| gg | Guernsey |
| gh | Ghana |
| gi | Gibraltar |
| gl | Greenland |
| gm | Gambia |
| gn | Guinea |
| gp | Guadeloupe |
| gq | Equatorial Guinea |
| gr | Greece |
| gs | South Georgia and the South Sandwich Islands |
| gt | Guatemala |
| gu | Guam |
| guarani | Guarani |
| gw | Guinea-Bissau |
| gy | Guyana |
| hausa | Hausa |
| hk | Hong Kong |
| hmong | Hmong |
| hm | Heard Island and McDonald Islands |
| hn | Honduras |
| hr | Croatia |
| ht | Haiti |
| hu | Hungary |
| id | Indonesia |
| id-jb | West Java |
| id-jt | Central Java |
| ie | Ireland |
| il | Israel |
| im | Isle of Man |
| in | India |
| in-as | Assam |
| in-gj | Gujarat |
| in-ka | Karnataka |
| in-mn | Manipur |
| in-mz | Mizoram |
| in-or | Odisha |
| in-tg | Telangana |
| in-tn | Tamil Nadu |
| io | British Indian Ocean Territory |
| iq | Iraq |
| iq-kr | Kurdistan |
| ir | Iran |
| is | Iceland |
| it | Italy |
| it-23 | Aosta Valley |
| it-82 | Sicily |
| it-88 | Sardinia |
| je | Jersey |
| jm | Jamaica |
| jo | Jordan |
| jp | Japan |
| kanuri | Kanuri |
| ke | Kenya |
| kg | Kyrgyzstan |
| kh | Cambodia |
| ki | Kiribati |
| kikuyu | Kikuyu |
| km | Comoros |
| kn | Saint Kitts and Nevis |
| kongo | Kongo |
| kp | North Korea |
| kr | South Korea |
| kw | Kuwait |
| ky | Cayman Islands |
| kz | Kazakhstan |
| la | Laos |
| lb | Lebanon |
| lc | Saint Lucia |
| li | Liechtenstein |
| lk | Sri Lanka |
| lr | Liberia |
| ls | Lesotho |
| lt | Lithuania |
| lu | Luxembourg |
| lv | Latvia |
| ly | Libya |
| ma | Morocco |
| malayali | Malayali |
| maori | Maori |
| mc | Monaco |
| md | Moldova |
| me | Montenegro |
| mf | Saint-Martin |
| mg | Madagascar |
| mh | Marshall Islands |
| mk | North Macedonia |
| ml | Mali |
| mm | Myanmar |
| mn | Mongolia |
| mo | Macao |
| mp | Northern Mariana Islands |
| mq | Martinique |
| mr | Mauritania |
| ms | Montserrat |
| mt | Malta |
| mu | Mauritius |
| mv | Maldives |
| mw | Malawi |
| mx | Mexico |
| my | Malaysia |
| mz | Mozambique |
| na | Namibia |
| nc | New Caledonia |
| nato | NATO |
| ne | Niger |
| nf | Norfolk Island |
| ng | Nigeria |
| ni | Nicaragua |
| nl | Netherlands |
| nl-fr | Friesland |
| no | Norway |
| northern_cyprus | Northern Cyprus |
| np | Nepal |
| nr | Nauru |
| nu | Niue |
| nz | New Zealand |
| occitania | Occitania |
| olympics | Olympics |
| om | Oman |
| otomi | Otomi |
| pa | Panama |
| pe | Peru |
| pf | French Polynesia |
| pg | Papua New Guinea |
| ph | Philippines |
| pk | Pakistan |
| pk-jk | Azad Kashmir |
| pk-sd | Sindh |
| pl | Poland |
| pm | Saint Pierre and Miquelon |
| pn | Pitcairn Islands |
| pr | Puerto Rico |
| ps | Palestine |
| pt-20 | Azores |
| pt-30 | Madeira |
| pt | Portugal |
| pw | Palau |
| py | Paraguay |
| qa | Qatar |
| quechua | Quechua |
| re | Réunion |
| ro | Romania |
| rs | Serbia |
| ru | Russia |
| ru-ba | Bashkortostan |
| ru-ce | Chechnya |
| ru-cu | Chuvashia |
| ru-da | Dagestan |
| ru-ko | Komi Republic |
| ru-ta | Tatarstan |
| ru-ud | Udmurtia |
| rw | Rwanda |
| sa | Saudi Arabia |
| sami | Sami |
| sb | Solomon Islands |
| sc | Seychelles |
| sd | Sudan |
| se | Sweden |
| sg | Singapore |
| sh-ac | Ascension Island |
| sh-hl | Saint Helena |
| sh-ta | Tristan da Cunha |
| si | Slovenia |
| sj | Svalbard and Jan Mayen |
| sk | Slovakia |
| sl | Sierra Leone |
| sm | San Marino |
| sn | Senegal |
| so | Somalia |
| somaliland | Somaliland |
| south_ossetia | South Ossetia |
| soviet_union | Soviet Union |
| sr | Suriname |
| ss | South Sudan |
| st | São Tomé and Príncipe |
| sv | El Salvador |
| sx | Sint Maarten |
| sy | Syria |
| sz | Eswatini |
| tc | Turks and Caicos Islands |
| td | Chad |
| tf | French Southern Territories |
| tg | Togo |
| th | Thailand |
| tibet | Tibet |
| tj | Tajikistan |
| tk | Tokelau |
| tl | Timor-Leste |
| tm | Turkmenistan |
| tn | Tunisia |
| to | Tonga |
| torres_strait_islands | Torres Strait Islands |
| tr | Turkey |
| transnistria | Transnistria |
| tt | Trinidad and Tobago |
| tv | Tuvalu |
| tw | Taiwan |
| tz | Tanzania |
| ua | Ukraine |
| ug | Uganda |
| united_nations | United Nations |
| us | United States of America |
| us-ak | Alaska |
| us-al | Alabama |
| us-ar | Arkansas |
| us-az | Arizona |
| us-ca | California |
| us-co | Colorado |
| us-dc | District of Columbia |
| us-fl | Florida |
| us-ga | Georgia |
| us-hi | Hawaii |
| us-in | Indiana |
| us-mo | Missouri |
| us-ms | Mississippi |
| us-nc | North Carolina |
| us-nm | New Mexico |
| us-ri | Rhode Island |
| us-tn | Tennessee |
| us-tx | Texas |
| um | United States Minor Outlying Islands |
| uy | Uruguay |
| uz | Uzbekistan |
| va | Holy See (Vatican) |
| vc | Saint Vincent and the Grenadines |
| ve | Venezuela |
| vg | Virgin Islands (British) |
| vi | Virgin Islands (U.S.) |
| vn | Vietnam |
| vu | Vanuatu |
| wf | Wallis and Futuna |
| wiphala | Wiphala |
| ws | Samoa |
| xk | Kosovo |
| xx | Placeholder |
| ye | Yemen |
| yorubaland | Yorubaland |
| yt | Mayotte |
| za | South Africa |
| zm | Zambia |
| zw | Zimbabwe |

## Contributing 💙

Follow the [guidelines](https://github.com/luizzappa/vue-circle-flags/blob/main/CONTRIBUTING.md).
