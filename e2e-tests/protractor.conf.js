//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  
  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    var disableNgAnimate = function () {
        angular.module('disableNgAnimate', []).run(function($animate){
            $animate.enabled(false);
        });    
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);
  },

};
