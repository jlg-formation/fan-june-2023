export const StockAddCtrl = [
  "$scope",
  function StockAddCtrl($scope) {
    console.log("ctrl stock add");

    $scope.name = "truc";
    $scope.price = 0;
    $scope.qty = 1;

    $scope.submit = function () {
      console.log("submit");
    };
  },
];
