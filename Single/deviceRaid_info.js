module.exports.deviceRaid = (fsKey)=>{
  

  var deviceRaidFunc = '\npublic void init'+ fsKey +'(int priority){\n'
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
        
  var deviceRaidCase = '    case '+ fsKey +':\n'
                    	+'            this.init'+ fsKey +'(priority);\n'
                    	+'            break;'


        var data = fs.readFileSync('D:/work/AutoNasClass_git2/src/autoNasClass/raid/DeviceRaid.java').toString().split("\n");
        var text = "";
        for(line in data){
          if(data[line].indexOf('nTag') !== -1){
            data.splice(parseInt(line)+1, 0, deviceRaidFunc);
          }
          if(data[line].indexOf('n2Tag') !== -1){
            data.splice(parseInt(line)+1, 0, deviceRaidCase);
          }
        }
        text = data.join("\n");

        fs.writeFile('D:/work/AutoNasClass_git2/src/autoNasClass/raid/DeviceRaid.java', text, function (err) {
          if (err) return console.log(err);
        });



   		//fs.appendFileSync('born.txt','\n'+ deviceRaidFunc +'\n');
}
