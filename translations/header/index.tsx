interface Translation {
  brand: string;
}

const chineseTranslations: Translation = {
  brand: "土拨鼠",
};
const englishTranslations: Translation = {
  brand: "Hedgehog",
};

const getTranslations = (locale: string): Translation => {
  if (locale === "en-US") {
    return englishTranslations;
  }
  return chineseTranslations;
};

export default getTranslations;
