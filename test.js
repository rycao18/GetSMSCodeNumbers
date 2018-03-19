var request = require('request')

request({
	method:"GET",
	url:"http://localhost:3000/check?number=23719"
}, function(err, response, body){
	if (err) console.error(err);
	else {
		console.log(body)
	}
})