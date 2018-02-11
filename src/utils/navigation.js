var Navigation = {

    /**
     * Navigate to url given path.
     * @param path - Path after domain.
     * */
    navigateToUrl : function (path) {
        browser.get("http://qatest.staging.kaboo.com" + path);
    },

    /**
     * Initialize browser, removing cookies and authenticating in server.
     */
    initialize : function () {
        var username = 'kaboo';
        var password = 'flappybird';

        // Remove cookies
        browser.manage().deleteAllCookies();

        // Server authentication
        browser.get("http://" + username + ":" + password + "@qatest.staging.kaboo.com");
    }
};
module.exports = Navigation;
