(function (window) {
  "use strict";

  const app = angular.module("myApp", []);
  app.component("hello", {
    template: "<h1>Hello {{ name }}</h1>",
    controller: function ($scope) {
      $scope.name = "JLG";
    },
  });
})(window);
