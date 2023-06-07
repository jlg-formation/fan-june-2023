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
          "$http",
          function ($scope, $http) {
            console.log("controller ");
            $http
              .get("http://localhost:3000/api/articles")
              .then((articles) => {
                $scope.articles = articles;
              })
              .catch((err) => {
                console.log("err: ", err);
              });
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
