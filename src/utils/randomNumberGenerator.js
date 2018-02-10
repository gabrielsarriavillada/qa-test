/**
 * Generate a string with a given amount of digits.
 * @param size - Amount of digit
 * @return {string} - Generated string
 */
var RandomNumberGenerator = function (size) {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < size; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

module.exports = RandomNumberGenerator;
