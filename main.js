var appTranslations = {
    en: "Hello",
    ua: "Привіт",
    fr: "Bonjour",
    es: "Hola",
};
var someVar1 = "ua";
console.log(appTranslations[someVar1]); // "Привіт"
var someVar2 = "es";
console.log(appTranslations[someVar2]); // "Hola"
var translation = appTranslations["de"]; // у меня почему-то нет поредупреждения про undefined...
console.log(translation); // undefined
var optionalAppTranslations = {
    en: "Welcome",
    ua: "Ласкаво просимо",
    default: "Ololo",
};
function printTranslation(translations, lang) {
    var translation = translations[lang] || translations["default"];
    console.log(translation || "No translation available");
}
printTranslation(appTranslations, "en"); // "Hello"
printTranslation(appTranslations, "fr"); // "Bonjour"
printTranslation(optionalAppTranslations, "en"); // "Welcome"
printTranslation(optionalAppTranslations, "de"); // "Ololo"
