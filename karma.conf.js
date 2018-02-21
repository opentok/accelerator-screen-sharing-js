module.exports = function(config) {
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.11',
      version: '64'
    }
  };

  var configuration = {
        plugins: [
           'karma-mocha', 'karma-coverage', 'karma-html2js-preprocessor', 'karma-sauce-launcher', 'karma-chrome-launcher', 'karma-chai'
        ],
        basePath: '',
        frameworks: ['mocha', 'chai'],
        client: {
            contextFile: '/test/index.html'
        },
        files: [
          'https://static.opentok.com/v2/js/opentok.min.js',
          'https://code.jquery.com/jquery-1.10.2.js',
          'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
          'node_modules/opentok-solutions-logging/src/opentok-solutions-logging.js',
          'dist/opentok-screen-sharing.js',
          'test/components/accelerator-pack.js',
          'test/opentok-screen-sharing-test.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'test/*.html': ['html2js'],
            'src/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage', 'dots', 'saucelabs'],
        port: 9877,
        colors: true,
        autoWatch: true,
        browsers: [],
        singleRun: true,
        logLevel: config.LOG_INFO,
        coverageReporter: {
            dir: 'test/coverage',
            instrumenter: {
                'src/*.js': ['istanbul']
            },
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
            ]
        },
        sauceLabs: {
          testName: 'Accelerator Screen Share Unit Tests',
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY
        }
    };

    if (process.env.TRAVIS) {
       configuration.customLaunchers = customLaunchers;
       configuration.browsers = Object.keys(customLaunchers);
    }
    config.set(configuration);
  };
