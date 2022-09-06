function inputFields(form){
    if (form.getValue("RQ001_data").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("RQ001_data").split('/');
        form.setValue("RQ001_data", split[2] + '-' + split[1] + '-' + split[0]);
    }
}