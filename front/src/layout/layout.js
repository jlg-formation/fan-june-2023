import layoutHeaderHtml from "./layout-header/layout-header.component.html";

const app = angular.module("layout", []);

app.config([
  "$rootScopeProvider",
  function ($rootScopeProvider) {
    console.log("config layout");
  },
]);
app.run([
  "$rootScope",
  function ($rootScope) {
    console.log("$rootScope: ", $rootScope);
    console.log("run layout");
  },
]);

app.component("layoutHeader", {
  template: layoutHeaderHtml,
});

app.component("layoutBody", {
  template: "<p>Body works!</p>",
});

app.component("layoutFooter", {
  template: "<p>Footer works!</p>",
});
