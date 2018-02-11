'use strict';

/**
 * Page object model for Kaboo lobby page: http://qatest.staging.kaboo.com/en/lobby
 */
var KabooLobby = function () {
    var container = element(by.css('div.s-lobby__wrapper'));
    var username = element(by.css('div.m-navigation-login__username [name="email"]'));
    var password = element(by.css('div.m-navigation-login__password [name="pwd"]'));
    var loginButton = element(by.css('fieldset.m-navigation-login__fields [type="submit"]'));
    var registerButton = element(by.css('[ng-click="register()"]'));
    var profileIcon = element(by.id('profile'));

    /**
     * Wait for lobby container to be visible.
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
     * Wait for lobby container to be visible, and then return if it is displayed.
     * @return {boolean} - True if lobby container is displayed
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
        username.sendKeys(keys);
    };

    /**
     * Enter given keys to password input field.
     * @param keys - String to be entered
     */
    this.typePassword = function (keys) {
        password.sendKeys(keys);
    };

    /**
     * Perform a click on submit login button.
     */
    this.login = function () {
        loginButton.click();
    };

    /**
     * Perform a click on signup button.
     */
    this.signup = function () {
        registerButton.click();
    };

    /**
     * Wait for profile icon to be visible.
     */
    this.waitForProfile = function () {
        browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(profileIcon),
                5000,
                'Login has not been performed after 5 seconds'
            );
            return profileIcon;
        });
    };

    /**
     * Wait for profile icon to be visible, and then return if it is displayed.
     * @return {boolean} - True if profile icon is displayed
     */
    this.isProfileIconDisplayed = function () {
        this.waitForProfile();
        return profileIcon.isDisplayed();
    };
};

module.exports = KabooLobby;
