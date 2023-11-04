/**
 * Checks if a given string is empty.
 *
 * @param {string} string - The string to be checked for emptiness.
 * @returns {boolean} Returns true if the string is empty, otherwise false.
 */
const isEmpty = (string) => {
    if(string.length > 0){
        return false;
    }
    return true;
}

module.exports = isEmpty;