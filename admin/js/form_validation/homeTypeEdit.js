 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#homeTypeEditform").validate({  

        // Specify the validation rules
        ignore: ['input[type="hidden"]'],
                      rules: {},
                  messages: {}, 
        
        // Specify the validation error messages
        submitHandler: function(form) {
                try
                {
                      $('#submit').css('display','none');
                      $('#processing').css('display','inline-block');
                      var formData = new FormData();
                      var type = $('#typ_id').val();
                      var imageflag = false,imageId = 'files1';
                      switch(type)
                      {
                        case '5':
                               console.log('case slider >>');
                               imageflag = true;                  //image upload true
                               imageMultipleFlag = true;        //image multiple true
                               console.log('case slider <<');
                               break;
                        case '6':
                               console.log('case banner >>');
                               imageflag = true;             //image upload true
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case banner <<');
                               break;
                        case '7':
                               console.log('case our collection >>');
                               imageflag = true;             //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case our collection <<');
                               break;
                        case '8':
                               console.log('case video >>');
                               imageflag = false;            //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               formData.append('youTubeLink',document.getElementById('youTubeLink').value); 
                               console.log('case video <<');
                               break;                   
                        default:
                               console.log('case default >>');
                               imageflag = false;            //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case default <<');
                      }
                  if(imageflag)
                  {
                      //********* IMAGE UPLOAD ***********//

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
                                var cat_doc =  document.getElementById('files1').files[0];
                                console.log('cat_doc : '+cat_doc);
                                if(imageMultipleFlag == true)
                                {
                                   for (var i = 0; i < count; i++) 
                                   {
                                     formData.append("img[]", document.getElementById('files1').files[i]);
                                   }
                                }
                                else
                                {
                                formData.append('img', document.getElementById('files1').files[0]);
                                }
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
                                return false;
                            }
                    //********* IMAGE UPLOAD ***********//
                  }
                
                 formData.append('type',document.getElementById('typ_id').value); 
                 formData.append('typetitleVal',document.getElementById('typetitleVal').value); 
                 formData.append('hgp_id',document.getElementById('hgp_id').value); 

              // console.log(formData);
              $.ajax({
                    type: "POST",
                   url: base_url+"admin/Home/homeTypeUpdate", 
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
 function clearFile()
 {
  // console.log('clearFile >> ');
  document.getElementById('files1').value = '';
  $('#documents_priview').html('');
  // console.log('clearFile << ');
 }