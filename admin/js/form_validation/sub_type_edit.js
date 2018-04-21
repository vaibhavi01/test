$(function() {
    // Setup form validation on the #register-form element
          
    $("#sub_type_edit_form").validate({  

        // Specify the validation rules
        ignore: 'input[type="hidden"]',
                      rules: {

                      },
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {

         
            document.getElementById("submit").style.display="none";
            document.getElementById("processing").style.display="inline-block";


         
              var sub_type_id     = document.getElementById('sub_type_id').value; 
              var sub_type_name   = document.getElementById('sub_type_name').value;

              data =
               {
                sub_type_id:sub_type_id,
                sub_type_name:sub_type_name
              }

             // console.log(data);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/product/subtype_edit", 
                   data : data,
                    dataType:"json",
                    success: function(response){
                        if(response.success==true){
                                document.getElementById("submit").style.display="inline-block";
                                document.getElementById("processing").style.display="none";
                               swal({title: response.message, text: "", type: "success"},
                                             function(){ 
                                                 location.reload();
                                             }
                                          );
                        }else{
                                 swal(response.message);
                                 document.getElementById("submit").style.display="inline-block";
                                 document.getElementById("processing").style.display="none";

                                          }
          
        }
    });

        }
    });

  });