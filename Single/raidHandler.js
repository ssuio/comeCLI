var fs = require('fs');

var key = 'FSWORMInfo';
var keyLow = 'fsWORMInfo';
var data = '    private void update'+key+'(DeviceRAID dev, UpdateObject obj){\n'
		+'        RAIDDataKeys dataKey = obj.getRAIDDataKey();\n'
		+'        ArrayList<CLIDataObject> addList = obj.getAddInfoList();\n'
		+'        for(Iterator<CLIDataObject> it=addList.iterator(); it.hasNext(); ){\n'
		+'            '+key+' '+keyLow+' = ('+key+')it.next();\n'
		+'            '+key+'JSON '+keyLow+'Json = new '+key+'JSON('+keyLow+');\n'
		+'            jsonDataMgr.putObj(dataKey.key(), '+keyLow+'Json);\n'
		+'\n'	
		+'            if(!dev.isDummy()) { '+keyLow+'Json.registerCLIDataObject('+keyLow+'); }\n'
		+'        }\n'
		+'\n'
		+'        if(dev.isDummy()) { return; }\n'
	    +'    }\n'



	fs.appendFileSync('target.java','\n'+ data +'\n');
   	// if(array[i].indexOf('nCase') !== -1)
   	// 	fs.appendFileSync('target.java','\n'+ deviceRaidCase +'\n');
