import appHtml from "./app/app.component.html";

import homeHtml from "./routes/home.html";
import legalHtml from "./routes/legal.html";
import stockHtml from "./routes/stock.html";
import stockAddHtml from "./routes/stock-add.html";

import "./layout/layout";

import "./style.scss";

import { ArticleService } from "./services/article.service";

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
          "articleService",
          function ($scope, articleService) {
            console.log("articleService: ", articleService);
            console.log("controller ");
            articleService
              .getArticles()
              .then(function (articles) {
                console.log("articles: ", articles);
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

app.service("articleService", ArticleService);
