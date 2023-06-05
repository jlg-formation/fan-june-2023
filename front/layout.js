(function (window) {
  "use strict";

  const app = angular.module("layout", []);

  app.component("layoutHeader", {
    template: "<p>Header works!</p>",
  });

  app.component("layoutBody", {
    template: "<p>Body works!</p>",
  });

  app.component("layoutFooter", {
    template: "<p>Footer works!</p>",
  });
})(window);
