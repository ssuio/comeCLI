
    @POST
    @Path("/fsWORMStatus")
    @Produces("application/json")
    @Consumes("application/json")
    public String getFSWORMStatus(@PathParam("devID") String devID,String jsonStr) {
        JSONObject retObj = new JSONObject();
        JSONObject addarr = new JSONObject();
        JSONArray delarr = new JSONArray();
        try {
            retObj.put("addlist", addarr);
            retObj.put("dellist", delarr);
        } catch (JSONException e) {
        }
        try{
            JSONObject obj = new JSONObject(new JSONTokener(jsonStr));
            RAIDFinderManager finderManager = EonOne.mainObj.m_RAIDFinderManager;
            RAIDHandler raidHandler = finderManager.getFinderHandlerByDevID(devID).getRAIDHandler();
            Set<String> fsWORMStatusSet = raidHandler.jsonDataMgr.getKeyList(RAIDDataManager.RAIDDataKeys.FSWORMStatus.key());
            ArrayList<String> copyFSWORMStatus = new ArrayList<String>();
            if(fsWORMStatusSet != null) {
                copyFSWORMStatus.addAll(fsWORMStatusSet);
            }
            Iterator<String> key = obj.keys();
            while (key.hasNext()) {
                String id = key.next();
                if(fsWORMStatusSet.contains(id)) {
                    FSWORMStatusJSON fsWORMStatusJson = (FSWORMStatusJSON) raidHandler.jsonDataMgr.getObj(RAIDDataManager.RAIDDataKeys.FSWORMStatus.key(), id);
                    if(fsWORMStatusJson.getRefCount() == obj.getInt(id)) {
                        copyFSWORMStatus.remove(id);
                    }
                }else {
                    delarr.put(id);
                }
            }
            for(String id : copyFSWORMStatus){	
                FSWORMStatusJSON fsWORMStatusJson = (FSWORMStatusJSON) raidHandler.jsonDataMgr.getObj(RAIDDataManager.RAIDDataKeys.FSWORMStatus.key(), id);
                addarr.put(id, fsWORMStatusJson.getJSONObj());
            }      

            retObj.put("addlist", addarr);
            retObj.put("dellist", delarr);
        } catch(Exception e){
        }
        return retObj.toString();
    }


    private void updateFSWORMInfo(DeviceRAID dev, UpdateObject obj){
        RAIDDataKeys dataKey = obj.getRAIDDataKey();
        ArrayList<CLIDataObject> addList = obj.getAddInfoList();
        for(Iterator<CLIDataObject> it=addList.iterator(); it.hasNext(); ){
            FSWORMInfo fsWORMInfo = (FSWORMInfo)it.next();
            FSWORMInfoJSON fsWORMInfoJson = new FSWORMInfoJSON(fsWORMInfo);
            jsonDataMgr.putObj(dataKey.key(), fsWORMInfoJson);

            if(!dev.isDummy()) { fsWORMInfoJson.registerCLIDataObject(fsWORMInfo); }
        }

        if(dev.isDummy()) { return; }
    }

