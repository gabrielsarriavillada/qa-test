'use strict';

var Lobby = require('../page-object/lobbyPageObject.js');

describe('Kaboo Login', function () {

    var lobby = new Lobby();

    beforeEach(function () {
        lobby.navigateTo();
    });

    it('should work with valid user credentials', function () {
        lobby.typeUsername('autouk'); // Introduce username
        lobby.typePassword('Autotest1'); // Introduce password
        lobby.login(); // Click on login button
        lobby.waitForProfile(); // Wait until profile icon is visible
        expect(lobby.isProfileIconDisplayed()).toEqual(true);
    });
});
