/**
 * Generate a string with a given amount of characters.
 * @param size - Amount of characters
 * @return {string} - Generated string
 */
var RandomStringGenerator = function (size) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < size; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

module.exports = RandomStringGenerator;