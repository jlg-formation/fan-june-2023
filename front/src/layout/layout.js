(function (window) {
  "use strict";

  const app = angular.module("layout", []);

  app.config(function ($rootScopeProvider) {
    console.log("config layout");
  });
  app.run(function ($rootScope) {
    console.log("$rootScope: ", $rootScope);
    console.log("run layout");
  });

  app.component("layoutHeader", {
    templateUrl: "./layout/layout-header/layout-header.component.html",
  });

  app.component("layoutBody", {
    template: "<p>Body works!</p>",
  });

  app.component("layoutFooter", {
    template: "<p>Footer works!</p>",
  });
})(window);
