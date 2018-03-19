const express = require('express')
const fs = require('fs')
const app = express()

app.get('/check', function(req, res) {
	// SEND NUMBERS WITH THE 86 IN THEM
	if(req.query.number.indexOf('86') != 0){
		res.send("Code -1: Number is not Chinese or does not have 86 in the front")
	}
	numbers = fs.readFileSync("numbers.txt").toString()
	if(numbers.indexOf(req.query.number) == -1) {
		res.send("Code 0: Number does not exist in database")
	} else {
		res.send("Code 1: Number exists in database!")
	}
});

app.get('/register', function(req, res) {
	if(req.query.number.indexOf('86') != 0){
		res.send("Code -1: Number is not Chinese or does not have 86 in the front")
	} else {
		numbers = fs.readFileSync("numbers.txt").toString()
		if(numbers.indexOf(req.query.number) == -1) {
			fs.appendFile("numbers.txt", req.query.number)
			res.send("Successfully added " + req.query.number + " to the database")
		} else {
			res.send("Code 1: Number exists in database! Please use /check to check the number before registering!");
		}
	}
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))