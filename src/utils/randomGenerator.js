var RandomGenerator = {

    /**
     * Generate a string with a given amount of digits.
     * @param size - Amount of digit
     * @return {string} - Generated string
     */
    number : function (size) {
        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    },

    /**
     * Generate a string with a given amount of characters.
     * @param size - Amount of characters
     * @return {string} - Generated string
     */
    string : function (size) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
};

module.exports = RandomGenerator;
