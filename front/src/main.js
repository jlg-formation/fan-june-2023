import appHtml from "./app/app.component.html";

import homeHtml from "./routes/home.html";
import legalHtml from "./routes/legal.html";
import stockHtml from "./routes/stock.html";
import stockAddHtml from "./routes/stock-add.html";
import notFoundHtml from "./routes/not-found.html";

import "./layout/layout";

import "./style.scss";

import { ArticleService } from "./services/article.service";
import { StockAddCtrl } from "./routes/stock-add.controller";

if (isProd) {
  console.log = () => {};
}

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
            $scope.selectedArticles = new Set();

            $scope.select = function (article) {
              console.log("select", article);
              if ($scope.selectedArticles.has(article)) {
                $scope.selectedArticles.delete(article);
                return;
              }
              $scope.selectedArticles.add(article);
              console.log("$scope.selectedArticles: ", $scope.selectedArticles);
            };

            $scope.remove = function () {
              console.log("remove");
              const ids = [...$scope.selectedArticles].map((a) => a.id);
              articleService
                .removeArticles(ids)
                .then(() => {
                  return articleService.getArticles();
                })
                .then(function (articles) {
                  console.log("articles: ", articles);
                  $scope.articles = articles;
                  $scope.selectedArticles.clear();
                })
                .catch((err) => {
                  console.log("err: ", err);
                });
            };

            $scope.refresh = function () {
              console.log("refresh");
              articleService
                .getArticles()
                .then(function (articles) {
                  console.log("articles: ", articles);
                  $scope.articles = articles;
                })
                .catch((err) => {
                  console.log("err: ", err);
                });
            };

            $scope.refresh();
          },
        ],
      })
      .when("/stock/add", {
        template: stockAddHtml,
        controller: StockAddCtrl,
      })
      .otherwise({
        template: notFoundHtml,
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
