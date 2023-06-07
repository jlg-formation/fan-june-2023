import { dirname, sleep } from "../misc";

export const StockAddCtrl = [
  "$scope",
  "$location",
  "$q",
  "articleService",
  function StockAddCtrl($scope, $location, $q, articleService) {
    console.log("ctrl stock add");

    $scope.isAdding = false;

    $scope.name = "truc";
    $scope.price = 0;
    $scope.qty = 1;

    $scope.submit = function () {
      $scope.isAdding = true;
      console.log("submit");
      const newArticle = {
        name: $scope.name,
        price: $scope.price,
        qty: $scope.qty,
      };

      sleep(2000, $q)
        .then(() => {
          return articleService.addArticle(newArticle);
        })
        .then(() => {
          const path = $location.path();
          const newPath = dirname(path);
          $location.path(newPath);
        })
        .finally(() => {
          $scope.isAdding = false;
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };
  },
];
