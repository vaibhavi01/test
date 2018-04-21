 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#add_product").validate({  

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

                //********* IMAGE UPLOAD ***********//
                  var formData = new FormData();
                  var file = document.getElementById('files1');
                  var count = file.files.length;
                  formData.append('file_count',count);
                    for (var i = 0; i < count; i++) {
                      var allowedFiles = ["jpeg", "jpg", "png","JPG","PNG","doc", "docx", "pdf", "txt"];

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
                            return false;
                         }
                         else
                         {
                            flag=true;
                            $('#files1').css('border-color','#ccc');
                            $('#files1').next().css('color','none ');
                            $('#files1').next().html('');
                            formData.append("prod_img[]", document.getElementById('files1').files[i]);
                         }
                      
                        }
                        else
                        {
                            flag=true;
                            $('#files1').css('border-color','#ccc');
                            $('#files1').next().css('color','none ');
                            $('#files1').next().html('');
                        }
                        
                          
                    }
                //********* IMAGE UPLOAD ***********//
                 formData.append('prd_sct_id',document.getElementById('prd_sct_id').value); 
                 formData.append('prd_name',document.getElementById('prd_name').value);
                 formData.append('prd_desc',document.getElementById('prd_desc').value);
                 formData.append('type_count',document.getElementById('type_count').value); 

                 type_count              = document.getElementById('type_count').value; 
                 

                     // console.log('type_count : '+type_count);
                     // console.log('sub_type_count : '+sub_type_count);

                     var type           = new Array();
                     var sub_type       = new Array();
                     var sub_type_desc  = new Array();
                     var sub_type_count = new Array();
                     for (var i=0;i<=type_count; i++) 
                     {
                       // console.log(' type : '+i);
                       type.push($("[name='outer-group["+i+"][type]']").val());
                       formData.append('sub_type_count_'+i,$("#sub_type_count_"+i).val());
                       // console.log('sub_type_count : '+$("#sub_type_count_"+i).val());
                            for (var j=0;j<=$("#sub_type_count_"+i).val(); j++) 
                           {
                             console.log(' i : '+i+' j : '+j);
                             var str = $("[name='outer-group["+i+"][inner-group]["+j+"][sub_type_desc]']").val(); 
    				var newstring = str.replace(/,/g, "-");
    				
                             sub_type.push($("[name='outer-group["+i+"][inner-group]["+j+"][sub_type]']").val());
                             sub_type_desc.push(newstring);
                             
                            
                           
                           }
                     }
                     // console.log('type : '+type);
                     // console.log('sub_type : '+sub_type);
                     // console.log('sub_type_desc : '+sub_type_desc);
                 

                     formData.append('type',type);
                     formData.append('sub_type',sub_type);
                     formData.append('sub_type_desc',sub_type_desc);
                     formData.append('youtube_link',document.getElementById('youtube_link').value);
                     formData.append('prd_dsn_id',document.getElementById('prd_dsn_id').value);

              // console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/product/product_insert", 
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