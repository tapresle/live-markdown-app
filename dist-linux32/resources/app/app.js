var markdown = require('markdown').markdown;
var electron = require('electron');
var remote = require('electron').remote;
var app = angular.module('live-md', ['ngSanitize']);

app.controller('live-md-ctrl', ['$sce', '$http', function ($sce, $http) {
  var self = this;
  
  self.basicInput = null;
  self.htmlOutput = null;
  
  self.update = function () {
    self.htmlOutput = markdown.toHTML(self.basicInput);
  }
  
  self.export = function () {
    remote.getCurrentWebContents().downloadURL('data:text/html,' + self.htmlOutput);
  }
}]);