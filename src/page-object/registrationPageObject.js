'use strict';

/**
 * Page object model for Kaboo registration form page: http://qatest.staging.kaboo.com/en/signup
 */
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

    /**
     * Enter given keys to e-mail input field.
     * @param keys - String to be entered
     */
    this.typeEmail = function (keys) {
        email.sendKeys(keys);
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
     * Enter given keys to repeat password input field.
     * @param keys - String to be entered
     */
    this.repeatPassword = function (keys) {
        passwordRepeat.sendKeys(keys);
    };

    /**
     * Select terms & conditions check box.
     */
    this.acceptTC = function () {
        termsAndConditions.click();
    };

    /**
     * Perform a click on next button.
     */
    this.nextStep = function () {
        nextButton.click();
    };

    /**
     * Perform a click on submit registration button.
     */
    this.submit = function () {
        submitButton.click();
    };

    /**
     * Wait for submit button to be visible.
     */
    this.waitForSecondStep = function () {
        browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(submitButton),
                5000,
                'Second step is not visible after 5 seconds'
            );
            return submitButton;
        });
    };

    /**
     * Wait for submit button to be visible, and then return if it is displayed.
     * @return {boolean} - True if submit button is displayed
     */
    this.isSecondStepDisplayed = function () {
        this.waitForSecondStep();
        return submitButton.isDisplayed();
    };

    /**
     * Enter given keys to first name input field.
     * @param keys - String to be entered
     */
    this.typeFirstName = function (keys) {
        firstName.sendKeys(keys);
    };

    /**
     * Enter given keys to last name input field.
     * @param keys - String to be entered
     */
    this.typeLastName = function (keys) {
        lastName.sendKeys(keys);
    };

    /**
     * Enter given keys to days input field.
     * @param keys - String to be entered
     */
    this.typeDay = function (keys) {
        day.sendKeys(keys);
    };

    /**
     * Enter given keys to months input field.
     * @param keys - String to be entered
     */
    this.typeMonth = function (keys) {
        month.sendKeys(keys);
    };

    /**
     * Enter given keys to years input field.
     * @param keys - String to be entered
     */
    this.typeYear = function (keys) {
        year.sendKeys(keys);
    };

    /**
     * Enter given keys to address input field.
     * @param keys - String to be entered
     */
    this.typeAddress = function (keys) {
        address.sendKeys(keys);
    };

    /**
     * Enter given keys to postal code input field.
     * @param keys - String to be entered
     */
    this.typePostalCode = function (keys) {
        postalCode.sendKeys(keys);
    };

    /**
     * Enter given keys to city input field.
     * @param keys - String to be entered
     */
    this.typeCity = function (keys) {
        city.sendKeys(keys);
    };

    /**
     * Enter given keys to phone number input field.
     * @param keys - String to be entered
     */
    this.typePhoneNumber = function (keys) {
        phoneNumber.sendKeys(keys);
    };

    /**
     * Wait for e-mail sent box to be visible.
     */
    this.waitForRegistrationCompletedPage = function () {
        return browser.driver.wait(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(emailSentBox),
                10000,
                'Login has not been performed after 10 seconds'
            );
            return emailSentBox;
        });
    };

    /**
     * Wait for e-mail sent box to be visible, and then return if it is displayed.
     * @return {boolean} - True if e-mail sent box is displayed
     */
    this.isRegistrationCompletedPageDisplayed = function () {
        this.waitForRegistrationCompletedPage();
        return emailSentBox.isDisplayed();
    };

    /**
     * Perform a click on confirm registration button.
     */
    this.confirmRegistration = function () {
        confirmationButton.click();
    };

    /**
     * Select a country given by its acronym in the country dropdown menu.
     * @param acr - Acronym of country to be selected
     */
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
