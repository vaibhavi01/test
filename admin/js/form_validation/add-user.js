 $(function() {

 
    // Setup form validation on the #register-form element
    $("#add_user").validate({
    
        
       rules: {
         
           prs_password: "required",
            prs_cnfrm_password:"required",

            
              prs_cnfrm_password:{
              required:true,
              equalTo:"#prs_password"

            },
        },
       
        
        submitHandler: function(form) {
            
            var prs_name = document.getElementById('prs_name').value;
            var prs_user_name=document.getElementById('prs_user_name').value;
            var prs_mob = document.getElementById('prs_mob').value;
            var prs_email=document.getElementById('prs_email').value;
            var prs_department = document.getElementById('prs_department').value;
              var usr_designation = document.getElementById('usr_designation').value;
            var prs_location=document.getElementById('prs_location').value;
            var prs_address =document.getElementById('prs_address').value;
             var prs_password =document.getElementById('prs_password').value;

            var theValue_mobile = document.getElementById('theValue_mobile').value;
             
              var prs_mobile_extra = new Array();

              for(j=0;j<=theValue_mobile;j++)
              {
               
               prs_mobile_extra.push($("[name='group-a["+j+"][prs_mobile_extra]']", form).val());
              
             } 

               var theValue_email = document.getElementById('theValue_email').value;
            
              var prs_email_extra = new Array();

              for(j=0;j<=theValue_email;j++)
              {
               
               prs_email_extra.push($("[name='group-b["+j+"][prs_email_extra]']", form).val());
              
             } 
          
              data = {
            
                   prs_name:prs_name,
                   prs_user_name:prs_user_name,
                   prs_mob:prs_mob,
                   prs_email:prs_email,
                   prs_department:prs_department,
                   usr_designation:usr_designation,
                   prs_location:prs_location,
                   prs_password:prs_password,
                   prs_address:prs_address,
                   theValue_mobile:theValue_mobile,
                   prs_mobile_extra:prs_mobile_extra,
                   theValue_email:theValue_email,
                   prs_email_extra:prs_email_extra
                }
                  
                   

            document.getElementById("form_submit").style.display="none";
            // document.getElementById("processing").style.display="inline-block";
            
              $.ajax({
                    type: "POST",
                   //url: base_url + "MFS/savefree_trial", 
                   url: base_url+"User/insertUser",
                   data : data,
                    dataType:"json",
                    success: function(response){
                     // alert(response.success);
                        if(response.success==true){
                          alert(response.message);
                                document.getElementById("form_submit").style.display="inline-block";
                                // document.getElementById("processing").style.display="none";
                                window.location.href=response.linkn;
                        }else{
                                 alert(response.message);
                                 document.getElementById("form_submit").style.display="inline-block";
                                 // document.getElementById("processing").style.display="none";

                                          }
          
        }
    });

        }
    });

  });