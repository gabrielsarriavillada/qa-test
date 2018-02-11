'use strict';

var Lobby = require('../page-object/lobbyPageObject.js');
var LoginForm = require('../page-object/loginPageObject.js');
var Homepage = require('../page-object/kabooPageObject.js');
var Navigation = require('../utils/navigation.js');

describe('Kaboo Login from lobby', function () {
    var lobby = new Lobby();

    beforeEach(function () {
        Navigation.initialize(); // Initialize browser
        Navigation.navigateToUrl('/en/lobby'); // Navigate to lobby page by URL
    });

    it('should work with valid user credentials', function () {
        // Enter valid user credentials
        lobby.typeUsername('autouk');
        lobby.typePassword('Autotest1');

        lobby.login();

        // Check profile icon is displayed
        expect(lobby.isProfileIconDisplayed()).toEqual(true);
    });
});

describe('Kaboo Login from login form', function () {

    var loginForm = new LoginForm();
    var lobby = new Lobby();
    var home = new Homepage();

    beforeEach(function () {
        Navigation.initialize(); // Initialize browser
        Navigation.navigateToUrl('/en/login'); // Navigate to login form by URL
    });

    it('should work with valid user credentials', function () {
        // Enter valid user credentials
        loginForm.typeUsername('autouk');
        loginForm.typePassword('Autotest1');

        loginForm.login();

        // Check lobby is displayed
        expect(lobby.isDisplayed()).toEqual(true);

        // Check profile icon is displayed
        expect(lobby.isProfileIconDisplayed()).toEqual(true);
    });
});

