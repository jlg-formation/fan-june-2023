import "./layout/layout";

var app = angular.module("myApp", ["layout"]);
app.config(function () {
  console.log("config myApp");
});
app.run(function () {
  console.log("run myApp");
});
app.component("hello", {
  template: "<h1>Hello {{ name }}</h1>",
  controller: function ($scope) {
    $scope.name = "JLG";
  },
});
