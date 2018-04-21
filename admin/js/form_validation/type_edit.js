$(function() {
    // Setup form validation on the #register-form element
          
    $("#type_edit_form").validate({  

        // Specify the validation rules
        ignore: 'input[type="hidden"]',
                      rules: {

                      },
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {

         
            document.getElementById("submit").style.display="none";
            document.getElementById("processing").style.display="inline-block";


         
              var type_id     = document.getElementById('type_id').value; 
              var type_name   = document.getElementById('type_name').value;

              data =
               {
                type_id:type_id,
                type_name:type_name
              }

             // console.log(data);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/product/type_edit", 
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