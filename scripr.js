function insertNumber(number){
    var existingNumber = $('#monitor').val();
    $('#monitor').val(existingNumber + number);
}

function clearResult(){
    $('#monitor').val("");
}

function calculate(){
    var result = eval ($('#monitor').val())
    $('#monitor').val(result);
}

function deleteNum(){
    var presentValue = $('#monitor').val();
    if(presentValue!=''){
        $('#monitor').val(presentValue.slice(0,-1));
    }


}