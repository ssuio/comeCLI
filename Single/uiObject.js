var fs = require('fs');
fs.readFile('target.java', function(err, data) {
  //data = data.toString();
  var array = data.toString().split("\n");
  var uiObj = 'FSWORMStatus'
  var uiObjvar = 'wormStatus'
  var data = 'public class '+ uiObj  +' extends RAIDDataObject{\n'
    +'public '+ uiObj +'(RAIDDataKeys key, DeviceRAID dev, String id) {\n'
	+'	super(key, dev, id, new JSONObject());\n'
	+'	refreshAllData();\n'
	+'	// TODO Auto-generated constructor stub\n'
	+'}\n'
	+'// For dummy RAID\n'
	+'public '+uiObj+'(RAIDDataKeys key, DeviceRAID dev, String objId, String jsonStr){\n'
	+'    super(key, dev, objId, jsonStr);\n'
	+'}\n'
	+'\n'
	+'@Override\n'
	+'public void refreshAllData() {\n'
	+'	refreshAllData(CommonParameters.CLICmdPriority.getCmdDefault);\n'
	+'}\n'
	+'public void refreshAllData(int priority) {\n'
	+'	try {\n'
	+'		JSONObject '+uiObjvar+' = this.getJSONDataObj("fssWormGclk", new JSONObject(), priority);\n'
	+'		this.addToDataObj('+uiObjvar+');\n'
	+'		\n'
	+'		updateObservers();\n'
	+'	} catch (JSONException e) {\n'
	+'		// TODO Auto-generated catch block\n'
	+'		e.printStackTrace();\n'
	+'	}\n'
	+'}\n'
	+'private void updateObservers(){\n'
	+'	this.updateData(this);\n'
	+'}\n'
	+'\n'
	+'public boolean isEnabled(){\n'
	+'	//TODO\n'
	+'	return !"false".equals(this.cliDataObj.optString("status"));\n'
	+'}\n'
+'}\n'

   		 fs.appendFileSync('target.java','\n'+ data +'\n');
   	// if(array[i].indexOf('nCase') !== -1)
   	// 	fs.appendFileSync('target.java','\n'+ deviceRaidCase +'\n');
});