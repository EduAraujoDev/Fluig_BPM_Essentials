function enableFields(form){
    var atividadeAtual = getValue("WKNumState");

    form.setEnabled("RQ001_nome_usuario", false);

    if (atividadeAtual == 1 || atividadeAtual == 0) {
        form.setEnabled("RQ001_data", true);
    } else {
        form.setEnabled("RQ001_data", false);
    }

    if (atividadeAtual == 11) {
        form.setEnabled("RQ001_valor", true);
    }
}