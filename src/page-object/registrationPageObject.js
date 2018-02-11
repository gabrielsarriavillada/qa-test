'use strict';

var Navigation = require('../utils/navigation.js');

var RegistrationForm = function () {
    var email = element(by.css('[name="email"]'));
    var username = element(by.css('[name="username"]'));
    var password = element(by.css('input[name="password"]'));
    var passwordRepeat = element(by.css('input[name="passwordRepeat"]'));
    var termsAndConditions = element(by.css('[for="termsAndConditions"] svg'));
    var nextButton = element(by.css('[ng-show="regStep === 1"]'));
    var submitButton = element(by.css('[ng-show="regStep === 2"]'));
    var firstName = element(by.css('input[name="firstname"]'));
    var lastName = element(by.css('input[name="lastname"]'));
    var day = element(by.id('days'));
    var month = element(by.id('months'));
    var year = element(by.id('years'));
    var address = element(by.css('input[name="address"]'));
    var postalCode = element(by.css('input[name="postalCode"]'));
    var city = element(by.css('input[name="city"]'));
    var phoneNumber = element(by.css('input[name="phoneNumber"]'));
    var emailSentBox = element(by.css('[ng-show="emailSent"]'));
    var confirmationButton = element(by.css('button[ui-sref="lobby"]'));
    var country = element(by.id('countrySelector'));
    var countryList = element.all(by.css('a.e-flag'));

    this.navigateTo = function () {
        Navigation('/en/signup', 'kaboo', 'flappybird');
    };

    this.typeEmail = function (keys) {
        email.sendKeys(keys);
    };

    this.typeUsername = function (keys) {
        username.sendKeys(keys);
    };

    this.typePassword = function (keys) {
        password.sendKeys(keys);
    };

    this.repeatPassword = function (keys) {
        passwordRepeat.sendKeys(keys);
    };

    this.acceptTC = function () {
        termsAndConditions.click();
    };

    this.nextStep = function () {
        nextButton.click();
    };

    this.submit = function () {
        submitButton.click();
    };

    this.waitForSecondStep = function () {
        return browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(submitButton),
                10000,
                'Login has not been performed after 10 seconds'
            );
            return submitButton;
        });
    };

    this.isSecondStepDisplayed = function () {
        return submitButton.isDisplayed();
    };

    this.typeFirstName = function (keys) {
        firstName.sendKeys(keys);
    };

    this.typeLastName = function (keys) {
        lastName.sendKeys(keys);
    };

    this.typeDay = function (keys) {
        day.sendKeys(keys);
    };

    this.typeMonth = function (keys) {
        month.sendKeys(keys);
    };

    this.typeYear = function (keys) {
        year.sendKeys(keys);
    };

    this.typeAddress = function (keys) {
        address.sendKeys(keys);
    };

    this.typePostalCode = function (keys) {
        postalCode.sendKeys(keys);
    };

    this.typeCity = function (keys) {
        city.sendKeys(keys);
    };

    this.typePhoneNumber = function (keys) {
        phoneNumber.sendKeys(keys);
    };

    this.waitForRegistrationCompletedPage = function () {
        return browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(emailSentBox),
                10000,
                'Login has not been performed after 10 seconds'
            );
            return emailSentBox;
        });
    };

    this.isRegistrationCompletedPageDisplayed = function () {
        return emailSentBox.isDisplayed();
    };

    this.confirmRegistration = function () {
        confirmationButton.click();
    };

    this.selectCountry = function (acr) {
        country.click();
        countryList.filter(function(elem, index) {
            return elem.getAttribute('data-value').then(function(value) {
                return value === acr;
            });
        }).first().click();
    };
};

module.exports = RegistrationForm;