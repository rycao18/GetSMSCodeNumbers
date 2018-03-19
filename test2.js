var request = require('request')

request({
	method:"GET",
	url:"http://localhost:3000/register?number=860454889818"
}, function(err, response, body){
	if (err) console.error(err);
	else {
		console.log(body)
	}
})