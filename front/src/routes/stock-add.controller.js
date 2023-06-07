import { dirname } from "../misc";

export const StockAddCtrl = [
  "$scope",
  "$location",
  "articleService",
  function StockAddCtrl($scope, $location, articleService) {
    console.log("ctrl stock add");

    $scope.name = "truc";
    $scope.price = 0;
    $scope.qty = 1;

    $scope.submit = function () {
      console.log("submit");
      const newArticle = {
        name: $scope.name,
        price: $scope.price,
        qty: $scope.qty,
      };

      articleService
        .addArticle(newArticle)
        .then(() => {
          const path = $location.path();
          const newPath = dirname(path);
          $location.path(newPath);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };
  },
];
