const cl = (code, flag, dir, name) => {
  return {
    code, flag, dir, name,
  }
}

const languages = [
  cl('en', 'us', 'ltr', 'English',),
  cl('id', 'id', 'ltr', 'Bahasa Indonesia'),
  cl('fr', 'fr', 'ltr', 'Français'),
  cl('ae', 'ae', 'rtl', 'العربية'),
];

export const supportedLanguages = languages.map((lng) => lng.code);

export default languages;