const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (String(arr[arr.length - 1]).includes(str[i])) {
      arr.pop(arr.length - 1);
      num++;
      arr.push(num + str[i]);
    } else {
      num = 1;
      arr.push(str[i]);
    }
  }
  return arr.join("");
}

module.exports = {
  encodeLine,
};
