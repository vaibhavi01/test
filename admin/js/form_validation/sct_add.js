 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#sct_add_form").validate({  

        // Specify the validation rules
        ignore: 'input[type="hidden"]',
                      rules: {},
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {
                try
                {

                      $('#submit').css('display','none');
                      $('#processing').css('display','inline-block');
                  var formData = new FormData();

                  
                 formData.append('sct_cat_id',document.getElementById('sct_cat_id').value); 
                 formData.append('sct_name',document.getElementById('sct_name').value); 
                 formData.append('sct_parent_id',document.getElementById('sct_parent_id').value); 

              // console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/category/subCatInsert", 
                   data : formData,
                    dataType:"json",
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,
                    success: function(response){
                        if(response.success==true)
                            {
                                 $('#submit').css('display','inline-block');
                                 $('#processing').css('display','none');
                                swal({title: response.message, text: "", type: "success"},
                                             function(){ 
                                                 location.reload();
                                             }
                                          );
                             }
                             else
                             {
                                swal(response.message);

                      $('#submit').css('display','none');
                      $('#processing').css('display','inline-block');

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