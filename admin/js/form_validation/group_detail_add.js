 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#home_add_form").validate({  

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
                 
                 formData.append('group_id',document.getElementById('group_id').value); 
                 formData.append('cat_id',document.getElementById('cat_id').value); 
                 formData.append('sct_id',document.getElementById('sct_id').value); 
                 formData.append('prd_id',document.getElementById('prd_id').value); 
                 if(document.getElementById('group_id').value == 7)
                 {
                  formData.append('grp_title',document.getElementById('title').value); 
                 }
              console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/home/groupDetailAdd", 
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