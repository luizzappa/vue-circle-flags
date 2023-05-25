import { mapCodes } from '@/components/mapCodes';

type TCountryList = {
  [key in TCountryCodes]: {
    name: string;
    ref: string;
  };
};

type TMapCodes = {
  code: TCountryCodes;
  name?: string;
  ref?: string;
  fallback?: string;
};

const countryCodes = [...mapCodes.map((country) => country.code)] as const;
type TCountryCodes = (typeof countryCodes)[number] | 'unknown';

const countryList: TCountryList = mapCodes.reduce(
  (acum: TCountryList, curr: TMapCodes) => {
    const hasFallback = curr.fallback;
    let name, ref;
    if (hasFallback) {
      const countryRef = mapCodes.find(
        (c) => c.code === curr.fallback
      ) as TMapCodes;
      name = countryRef.name;
      ref = countryRef.ref;
    } else {
      name = curr.name;
      ref = curr.ref;
    }
    acum[curr.code] = {
      name: name as string,
      ref: ref as string
    };
    return acum;
  },
  {} as TCountryList
);

export { countryCodes, countryList };
export type { TCountryCodes, TCountryList };
