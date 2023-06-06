import layoutHeaderHtml from "./layout-header/layout-header.component.html";
import layoutFooterHtml from "./layout-footer/layout-footer.component.html";

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
  template: "<div ng-view></div>",
});

app.component("layoutFooter", {
  template: layoutFooterHtml,
});
