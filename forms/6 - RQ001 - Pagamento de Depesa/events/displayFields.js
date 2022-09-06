function displayFields(form,customHTML){
    var idUsuario   = getValue("WKUser");

    var filtroUser = new Array();
    filtroUser.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", idUsuario, idUsuario, ConstraintType.MUST));

    var datasetUser = DatasetFactory.getDataset("colleague", null, filtroUser, null);


    form.setValue("RQ001_idUsuario", idUsuario);
    form.setValue("RQ001_nome_usuario", datasetUser.getValue(0, "colleagueName"));
}