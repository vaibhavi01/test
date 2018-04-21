  function isAlphaNumeric(str) {
    
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) 
        ) { // lower alpha (a-z)
      
       $('.error').html('');
      // /console.log('inside if condition');
      return true;
    }
      $('.error').html('');
  }
   $('.error').html('');
   $('#prs_user_name').addClass('error');
   $('#prs_user_name').val('');
  $('.aplhaNum_error').append('<label class="error">Username cannot contain only numbers</span>');

//console.log('else condition');
  return false;
};


 function validateMOBILE(event) {
  var key = window.event ? event.keyCode : event.which;
if (event.keyCode == 8 || event.keyCode == 46
|| event.keyCode == 37 || event.keyCode == 39) {
  return true;
}
else if ( key < 48 || key > 57 ) {
  return false;
}
else return true;
};



function check_validation(type,value,id)
{
  if (value != "") {
    data={
      type:type,
      value:value
  },
   $.ajax({
        type: "POST",
       url: base_url+"user/checkValidation", 
       data : data,
        dataType:"json",
        success: function(response){
      
            if(response.success==true){
                    
                $('#'+id).html('');
                 $('#'+id).parent().find('.error').html('');
                    $('#'+id).parent().append('<span class="error">Data already exists</span>');
            }else{
                   
             $('#'+id).html('');
         $('#'+id).parent().find('.error').html('');
             }
        }
    });
  }
  
}