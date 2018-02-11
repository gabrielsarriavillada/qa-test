'use strict';

var RegistrationForm = require('../page-object/registrationPageObject.js');
var RandomNumberGenerator = require('../utils/randomNumberGenerator.js');
var RandomStringGenerator = require('../utils/randomStringGenerator.js');

describe('Kaboo Signup', function () {

    var registrationForm = new RegistrationForm();

    beforeEach(function () {
        registrationForm.navigateTo();
    });

    it('should work fine using valid data', function () {
        var randomNumber = RandomNumberGenerator(3);
        var randomString = RandomStringGenerator(6);
        registrationForm.typeEmail(randomNumber + '@test.test');
        registrationForm.typeUsername('gsv' + randomNumber);
        registrationForm.typePassword('Testing1');
        registrationForm.repeatPassword('Testing1');
        registrationForm.acceptTC();
        registrationForm.nextStep();
        registrationForm.waitForSecondStep();
        expect(registrationForm.isSecondStepDisplayed()).toEqual(true);
        registrationForm.typeFirstName('Name' + randomString);
        registrationForm.typeLastName('Lastname' + randomString);
        registrationForm.typeDay('1');
        registrationForm.typeMonth('1');
        registrationForm.typeYear('1990');
        registrationForm.typeAddress(randomString + ' Street');
        registrationForm.typeCity(randomString + ' Polis');
        registrationForm.typePostalCode(randomString);
        registrationForm.selectCountry('NO');
        registrationForm.typePhoneNumber(RandomNumberGenerator(9));
        registrationForm.submit();
        registrationForm.waitForRegistrationCompletedPage();
        expect(registrationForm.isRegistrationCompletedPageDisplayed()).toEqual(true);
        registrationForm.confirmRegistration();
    });
});
