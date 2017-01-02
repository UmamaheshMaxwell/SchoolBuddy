var express = require("express"),
	bodyParser = require("body-parser")

var app = express();
app.use(express.static(__dirname + "/public"))

var router = express.Router(); 

router.get("/", function(req, res){
	res.send("Hello Bengaluru !!!")
});


app.use("/", router);
var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log("Server Lisetning at port " + PORT)
})