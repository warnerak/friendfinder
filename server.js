var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./app/routes/apiroutes")(app);
require("./app/routes/htmlroutes")(app);

app.listen(PORT, function() {
  console.log(`Now listening on port:${PORT}`);
});
