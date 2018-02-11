var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "should work with valid user credentials|Kaboo Login",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "0c4c227da3981886eb5cb626b06ee911",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518343418791,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518343419376,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518343419386,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/en/lobby - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518343419650,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518343420276,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518343420276,
                "type": ""
            }
        ],
        "screenShotFile": "0003001e-0023-0099-009c-004500c8001b.png",
        "timestamp": 1518343416642,
        "duration": 9959
    },
    {
        "description": "should work fine using valid data|Kaboo Signup",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "0c4c227da3981886eb5cb626b06ee911",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518343428944,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518343429724,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://kaboo:flappybird@qatest.staging.kaboo.com/en/signup - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518343429997,
                "type": ""
            }
        ],
        "screenShotFile": "005d00ca-0047-00de-00ec-004200d60046.png",
        "timestamp": 1518343428492,
        "duration": 20554
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    var firstTimestamp = a.timestamp;
    var secondTimestamp = b.timestamp;

    if (firstTimestamp < secondTimestamp) return -1;else return 1;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};