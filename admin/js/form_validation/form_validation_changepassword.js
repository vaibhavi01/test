 $(function() {

 
    // Setup form validation on the #register-form element
    $("#change_password").validate({
    
        
        // Specify the validation rules
        rules: {
         
           cnfm_password: "required",
            password:"required",
            old_password:"required",

             old_password:{
                    required:true,
                   
  

                     },
              chck_new_password:{
              required:true,
              equalTo:"#new_password"

            },
        },
        messages: {
          
          
            old_password: {
                required: "Please provide a password",

                equalTo :"Please enter a valid current password"
            },
            // CUS_email: {
            //     required: "Please provide a password",
            //     minlength: "Your password must be at least 5 characters long"
            // },
           
           
        },

        
        // Specify the validation error messages
       
        
        submitHandler: function(form) {
            
            var old_password = document.getElementById('old_password').value;
            var new_password=document.getElementById('new_password').value;
             var prs_id = document.getElementById('prs_id').value;
              data = {
               
                 old_password:old_password,
                  new_password:new_password,
                  prs_id:prs_id
                }
                  
              $.ajax({
                    type: "POST",
                   //url: base_url + "MFS/savefree_trial", 
                   url: base_url+"User/changePassword",
                   data : data,
                    dataType:"json",
                    success: function(response){
                     // alert(response.success);
                        if(response.success==true){
                          alert(response.message);
                                document.getElementById("submit_change_pw").style.display="inline-block";
                                // document.getElementById("processing").style.display="none";
                                window.location.href=response.linkn;
                        }else{
                                 alert(response.message);
                                 document.getElementById("submit_change_pw").style.display="inline-block";
                                 // document.getElementById("processing").style.display="none";

                                          }
          
        }
    });

        }
    });

  });