const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length > 0) {
    if (arr.filter((el) => typeof el == typeof "").length == 0) {
      return false;
    } else {
      let array = arr
        .filter((el) => typeof el == "string")
        .map((el) => el.trim().toUpperCase())
        .sort();

      let dreamTeam = "";
      for (let i = 0; i < array.length; i++) {
        dreamTeam += array[i][0];
      }
      return dreamTeam;
    }
  } else {
    return [];
  }
}

module.exports = {
  createDreamTeam,
};
