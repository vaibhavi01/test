$(function() {


   // Setup form validation on the #register-form element
   $("#login_form").validate({  


     submitHandler: function(form)
     {
      if(document.getElementById('rememberme').checked==true)
      {
        var rememberme=1;

      }
      else
      {
        var rememberme=0;

      }
     
      dataString ={
        prs_username: $('#prs_username').val(),
        prs_password: $('#prs_password').val(),
        ref: $('#ref').val(),
        rememberme: rememberme,
      };
      
      $.ajax({
        type: "POST",
        url:base_url+ "admin/Login/loginUser",
        data: dataString,
        dataType:"json",
        beforeSend: function(){
   $('#form_submit').attr('disabled','disabled');
       },

       success: function(response)
       {
        
        
        if(response.success==true)
        {
          window.location.href=response.linkn;
        }
      
       else{
       $('#form_submit').removeAttr('disabled','disabled');
     $('#invalid_user_msg').css('display','block');
       
            }

       }
  });

      
      
    }

  });

 });










