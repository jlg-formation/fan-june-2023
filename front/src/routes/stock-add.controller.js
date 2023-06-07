import { dirname } from "../misc";

export const StockAddCtrl = [
  "$scope",
  "$location",
  function StockAddCtrl($scope, $location) {
    console.log("ctrl stock add");

    $scope.name = "truc";
    $scope.price = 0;
    $scope.qty = 1;

    $scope.submit = function () {
      console.log("submit");
      const path = $location.path();
      const newPath = dirname(path);
      $location.path(newPath);
    };
  },
];
