 $(function() {

 
    // Setup form validation on the #register-form element
    $("#edit_profile").validate({
    
        
        // Specify the validation rules
       
        
        // Specify the validation error messages
       
        
        submitHandler: function(form) {
                    var formData = new FormData();

             var theValue_mob = document.getElementById('theValue_mob').value;
              var theValue_email = document.getElementById('theValue_email').value;


               var psm_id= new Array();
              var psm_mobile = new Array();

              var pse_id=new Array();
              var pse_email = new Array();
              for(j=0;j<=theValue_mob;j++)
              {
               psm_id.push($("[name='group-b["+j+"][psm_id]']",form).val());
               psm_mobile.push($("[name='group-b["+j+"][psm_mobile]']", form).val());
              
               
             
             } 

              for(k=0;k<=theValue_email;k++)
              {

               pse_id.push($("[name='group-c["+k+"][pse_id]']",form).val());
               pse_email.push($("[name='group-c["+k+"][pse_email]']", form).val());
               
             
             }

          
            
                 formData.append('prs_id', $('#prs_id').val());
                 formData.append('prs_name', $('#prs_name').val());
                formData.append('prs_name', $('#prs_name').val());
          formData.append('prs_user_name', $('#prs_user_name').val());
          formData.append('prs_mob', $('#prs_mob').val());
          formData.append('prs_email', $('#prs_email').val());
          formData.append('prs_department', $('#prs_department').val());
          formData.append('usr_designation',$('#usr_designation').val());
          formData.append('prs_location', $('#prs_location').val());
          formData.append('prs_address', $('#prs_address').val()); 
           formData.append('theValue_mob',theValue_mob);  
          formData.append('psm_mobile',psm_mobile); 
          formData.append('psm_id',psm_id); 
          formData.append('pse_id',pse_id); 
           formData.append('theValue_email',theValue_email);  
          formData.append('pse_email',pse_email); 
                  
                   


                $.ajax({
          type: "POST",
          url: base_url +"User/updateprofile", 
          data : formData,
          dataType:"json",

          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,

        beforeSend: function(){

         $("#edit_profile").attr('disabled','disabled');
       },
       success: function(response){
        if(response.success==true){
          alert(response.message);
          window.location.href=response.linkn;
        }else{
       $('#edit_profile').removeAttr('disabled','disabled');
          alert(response.message);
          
        }

      }
    });

        }
    });

  });