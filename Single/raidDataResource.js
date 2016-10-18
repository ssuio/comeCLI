module.exports.raidDataResource = (key,keyLow)=>{
var raiddata = '\n'
	+'    @POST\n'
    +'    @Path("/'+keyLow+'")\n'
    +'    @Produces("application/json")\n'
    +'    @Consumes("application/json")\n'
    +'    public String get'+key+'(@PathParam("devID") String devID,String jsonStr) {\n'
    +'        JSONObject retObj = new JSONObject();\n'
	+'        JSONObject addarr = new JSONObject();\n'
	+'        JSONArray delarr = new JSONArray();\n'
	+'        try {\n'
 	+'            retObj.put("addlist", addarr);\n'
 	+'            retObj.put("dellist", delarr);\n'
 	+'        } catch (JSONException e) {\n'
 	+'        }\n'
	+'        try{\n'
	+'            JSONObject obj = new JSONObject(new JSONTokener(jsonStr));\n'
	+'            RAIDFinderManager finderManager = EonOne.mainObj.m_RAIDFinderManager;\n'
	+'            RAIDHandler raidHandler = finderManager.getFinderHandlerByDevID(devID).getRAIDHandler();\n'
	+'            Set<String> '+keyLow+'Set = raidHandler.jsonDataMgr.getKeyList(RAIDDataManager.RAIDDataKeys.'+key+'.key());\n'
	+'            ArrayList<String> copy'+key+' = new ArrayList<String>();\n'
	+'            if('+keyLow+'Set != null) {\n'
	+'                copy'+key+'.addAll('+keyLow+'Set);\n'
	+'            }\n'
    +'            Iterator<String> key = obj.keys();\n'
    +'            while (key.hasNext()) {\n'
    +'                String id = key.next();\n'
    +'                if('+keyLow+'Set.contains(id)) {\n'
    +'                    '+key+'JSON '+keyLow+'Json = ('+key+'JSON) raidHandler.jsonDataMgr.getObj(RAIDDataManager.RAIDDataKeys.'+key+'.key(), id);\n'
    +'                    if('+keyLow+'Json.getRefCount() == obj.getInt(id)) {\n'
    +'                        copy'+key+'.remove(id);\n'
    +'                    }\n'
    +'                }else {\n'
    +'                    delarr.put(id);\n'
    +'                }\n'
    +'            }\n'
	+'            for(String id : copy'+key+'){	\n'
	+'                '+key+'JSON '+keyLow+'Json = ('+key+'JSON) raidHandler.jsonDataMgr.getObj(RAIDDataManager.RAIDDataKeys.'+key+'.key(), id);\n'
	+'                addarr.put(id, '+keyLow+'Json.getJSONObj());\n'
	+'            }      \n'
	+'\n'
	+'            retObj.put("addlist", addarr);\n'
	+'            retObj.put("dellist", delarr);\n'
	+'        } catch(Exception e){\n'
	+'        }\n'
	+'        return retObj.toString();\n'
    +'    }\n'

    var data = fs.readFileSync('D:/work/EonOne_WorkFlow_git2/src/com/infortrend/EonOne/raid/http/resources/RAIDDataResource.java').toString().split("\n");
        var text = "";
        for(line in data){
          if(data[line].indexOf('nTag') !== -1){
            data.splice(parseInt(line)+1, 0, raiddata);
            text = data.join("\n");
          }
        }


        fs.writeFile('D:/work/EonOne_WorkFlow_git2/src/com/infortrend/EonOne/raid/http/resources/RAIDDataResource.java', text, function (err) {
          if (err) return console.log(err);
        });

//fs.appendFileSync('born.txt','\n'+ data +'\n');
}