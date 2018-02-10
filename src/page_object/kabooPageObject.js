'use strict';

var KabooPageObject = function () {
    console.log('Launching Kaboo site!')
    NavigateToURL('qatest.staging.kaboo.com/en/lobby', 'kaboo', 'flappybird');
};

KabooPageObject.prototype = Object.create({}, {
    //elements to access
    username: { get: function () {
        return element(by.css('[name="email"'));
    }},
    password: { get: function () {
        return element(by.css('[name="pwd"]'))
    }},
    loginButton: { get: function () {
        return element(by.css('.e-btn'));
    }},
    registerButton: { get: function () {
        return element(by.css('[ng-click="register()"]'));
    }},

    typeUsername: { value: function (username) {
        return this.username.sendKeys(username);
    }},
    typePassword: { value: function (password) {
        return this.password.sendKeys(password);
    }},
    login: { value: function () {
        this.loginButton.click();
    }},
    signup: { value: function () {
        this.registerButton.click();
    }}
});

/**
 * Navigate to given url using the credentials provided to server authentication.
 * @param domain - Domain name
 * @param username - Username of credentials to authenticate into server.
 * @param password - Password of credentials to authenticate into server.
 */
var NavigateToURL = function (domain, username, password) {
    browser.get("http://" + username + ":" + password + "@" + domain);
};

module.exports = KabooPageObject;