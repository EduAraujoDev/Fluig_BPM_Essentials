function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    try {
        var clientService = fluigAPI.getAuthorizeClientService();
        
        var data = {
            companyId: ""+ getValue("WKCompany"),
            serviceCode: "api_teste",
            endpoint: "/natureza",
            method: "GET",
            timeoutService: "10"
        }
        
        var response = clientService.invoke(JSON.stringify(data));
        var httpStatus = String(response.getHttpStatusResult());
        
        if (response.getResult()) {
            var dataset = DatasetBuilder.newDataset();
        
            dataset.addColumn("id");
            dataset.addColumn("codigo");
            dataset.addColumn("descricao");
            dataset.addColumn("descricao_2");
            
            var respObj = JSON.parse(response.getResult());
            
            for (var i = 0; i < respObj.length; i++) {
                dataset.addRow(new Array(respObj[i].id, respObj[i].codigo, respObj[i].descricao, respObj[i].codigo +" - "+  respObj[i].descricao));
            }
        } else {
            throw "teste";
        }
    } catch(err) {
        dataset = DatasetBuilder.newDataset();
        
        dataset.addColumn("httpStatus");
        dataset.addColumn("error");
        
        dataset.addRow(new Array(httpStatus, err));
    } finally {
        return dataset;
    }
}
function onMobileSync(user) {

}