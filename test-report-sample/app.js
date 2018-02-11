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
        "description": "should work with valid user credentials|Kaboo Login from lobby",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "c471ed8ba9ed0a6d928fb2fa6dc4a170",
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
                "timestamp": 1518371093372,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation - Subresource requests whose URLs contain embedded credentials (e.g. `https://user:pass@host/`) are blocked. See https://www.chromestatus.com/feature/5669008342777856 for more details.",
                "timestamp": 1518371093634,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518371094002,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371094474,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371094517,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/lobby - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518371094782,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371095238,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371095239,
                "type": ""
            }
        ],
        "screenShotFile": "005b003a-0086-0095-00db-002a00bb004c.png",
        "timestamp": 1518371091250,
        "duration": 10660
    },
    {
        "description": "should work with valid user credentials|Kaboo Login from login form",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "c471ed8ba9ed0a6d928fb2fa6dc4a170",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518371103917,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518371104414,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371104886,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518371105071,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371110152,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371110355,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371110356,
                "type": ""
            }
        ],
        "screenShotFile": "004f0015-00fb-008a-006f-008d00c4002a.png",
        "timestamp": 1518371103622,
        "duration": 10387
    },
    {
        "description": "should work fine using valid data|Kaboo Signup",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "c471ed8ba9ed0a6d928fb2fa6dc4a170",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518371115921,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518371116365,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371116785,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/signup - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518371117037,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371136231,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371136436,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518371136436,
                "type": ""
            }
        ],
        "screenShotFile": "007900f7-006d-00f6-00b7-0055007a000e.png",
        "timestamp": 1518371115641,
        "duration": 23870
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