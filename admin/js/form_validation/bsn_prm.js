 $(function() {

 
    // Setup form validation on the #register-form element
    $("#bsn_prm_edit").validate({
    
       
        
        submitHandler: function(form) {


          document.getElementById("form_submit").style.display="none";
          
          
              var theValue_skill = document.getElementById('theValue_skill').value;
             
              var bpm_name = new Array();
              var bpm_id= new Array();
              var bpm_value = new Array();


              for(j=0;j<=theValue_skill;j++)
              {

               bpm_id.push($("[name='group-a["+j+"][bpm_id]']",form).val());
               bpm_name.push($("[name='group-a["+j+"][bpm_name]']", form).val());
               bpm_value.push($("[name='group-a["+j+"][bpm_value]']", form).val());
              
             } 
             
          
                 var formData = new FormData();
          
             formData.append("theValue_skill",theValue_skill);
             formData.append("bpm_name",bpm_name);
             formData.append("bpm_id",bpm_id);
             formData.append("bpm_value",bpm_value);
         
       
     
      
          $.ajax({
                type: "POST",
                url: base_url+ "Bsn_prm/requirement_update", 
                data : formData,
                dataType:"json",
                contentType: false,       // The content type used when sending data to the server.
                cache: false,             // To unable request pages to be cached
                processData:false,
                success: function(response)
                {
                    if(response.success==true)
                    {
                     document.getElementById("form_submit").style.display="inline-block";
                   location.reload();
                    }
                    else
                    {

                     document.getElementById("form_submit").style.display="inline-block";
                 
                
                                
                     
                    }
                }
            });
        
        }
    });

  });