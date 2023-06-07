export var ArticleService = [
  "$http",
  function ($http) {
    console.log("constructor of ArticleService");
    this.getArticles = function () {
      return $http
        .get("http://localhost:3000/api/articles")
        .then((response) => {
          const articles = response.data;
          console.log("articles: ", articles);
          return articles;
        });
    };

    this.addArticle = function (newArticle) {
      return $http
        .post("http://localhost:3000/api/articles", newArticle)
        .then((response) => {
          console.log("response: ", response);
          return;
        });
    };

    this.removeArticles = function (ids) {
      return $http
        .delete("http://localhost:3000/api/articles", {
          data: ids,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return;
        });
    };
  },
];
