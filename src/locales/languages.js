import cl from './lib/createLanguage'

const languages = [
  cl('en', 'us', 'ltr', 'English'),
  cl('id', 'id', 'ltr', 'Indonesia'),
  cl('fr', 'fr', 'ltr', 'Français'),
  cl('ae', 'ae', 'rtl', 'العربية'),
  cl('ids', 'id', 'ltr', 'Sunda'),
];

export const supportedLanguages = languages.map((lang) => lang.code); 

export default languages;
