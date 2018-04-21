 $(function() {
     
 
    // Setup form validation on the #register-form element
    $("#set_password").validate({
    

        // Specify the validation rules
        rules: {
         
           cnfm_password: "required",
            password:"required",
            old_password:"required",

             cnfm_password:{
    required:true,
    equalTo:"#password"
  

  },
        },
        
        // Specify the validation error messages
       
        
        submitHandler: function(form) {
            
            var password = document.getElementById('password').value;
          
          if(var=='')
          {

                data = {
               
                 type:'encrypt',
                  old_password:old_password,
                   password:password,
                }
          }
          else
          {
              data = {
               
                 type:'decrypt',
                  old_password:old_password,
                   password:password,
                }
          }

              var old_password = document.getElementById('old_password').value;
           
              var prs_id = document.getElementById('prs_id').value;
             
              




            document.getElementById("submit-button").style.display="none";
            document.getElementById("processing").style.display="inline-block";

              $.ajax({
                    type: "POST",
                   //url: base_url + "MFS/savefree_trial", 
                   url: base_url+"profile/changepassword", 
                   data : data,
                    dataType:"json",
                    success: function(response){
                     // alert(response.success);
                        if(response.success==true){
                                document.getElementById("submit-button").style.display="inline-block";
                                document.getElementById("processing").style.display="none";
                                window.location.href=response.linkn;
                        }else{
                                 alert(response.message);
                                 document.getElementById("submit-button").style.display="inline-block";
                                 document.getElementById("processing").style.display="none";

                                          }
          
        }
    });

        }
    });

  });