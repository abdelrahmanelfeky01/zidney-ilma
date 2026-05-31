module.exports = {
  input: ["src/**/*.{js,jsx}"],
  output: "./",
  options: {
    lngs: ["ar", "en"],
    defaultLng: "ar",
    func: {
      list: ["t", "i18next.t", "i18n.t"],
      extensions: [".js", ".jsx"],
    },
    resource: {
      loadPath: "src/utils/i18n/locales/{{lng}}.json",
      savePath: "src/utils/i18n/locales/{{lng}}.json",
    },
    defaultValue: "__MISSING__",
    keySeparator: ".",
    nsSeparator: false,
  },
};
