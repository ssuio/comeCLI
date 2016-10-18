fs = require('fs');
const readline = require('readline');
const deviceRaid = require('./Single/deviceRaid_info.js');
const raidHandler = require('./Single/raidHandler.js');
const uiObject = require('./Single/uiObject.js');
const uiObjectJSON = require('./Single/uiObjectJSON.js');
const raidDataResource = require('./Single/raidDataResource.js');

const exec = require('child_process').exec;
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Run shell
fs.truncate('born.txt', 0, ()=>{console.log('Truncate!')});
shell();


fs

function shell(){
	rl.question('What generate ?  \n'
		+'1. deviceRaid.java {arg[0]=upperCase}\n'
		+'2. raidHandler.java {arg[0]=upperCase arg[1]=lowerCase}\n'
		+'3. uiObject.java {arg[0]=upperCase arg[1]=lowerCase}\n'
		+'4. raidDataResource.java {arg[0]=upperCase arg[1]=lowerCase}\n'
		+'5. uiObjectJSON.java {arg[0]=upperCase}\n'
		, (answer)=>{
		
		var arr = answer.split(' ');
		switch (arr[0]){
			case '1':
				deviceRaid.deviceRaid(arr[1]);
				break;
			case '2':
				raidHandler.raidHandler(arr[1],arr[2]);
				break;
			case '3':
				uiObject.uiObject(arr[1],arr[2]);
				break;
			case '4':
				raidDataResource.raidDataResource(arr[1],arr[2]);
				break;
			case '5':
				uiObjectJSON.uiObjectJSON(arr[1],arr[2]);
			break;
			default:
				deviceRaid.deviceRaid(arr[0]);
				raidHandler.raidHandler(arr[0],arr[1]);
				uiObject.uiObject(arr[0],arr[1]);
				raidDataResource.raidDataResource(arr[0],arr[1]);
				uiObjectJSON.uiObjectJSON(arr[0],arr[1]);
				break;

		}
		//shell();
	});
}


