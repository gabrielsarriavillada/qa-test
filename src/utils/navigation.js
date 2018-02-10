/**
 * Navigate to given url using the credentials provided to server authentication.
 * @param path - Path after domain.
 * @param username - Username of credentials to authenticate into server.
 * @param password - Password of credentials to authenticate into server.
 */
var NavigateToUrlWithCredentials = function (path, username, password) {
    browser.get("http://" + username + ":" + password + "@qatest.staging.kaboo.com" + path);
};

module.exports = NavigateToUrlWithCredentials;