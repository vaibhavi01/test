 $(function() {


    var data1=document.getElementById('data').value;
      
     var radio =document.getElementById('radio').value;
      if(radio=='encrypt')
          {

                data = {
               
                 type:'encrypt',
                  data1:data1
                }
          }
          else
          {
              data = {
               
                 type:'decrypt',
                 data1:data1
                }
          }
    // Setup form validation on the #register-form element
    $("#encrypt").validate({
    
        
        // Specify the validation rules
        rules: {
         
           data: "required",
        
          
             data:{
                    required:true,
                   
  

                     },
              
        },
        messages: {
          
          
           data: {
                required: "Please enter the details",

                
            },
            // CUS_email: {
            //     required: "Please provide a password",
            //     minlength: "Your password must be at least 5 characters long"
            // },
           
           
        },
            
                    
        
        // Specify the validation error messages
       
        
        submitHandler: function(form) {
            //alert("reached");        
            var data_en = document.getElementById('data').value;
            //var radio = document.getElementById('security').value;
            
              
           var secure_me = "";
           
          //   secure_me = document.getElementById('radio1').value;
          //   alert(secure_me);
          //   secure_me = document.getElementById('radio2').value;
          // 
                var secure= document.querySelector('input[name="secure"]:checked').value;
              
              data = {
               
                 data_en:data_en,
                 secure:secure
                }
                  
                   

            // document.getElementById("submit_change_pw").style.display="none";
            // document.getElementById("processing").style.display="inline-block";
            
              $.ajax({
                    type: "POST",
                   //url: base_url + "MFS/savefree_trial", 
                   url: base_url+"user/secure",
                   data : data,
                    dataType:"json",
                    success: function(response){
                     // alert(response.success);
                        if(response.success==true)
                        {
                          $("#result").val(response.message);
                          // alert(response.message);
                          //       document.getElementById("submit_change_pw").style.display="inline-block";
                          //       // document.getElementById("processing").style.display="none";
                          //       window.location.href=response.linkn;
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