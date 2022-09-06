function servicetask24(attempt, message) {
	var clientService = fluigAPI.getAuthorizeClientService();

    try{
        var data = {
            companyId: getValue('WKCompany') +'',
            serviceCode: 'api_teste',
            endpoint: '/despesa',
            method: 'post',
            timeoutService: '60',
            params: {
                idUsuario: hAPI.getCardValue("RQ001_idUsuario"),
                nomeUsuario: hAPI.getCardValue("RQ001_nome_usuario"),
                data: hAPI.getCardValue("RQ001_data"),
                natureza: hAPI.getCardValue("RQ001_natureza"),
                departamento: hAPI.getCardValue("RQ001_departamento"),
                valor: parseFloat(hAPI.getCardValue("RQ001_valor")),
                cpf: hAPI.getCardValue("RQ001_cpf"),
                observacao: hAPI.getCardValue("RQ001_observacao_centro_custo")
            }
        }
    
        var result = clientService.invoke(JSONUtil.toJSON(data));
    
        if (result.getResult() == null || result.getResult().isEmpty()) {
            throw 'Retorno está vazio!';
        } else {
            log.info('Conseguiu integrar!');
        }
    } catch (erro) {
        log.info('Erro com a integração!');

        throw erro;
    }
}