$('#RQ001_valor').mask('000.000.000,00', {reverse: true});
$('#RQ001_cpf').mask('000.000.000-00');
$('#RQ001_cep').mask('00000-000')
    
var mySimpleCalendar = FLUIGC.calendar('#RQ001_data');

$('#RQ001_cep').blur(function() {
    var cep = $('#RQ001_cep').val();

    $.ajax({
        type: "GET",
        url: "https://viacep.com.br/ws/"+ cep +"/json/",
        async: false,
        dataType: 'json',
        success: function(data) {
            if (data != null) {
                if (data.erro == null) {
                    $('#RQ001_logradouro').val(data.logradouro);
                    $('#RQ001_bairro').val(data.bairro);
    
                    $('#RQ001_logradouro').attr('readonly', true);
                    $('#RQ001_bairro').attr('readonly', true);
    
                    $('#RQ001_numero').focus();
                } else {
                    $('#RQ001_logradouro').val("");
                    $('#RQ001_bairro').val("");
    
                    $('#RQ001_logradouro').attr('readonly', false);
                    $('#RQ001_bairro').attr('readonly', false);
                }
            } else {
                $('#RQ001_logradouro').val("");
                $('#RQ001_bairro').val("");

                $('#RQ001_logradouro').attr('readonly', false);
                $('#RQ001_bairro').attr('readonly', false);
            }
        }
    })
});

function anexoCustom() {
    JSInterface.showCamera('rg');
}