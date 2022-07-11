import cl from './lib/createLanguage'

const languages = [
  cl('en', 'us', 'ltr', 'English'),
  cl('id', 'id', 'ltr', 'Bahasa Indonesia'),
  cl('fr', 'fr', 'ltr', 'Français'),
  cl('ae', 'ae', 'rtl', 'العربية'),
  cl('ids', 'id', 'ltr', 'Basa Sunda'),
];

export const supportedLanguages = languages.map((lang) => lang.code); 

export default languages;
