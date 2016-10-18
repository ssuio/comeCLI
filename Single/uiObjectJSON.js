

var fs = require('fs');
fs.readFile('target.java', function(err, data) {
  //data = data.toString();
  var array = data.toString().split("\n");

  var uiObj = 'FSWORMStatus'

  var data = 
+'public class FSWORMStatusJSON extends Jsonlizable<'+ uiObj +'>{\n'
+'	public '+ uiObj +'JSON('+ uiObj +' target) {\n'
+'		super(target);\n'
+'	}\n'
+'\n'
+'	public static class Keys {\n'
+'		public static final String FSWORMSERVER_ID = "WORMstatus";\n'
+'		public static final String FSWORMSERVER_STATUS = "status";\n'
+'		public static String[] NORM = {\n'
+'			JSONObserver.REFCOUNT, \n'
+'			FSWORMSERVER_STATUS\n'
+'			\n'
+'		};\n'
+'	}\n'
+'	\n'
+'	@Override\n'
+'	public JSONObject toJSONObj('+ uiObj +' target) {\n'
+'		JSONObject obj = new JSONObject();\n'
+'		try{\n'
+'			obj.put(JSONObserver.REFCOUNT, this.getRefCount());\n'
+'			obj.put(Keys.FSWORMSERVER_STATUS, target.isEnabled());\n'
+'			obj.put(Keys.FSWORMSERVER_ID, "WORMstatus");\n'
+'		} catch(Exception e){\n'
+'		}\n'
+'		return obj;\n'
+'	}\n'
+'	\n'
+'	@Override\n'
+'	public boolean updateJSON('+ uiObj +' target) {\n'
+'		return updateJSON(Keys.NORM ,  this.toJSONObj(target));\n'
+'	}\n'
+'\n'
+'	@Override\n'
+'	public String getUniqueKey() {\n'
+'		return getCache().optString(Keys.FSWORMSERVER_ID, "");\n'
+'	}\n'
+'	@Override\n'
+'	public void update(Observable o, Object arg) {\n'
+'		if( this.updateJSON( ('+ uiObj +')o ) ){\n'
+'			this.refCnt = (refCnt+1) % Long.MAX_VALUE;\n'
+'			this.setCache(this.toJSONObj( ('+ uiObj +')o ));\n'
+'		}\n'
+'	}\n'
+'}\n'
   		 fs.appendFileSync('target.java','\n'+ data +'\n');
});