interface Translations {
    [languageCode: string]: string | undefined;
}

const appTranslations: Translations = {
    en: "Hello",
    ua: "Привіт",
    fr: "Bonjour",
    es: "Hola",
};

const someVar1 = "ua";
console.log(appTranslations[someVar1]);    // "Привіт"

const someVar2 = "es";
console.log(appTranslations[someVar2]);    // "Hola"

const translation = appTranslations["de"]; // у меня почему-то нет предупреждения про undefined (хотя в tsconfig нужные флаги вроде установил)...
console.log(translation);                  // undefined

interface OptionalTranslations extends Translations {
    default?: string;
}

const optionalAppTranslations: OptionalTranslations = {
    en: "Welcome",
    ua: "Ласкаво просимо",
    default: "Ololo",
};

function printTranslation(translations: Translations, lang: string): void {
    const translation = translations[lang] || translations["default"];
    console.log(translation || "No translation available");
}

printTranslation(appTranslations, "en");         // "Hello"
printTranslation(appTranslations, "fr");         // "Bonjour"
printTranslation(optionalAppTranslations, "en"); // "Welcome"
printTranslation(optionalAppTranslations, "de"); // "Ololo"
