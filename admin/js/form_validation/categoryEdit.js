 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#cat_edit_form").validate({  

        // Specify the validation rules
        ignore: ['input[type="hidden"]'],
                      rules: {

                      },
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {
          //console.log('jksdjl');
                try
                {
                      $('#submit').css('display','none');
                      $('#processing').css('display','inline-block');
                    
                //********* IMAGE UPLOAD ***********//
                  var formData = new FormData();
                  var file = document.getElementById('files1');
                  var count = file.files.length;
                  formData.append('file_count',count);
                  var allowedFiles = ["jpeg", "jpg", "png","JPG","PNG"];

                            // var file_name = files1;
                       if(count != '0') 
                       {
                            var fileName = file.files[0].name;
                            var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                            var size = parseFloat(file.files[0].size / 1024).toFixed(2);
                        if ($.inArray(fileNameExt, allowedFiles) == -1 || size>5000)
                         {
                            var data = fileName+" is Invalid ";
                            flag=false;

                            $('#files1').css('border-color','red ');
                            $('#files1').next().css('color','red ');
                            $('#files1').next().html(data);
                            $('#submit').css('display','inline-block');
                            $('#processing').css('display','none');
                            return false;
                         }
                         else
                         {
                            flag=true;
                            $('#files1').css('border-color','#ccc');
                            $('#files1').next().css('color','none ');
                            $('#files1').next().html('');
                            formData.append("cat_doc", document.getElementById('files1').files[0]);
                         }
                      
                        }
                        else
                        {
                            flag=true;
                            $('#files1').css('border-color','#ccc');
                            $('#files1').next().css('color','none ');
                            $('#files1').next().html('');
                            $('#submit').css('display','inline-block');
                            $('#processing').css('display','none');
                            //return false;
                        }
                //********* IMAGE UPLOAD ***********//
                
                 formData.append('cat_name',document.getElementById('cat_name').value);
                 formData.append('cat_order',document.getElementById('cat_order').value); 
                 formData.append('cat_id',document.getElementById('cat_id').value); 
                // alert('bottom');

              // console.log(formData);
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
 function clearFile()
 {
  // console.log('clearFile >> ');
  document.getElementById('files1').value = '';
  $('#documents_priview').html('');
  // console.log('clearFile << ');
 }