'use strict';

var KabooHomepage = function () {
    var loginLink = element(by.css('[ui-sref="intro.login"]'));

    this.navigateToLogin = function () {
        loginLink.click();
    };
};

module.exports = KabooHomepage;
