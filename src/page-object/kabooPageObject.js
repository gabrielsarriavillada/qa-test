'use strict';

/**
 * Page object model for Kaboo homepage: http://qatest.staging.kaboo.com/en
 */
var KabooHomepage = function () {
    var loginLink = element(by.css('[ui-sref="intro.login"]'));

    /**
     * Perform a click on login link.
     */
    this.navigateToLogin = function () {
        loginLink.click();
    };
};

module.exports = KabooHomepage;
