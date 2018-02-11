'use strict';

var RegistrationForm = require('../page-object/registrationPageObject.js');
var Lobby = require('../page-object/lobbyPageObject.js');
var RandomGenerator = require('../utils/randomGenerator.js');
var Navigation = require('../utils/navigation.js');

describe('Kaboo Signup', function () {
    var registrationForm = new RegistrationForm();
    var lobby = new Lobby();

    beforeEach(function () {
        Navigation.initialize(); // Initialize browser
        Navigation.navigateToUrl('/en/signup'); // Navigate to registration form by URL
    });

    it('should work fine using valid data', function () {
        // Generate random strings to be used during registration process
        var randomNumber = RandomGenerator.number(3);
        var randomString = RandomGenerator.string(6);

        // Introduce data for first step of registration
        registrationForm.typeEmail(randomNumber + '@test.test');
        registrationForm.typeUsername('gsv' + randomNumber);
        registrationForm.typePassword('Testing1');
        registrationForm.repeatPassword('Testing1');
        registrationForm.acceptTC();

        registrationForm.nextStep();

        // Check if user is redirected to second step of registration
        expect(registrationForm.isSecondStepDisplayed()).toEqual(true);

        // Introduce data for second step of registration
        registrationForm.typeFirstName('Name' + randomString);
        registrationForm.typeLastName('Lastname' + randomString);
        registrationForm.typeDay('1');
        registrationForm.typeMonth('1');
        registrationForm.typeYear('1990');
        registrationForm.typeAddress(randomString + ' Street');
        registrationForm.typeCity(randomString + ' Polis');
        registrationForm.typePostalCode(randomString);
        registrationForm.selectCountry('NO');
        registrationForm.typePhoneNumber(RandomGenerator.number(9));

        registrationForm.submit();

        // Check if user is redirected to confirmation of registration page
        expect(registrationForm.isRegistrationCompletedPageDisplayed()).toEqual(true);

        registrationForm.confirmRegistration();

        // Check if user is redirected to lobby once registration is confirmed
        expect(lobby.isDisplayed()).toEqual(true);
    });
});
