function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var atividade = getValue("WKNumState");
	
	if (atividade == 0 || atividade == 1) {
		var anexos = hAPI.listAttachments();
		var nome = anexos.get(0);

		if (anexos.size() == 0) {
			throw "Favor incluir anexo!";
		}

		if (nome.getDocumentDescription() != "rg") {
			throw "Renomear arquivo!";
		}
	}
}