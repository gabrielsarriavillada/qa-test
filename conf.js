var HtmlReporter = require('protractor-beautiful-reporter');
var fs = require('fs-extra');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['src/spec/*.js'],

    onPrepare: function() {
        fs.emptyDir('test-report', function (err) {
            console.log(err);
        });
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-report'
        }).getJasmine2Reporter());
    }
};
