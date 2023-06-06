import appHtml from "./app/app.component.html";

import "./layout/layout";

import "./style.scss";

var app = angular.module("myApp", ["layout"]);
app.config(function () {
  console.log("config myApp");
});
app.run(function () {
  console.log("run myApp");
});
app.component("app", {
  template: appHtml,
});
