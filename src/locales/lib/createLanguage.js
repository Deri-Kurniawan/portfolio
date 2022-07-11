/**
 * Create Language
 * @typedef {Object} CreateLanguage
 * @param {string} code language code
 * @param {string} flag flag country code
 * @param {string} dir content direction
 * @param {string} name name of language
 * @returns Object of {code, flag, dir, name}
 */
 export default function createLanguage(code, flag, dir, name) {
  return {
    code, flag, dir, name,
  }
}