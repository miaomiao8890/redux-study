var Admin = require("./controllers/admin");

module.exports = function(app){
  app.get("/admin/*", Admin.index);
  // API
  app.get("/articles", Admin.getArticleAll);
  app.post("/articles", Admin.addArticle);
}