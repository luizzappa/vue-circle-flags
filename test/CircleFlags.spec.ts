// 3rd's
import { mount, VueWrapper } from '@vue/test-utils';

// locals
import CicleFlags from '@/components/CircleFlags.vue';
import unknownFlag from '@/components/flags/xx.vue';
import { countryCodes, TCountryCodes, countryList } from '@/defs/country';

describe('Placeholder component', () => {
  it('Non-existent country code renders unknown flag', async () => {
    // @ts-expect-error this country code does not exist, just for testing
    const wrapper = mount(CicleFlags, {
      propsData: {
        country: 'abcdggj'
      }
    });

    expect(wrapper).toBeTruthy();

    const unknownComponent = wrapper.findComponent(unknownFlag);
    expect(unknownComponent.exists()).toBe(true);
  });
});

describe('CircleFlags: properties testing', () => {
  let wrapper: VueWrapper;
  const countryCode = 'br';
  beforeAll(async () => {
    wrapper = mount(CicleFlags, {
      propsData: {
        country: countryCode
      }
    });
    await new Promise((res) => setTimeout(res, 200));
    await wrapper.vm.$nextTick();
  });

  it('Default values: showFlagName and medium size', async () => {
    const props = wrapper.props();
    expect(props.size).toBe('medium');
    expect(props.showFlagName).toBe(true);
  });

  ['small', 'medium', 'large'].forEach((size) => {
    it(`${size} size`, async () => {
      wrapper.setProps({ size });
      await wrapper.vm.$nextTick();
      expect(wrapper.attributes('class')).toBe(
        `circle-flags circle-flags-${size}`
      );
    });
  });

  it('country code is passed correctly', async () => {
    expect(wrapper.text()).toBe(countryList[countryCode].name);
  });

  it('newFlagName sets new title', async () => {
    const newFlagName = 'custom name';
    wrapper.setProps({ newFlagName, showFlagName: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe(newFlagName);
  });

  it('showFlagName equal false hides title', async () => {
    const newFlagName = 'custom name';
    wrapper.setProps({ newFlagName, showFlagName: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toBe(newFlagName);
  });
});

describe('Flags SVG: properties testing', () => {
  for (let i = 0; i < countryCodes.length; i++) {
    const code = countryCodes[i];

    let wrapper: VueWrapper;
    beforeAll(async () => {
      const refCode = countryList[code].ref,
        { default: flagComponent } = await import(
          `@/components/flags/${refCode}.vue`
        );

      wrapper = mount(flagComponent, {
        propsData: {
          country: code as TCountryCodes,
          flagName: 't'
        }
      });
      await wrapper.vm.$nextTick();
    });
    afterAll(() => {
      wrapper.unmount();
    });

    it(`${code}: when has flagName shows the flag`, async () => {
      wrapper.setProps({ flagName: 'custom flag name' });
      await wrapper.vm.$nextTick();
      expect(wrapper.text()).toContain('custom flag name');
    });

    it(`${code}: when strokeWidth is undefined, there isn't stroke`, async () => {
      wrapper.setProps({ strokeWidth: undefined });
      await wrapper.vm.$nextTick();

      const circleElem = wrapper.find('circle[fill="none"');
      expect(circleElem.exists()).toBe(true);

      expect(circleElem.element.getAttribute('style')).contain(
        'stroke-width: 0'
      );
    });

    it(`${code}: when strokeWidth is 20, the stroke has width of 20`, async () => {
      wrapper.setProps({ strokeWidth: 20 });
      await wrapper.vm.$nextTick();

      const circleElem = wrapper.find('circle[fill="none"');
      expect(circleElem.exists()).toBe(true);

      expect(circleElem.element.getAttribute('style')).contain(
        'stroke-width: 20'
      );
    });

    it(`${code}: when strokeWidth is 20, the stroke has width of 20`, async () => {
      const strokeWidth = 20;
      wrapper.setProps({ strokeWidth });
      await wrapper.vm.$nextTick();

      const circleElem = wrapper.find('circle[fill="none"');
      expect(circleElem.exists()).toBe(true);

      expect(circleElem.element.getAttribute('r')).toBe(
        `${256 + strokeWidth / 2}`
      );
    });

    it(`${code}: strokeColor is red`, async () => {
      wrapper.setProps({ strokeColor: 'red' });
      await wrapper.vm.$nextTick();

      const circleElem = wrapper.find('circle[fill="none"');
      expect(circleElem.exists()).toBe(true);

      expect(circleElem.element.getAttribute('style')).contain('stroke: red');
    });

    it(`${code}: svg does not have width and height defined`, async () => {
      wrapper.setProps({ strokeColor: 'red' });
      await wrapper.vm.$nextTick();

      const svgElem = wrapper.find('svg');
      expect(svgElem.exists()).toBe(true);

      expect(svgElem.element.hasAttribute('width')).toBe(false);
      expect(svgElem.element.hasAttribute('height')).toBe(false);
    });

    it(`${code}: svg has svg-circle-flags class`, async () => {
      wrapper.setProps({ strokeColor: 'red' });
      await wrapper.vm.$nextTick();

      const svgElem = wrapper.find('svg');
      expect(svgElem.exists()).toBe(true);

      expect(svgElem.classes().indexOf('svg-circle-flags') !== -1).toBe(true);
    });

    it(`${code}: viewBox adjusts with stroke-width`, async () => {
      const strokeWidth = 10;
      wrapper.setProps({ strokeWidth });
      await wrapper.vm.$nextTick();

      const svgElem = wrapper.find('svg');
      expect(svgElem.exists()).toBe(true);

      const viewBox = svgElem.element
        .getAttribute('viewBox')
        ?.split(' ') as string[];
      // viewBox = -strokeWidth - strokeWidth (512 + 2*strokeWidth) (512 + 2*strokeWidth)
      expect(viewBox[0]).toBe(`-${strokeWidth}`);
      expect(viewBox[1]).toBe(`-${strokeWidth}`);
      expect(viewBox[2]).toBe(`${512 + 2 * strokeWidth}`);
      expect(viewBox[3]).toBe(`${512 + 2 * strokeWidth}`);
    });
  }
});
