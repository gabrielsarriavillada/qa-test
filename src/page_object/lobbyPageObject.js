'use strict';

var Navigation = require('../utils/navigation.js');

var KabooLobby = function () {
    var username = element(by.css('[name="email"'));
    var password = element(by.css('[name="pwd"]'));
    var loginButton = element(by.css('.e-btn'));
    var registerButton = element(by.css('[ng-click="register()"]'));
    var profileIcon = element(by.id('profile'));

    this.navigateTo = function () {
        Navigation('/en/lobby', 'kaboo', 'flappybird');
    };

    this.typeUsername = function (user) {
        return username.sendKeys(user);
    };

    this.typePassword = function (pass) {
        return password.sendKeys(pass);
    };

    this.login = function () {
        loginButton.click();
    };

    this.signup = function () {
        registerButton.click();
    };

    this.waitForProfile = function () {
        return browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(profileIcon),
                10000,
                'Login has not been performed after 10 seconds'
            );
            return profileIcon;
        });
    };

    this.isProfileIconDisplayed = function () {
        return profileIcon.isDisplayed();
    };
};

module.exports = KabooLobby;