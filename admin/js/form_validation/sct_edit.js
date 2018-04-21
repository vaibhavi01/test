 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#scat_edit_form").validate({  

        // Specify the validation rules
        ignore: 'input[type="hidden"]',
                      rules: {},
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {
                try
                {

                      $('#edit_submit').css('display','none');
                      $('#edit_processing').css('display','inline-block');

                  var formData = new FormData();
                 
                 formData.append('edit_sct_id',document.getElementById('edit_sct_id').value); 
                 formData.append('edit_sct_name',document.getElementById('edit_sct_name').value); 

              console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/category/subCatUpdate", 
                   data : formData,
                    dataType:"json",
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,
                    success: function(response){
                        if(response.success==true)
                            {
                                 $('#edit_submit').css('display','inline-block');
                                 $('#edit_processing').css('display','none');
                                swal({title: response.message, text: "", type: "success"},
                                             function(){ 
                                                 location.reload();
                                             }
                                          );
                             }
                             else
                             {
                                swal(response.message);

                      $('#edit_submit').css('display','none');
                      $('#edit_processing').css('display','inline-block');

                             }
          
                         }
                     });
                }
                catch(e)
                {
                  console.log(e);
                }

           

        }
    });

  });