var unirest = require('unirest');
var fs = require("fs");
var key = fs.readFileSync("key.txt");

unirest.get("https://wordsapiv1.p.mashape.com/words/bump/definitions")
    .header("X-Mashape-Key", key)
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(function (result) {
        if (result.status!=200){
            console.log("Bad response!\n", result.status);
        }
        else{
            console.log(result.body);
        }
    }
);