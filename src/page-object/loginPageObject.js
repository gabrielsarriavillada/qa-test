'use strict';

/**
 * Page object model for Kaboo login form page: http://qatest.staging.kaboo.com/en/login
 */
var LoginForm = function () {
    var container = element(by.css('div.auth-login'));
    var username = element(by.css('input[name="username"]'));
    var password = element(by.css('input[name="password"]'));
    var loginButton = element(by.id('submitLogin'));

    /**
     * Wait for login form container to be visible.
     */
    this.waitForContainer = function () {
        browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(container),
                5000,
                'Lobby container is not visible after 5 seconds'
            );
            return container;
        });
    };

    /**
     * Wait for login form container to be visible, and then return if it is displayed.
     * @return {boolean} - True if login form container is displayed
     */
    this.isContainerDisplayed = function () {
        this.waitForContainer();
        return container.isDisplayed();
    };

    /**
     * Enter given keys to username input field.
     * @param keys - String to be entered
     */
    this.typeUsername = function (keys) {
        return username.sendKeys(keys);
    };

    /**
     * Enter given keys to password input field.
     * @param keys - String to be entered
     */
    this.typePassword = function (keys) {
        return password.sendKeys(keys);
    };

    /**
     * Perform a click on submit login button.
     */
    this.login = function () {
        loginButton.click();
    };
};

module.exports = LoginForm;
