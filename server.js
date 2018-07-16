const unirest = require('unirest');
const fs = require("fs");
const express = require('express');
const app = express();
const path = require('path');  

app.use(express.json());
app.use(express.static('./public'));

var key = fs.readFileSync("key.txt");

function searchWord(word){
	unirest.get("https://wordsapiv1.p.mashape.com/words/"+word+"/definitions")
		.header("X-Mashape-Key", key)
		.header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
		.end(function (result) {
			if (result.status!=200){
				console.log("Bad response!\n", result.status);
			}
			else{
				console.log(result.body);
				return result.body;
			}
		}
	);
}
module.exports = searchWord;

app.get('/', (req, res) => {
	console.log("req="+req);
	res.sendFile(path.join(__dirname + './index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));