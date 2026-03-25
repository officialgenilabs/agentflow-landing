export type CurrencyConfig = {
  code: "USD" | "ZAR";
  locale: "en-US" | "en-ZA";
  country: string;
};

export function getCurrencyConfig(countryCode?: string | null): CurrencyConfig {
  const normalizedCountry = (countryCode ?? "US").toUpperCase();

  if (normalizedCountry === "ZA") {
    return {
      code: "ZAR",
      locale: "en-ZA",
      country: normalizedCountry
    };
  }

  return {
    code: "USD",
    locale: "en-US",
    country: normalizedCountry
  };
}
