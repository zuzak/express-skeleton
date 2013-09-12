var express   = require("express"),
    config    = require("./config.js");
    app = express();

app.set("views", __dirname + "/views");
app.set("view engine","jade");
app.use(express.logger("dev"));
app.use(express.static(__dirname + "/public"));


app.listen(config.get('port'));
console.log("Listening on " + config.get('port'));

app.get("/", function(req, res){
    res.render("index");
});

