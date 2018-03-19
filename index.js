const express = require('express')
const fs = require('fs')
const app = express()

app.get('/check', function(req, res) {
	console.log(req.query.number)
	numbers = fs.readFileSync("numbers.txt").toString()
	if(numbers.indexOf(req.query.number) == -1) {
		res.send("Code 0: Number does not exist in database")
	} else {
		res.send("Code 1: Number exists in database!")
	}
});

app.get('/register', function(req, res) {
	fs.appendFile("numbers.txt", req.query.number)
	res.send("Successfully added " + req.query.number + " to the database")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))