import appHtml from "./app/app.component.html";

import homeHtml from "./routes/home.html";
import legalHtml from "./routes/legal.html";
import stockHtml from "./routes/stock.html";
import stockAddHtml from "./routes/stock-add.html";

import "./layout/layout";

import "./style.scss";

var app = angular.module("myApp", ["layout", "ngRoute"]);
console.log("myApp created");
app.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: homeHtml,
      })
      .when("/legal", {
        template: legalHtml,
      })
      .when("/stock", {
        template: stockHtml,
        controller: [
          "$scope",
          function ($scope) {
            console.log("controller ");
            $scope.articles = [
              { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
              { id: "a2", name: "Pelle", price: 3.45, qty: 12 },
            ];
          },
        ],
      })
      .when("/stock/add", {
        template: stockAddHtml,
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  },
]);
app.run(function () {
  console.log("run myApp");
});
app.component("app", {
  template: appHtml,
});
