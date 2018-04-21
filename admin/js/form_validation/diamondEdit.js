 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#diamondEdit").validate({  

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
                // //********* IMAGE UPLOAD ***********//
                    var file = $('input[type=file]');
                    var file_count =file.length;
                    var flag=true;
                    var allowedFiles = ["jpeg", "jpg", "png","JPG","PNG",];
                       for(i=0;i<file_count;i++)
                     {
                          
                            var file_name = file.eq(i).prop('id');
                       if(file[i].files.length != '0') 
                       {
                            var fileName = file[i].files[0].name;
                            var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                            var size = parseFloat(file[i].files[0].size / 1024).toFixed(2);
                        if ($.inArray(fileNameExt, allowedFiles) == -1 || size>5000)
                         {
                            var data = " Invalid Size or type";
                            flag=false;
                            file.eq(i).css('border-color','red ');
                            file.eq(i).next().css('color','red ');
                            file.eq(i).next().html(data);
                            $('#submit').css('display','inline-block');
                            $('#processing').css('display','none');
                            return false;
                         }
                         else
                         {
                            flag=true;
                            file.eq(i).css('border-color','#ccc');
                            file.eq(i).next().css('color','none ');
                            file.eq(i).next().html('');
                            formData.append(file_name, file[i].files[0]);
                         }
                      
                        }
                        else
                        {
                            flag=true;
                            file.eq(i).css('border-color','#ccc');
                            file.eq(i).next().css('color','none ');
                            file.eq(i).next().html('');
                        }
                     }
                // //********* IMAGE UPLOAD ***********//
                 formData.append('dmd_cut',document.getElementById('dmd_cut').value); 
                 formData.append('dmd_shape',document.getElementById('dmd_shape').value);
                 formData.append('dmd_carat',document.getElementById('range_1').value);
                 formData.append('dmd_color',document.getElementById('dmd_color').value);  
                 formData.append('dmd_clarity',document.getElementById('dmd_clarity').value);  
                 formData.append('dmd_polish',document.getElementById('dmd_polish').value);  
                 formData.append('dmd_price',document.getElementById('dmd_price').value);  
                 formData.append('dmd_lab',document.getElementById('dmd_lab').value);  
                 formData.append('dmd_symmetry',document.getElementById('dmd_symmetry').value);  
                 formData.append('dmd_360_view',document.getElementById('dmd_360_view').value);  
                 formData.append('dmd_table',document.getElementById('dmd_table').value);  
                 formData.append('dmd_depth',document.getElementById('dmd_depth').value);  
                 formData.append('dmd_girdle',document.getElementById('dmd_girdle').value);  
                 formData.append('dmd_cutlet',document.getElementById('dmd_cutlet').value);  
                 formData.append('dmd_meas',document.getElementById('dmd_meas').value); 
                 formData.append('dmd_id',document.getElementById('dmd_id').value); 
                 formData.append('dmd_sku_no',document.getElementById('dmd_sku_no').value);
                 

                   
              // console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/diamond/diamondUpdate", 
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
                                                 window.location.href=response.linkn;
                                             }
                                          );
                             }
                             else
                             {
                                swal(response.message);
                                 $('#submit').css('display','inline-block');
                                 $('#processing').css('display','none');

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