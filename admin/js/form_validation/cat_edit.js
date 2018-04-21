 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#cat_edit_form").validate({  

        // Specify the validation rules
        ignore: 'input[type="hidden"]',
                      rules: {},
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {
                try
                {
                     var formData = new FormData();
                      $('#edit_submit').css('display','none');
                      $('#edit_processing').css('display','inline-block');

                 formData.append('edit_cat_name',document.getElementById('edit_cat_name').value); 
                 formData.append('edit_cat_order',document.getElementById('edit_cat_order').value); 
                 formData.append('edit_cat_id',document.getElementById('edit_cat_id').value); 

              console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/category/catUpdate", 
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