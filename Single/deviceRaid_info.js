var fs = require('fs');
var fsKey = 'FSWORMStatus';
var cliCMD = ''


fs.readFile('target.java', function(err, data) {
  //data = data.toString();
  var array = data.toString().split("\n");
  var deviceRaidFunc = 
  	'public void init'+ fsKey +'(int priority){\n'
        + '    UpdateObject obj = new UpdateObject(RAIDDataManager.RAIDDataKeys.'+ fsKey +');\n'
        + '    '+fsKey +' info = ('+ fsKey +') this.getDataObject(RAIDDataManager.RAIDDataKeys.'+ fsKey +'.code(), "'+ fsKey +'");\n'
        + '    if(info==null){\n'
        + '        info = new '+ fsKey +'(RAIDDataManager.RAIDDataKeys.'+ fsKey +', this, "'+ fsKey +'");\n'
        + '        ArrayList<RAIDDataObject> list = new ArrayList<RAIDDataObject>();\n'
        + '        list.add(info);\n'
        + '        this.raidDataMgr.addData(RAIDDataManager.RAIDDataKeys.'+ fsKey +'.code(), list);\n'
        + '        obj.setAddInfoList(info);\n'
        + '    }\n'
        + '    else\n'
        + '        info.refreshAllData(priority);\n'
        + '        this.updateData(obj);\n'
        + '    }\n'

  var deviceRaidCase = 
  +'        case '+ fsKey +':\n'
	+'            this.init'+ fsKey +'(priority);\n'
	+'            break;\n'

   		fs.appendFileSync('target.java','\n'+ deviceRaidFunc +'\n');
   		fs.appendFileSync('target.java','\n'+ deviceRaidCase +'\n');
});