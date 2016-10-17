const readline = require('readline');
const fs = require('fs');
const rn = require('./readNote.js');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

shell();



function shell(){
	rl.question('What generate ?  ', (answer)=>{
		
		var arr = answer.split(' ');
		if(arr[0] === 'nb')
			rn.readAFile(arr[1]);
		console.log(arr);
		shell();
	});
}


