function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("id");
    dataset.addColumn("descricao");
    
    dataset.addRow(new Array(1, "Ti"));
    dataset.addRow(new Array(2, "Controladoria"));
    dataset.addRow(new Array(3, "Fiscal"));
    dataset.addRow(new Array(4, "Rh"));
    dataset.addRow(new Array(5, "Dp"));
    
    return dataset;
}
function onMobileSync(user) {

}