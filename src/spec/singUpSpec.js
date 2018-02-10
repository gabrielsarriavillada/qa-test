'use strict';

var RegistrationForm = require('../page_object/registrationPageObject.js');

describe('Kaboo signup', function () {

    var registrationForm = new RegistrationForm();

    beforeEach(function () {
        registrationForm.navigateTo();
    });

    it('should work fine', function () {
        registrationForm.typeEmail('aaa@aaa.ae');
        registrationForm.typeUsername('gsv5');
        registrationForm.typePassword('Testing1');
        registrationForm.repeatPassword('Testing1');
        registrationForm.acceptTC();
        registrationForm.nextStep();
        registrationForm.waitForSecondStep();
        expect(registrationForm.isSecondStepDisplayed()).toEqual(true);
        registrationForm.typeFirstName('Testb');
        registrationForm.typeLastName('Testb');
        registrationForm.typeDay('1');
        registrationForm.typeMonth('1');
        registrationForm.typeYear('1990');
        registrationForm.typeAddress('Testb');
        registrationForm.typeCity('Testb');
        registrationForm.typePostalCode('Testb');
        registrationForm.selectCountry('NO');
        registrationForm.typePhoneNumber('111111113');
        registrationForm.submit();
        registrationForm.waitForRegistrationCompletedPage();
        expect(registrationForm.isRegistrationCompletedPageDisplayed()).toEqual(true);
        registrationForm.confirmRegistration();
    });
});