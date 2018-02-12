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
        "sessionId": "b715ddeee549ea3683f6357b231b81f2",
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
                "timestamp": 1518460877203,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation - Subresource requests whose URLs contain embedded credentials (e.g. `https://user:pass@host/`) are blocked. See https://www.chromestatus.com/feature/5669008342777856 for more details.",
                "timestamp": 1518460877460,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518460877986,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460878775,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460878815,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/lobby - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518460879077,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460879748,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460879749,
                "type": ""
            }
        ],
        "screenShotFile": "004400d1-004b-005a-0049-006e009c00a7.png",
        "timestamp": 1518460874842,
        "duration": 11374
    },
    {
        "description": "should work with valid user credentials|Kaboo Login from login form",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "b715ddeee549ea3683f6357b231b81f2",
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
                "timestamp": 1518460888395,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518460888898,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460889358,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518460889541,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460894814,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460894990,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460894991,
                "type": ""
            }
        ],
        "screenShotFile": "005d003c-0001-0006-0026-006400510026.png",
        "timestamp": 1518460888080,
        "duration": 10538
    },
    {
        "description": "should work fine using valid data|Kaboo Signup",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "b715ddeee549ea3683f6357b231b81f2",
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
                "timestamp": 1518460900624,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518460901100,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460901640,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/signup - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518460901914,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460921300,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460921479,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460921479,
                "type": ""
            }
        ],
        "screenShotFile": "0023007e-0047-002f-004c-003900fe0069.png",
        "timestamp": 1518460900329,
        "duration": 24287
    },
    {
        "description": "Should remove notification once registration has been completed|Kaboo Signup",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "sessionId": "b715ddeee549ea3683f6357b231b81f2",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Expected true to equal false.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (/Users/gsarria/workspace/recruitment-cases/qa-tests/src/spec/signUpSpec.js:108:60)\n    at /Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /Users/gsarria/.nvm/versions/node/v8.9.4/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518460926667,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 997:18 \"ServiceWorker registration failed: \"",
                "timestamp": 1518460927052,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460928398,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qatest.staging.kaboo.com/en/signup - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1518460928669,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 27345:12 \"%s\\nsessionId: %s\"",
                "timestamp": 1518460946431,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460950016,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460950192,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qatest.staging.kaboo.com/js/kaboo-bdf5e495b4.min.js 8122:14 \"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\"",
                "timestamp": 1518460950192,
                "type": ""
            }
        ],
        "screenShotFile": "0071009c-0009-006a-0016-00e1005f003c.png",
        "timestamp": 1518460926290,
        "duration": 27030
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