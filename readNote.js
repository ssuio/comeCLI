

exports.readAFile =(a)=>{
	var fs = require('fs')
	fs.readFile('readMe.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log('\n' + data + a);
	});

}