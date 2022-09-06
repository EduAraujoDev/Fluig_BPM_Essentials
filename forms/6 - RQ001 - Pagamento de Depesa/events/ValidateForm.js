function validateForm(form){
    var atividadeAtual = getValue("WKNumState");
    var valor = form.getValue("RQ001_valor");
    var cpf = form.getValue("RQ001_cpf");

    valor = valor.replace(".", "");
    valor = valor.replace(",", ".");

    if (atividadeAtual == 1 || atividadeAtual == 0) {
        if (cpf == "") {
            throw "O campo 'cpf' deve ser preenchido!";
        }

        if (valor <= 0.00) {
            throw "O campo 'valor' deve ser preenchido!";
        }
    }
}