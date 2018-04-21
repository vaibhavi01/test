 $(function() {
//alert('hello');
    // Setup form validation on the #register-form element
    $("#diamondTypeAddform").validate({  

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
                      var formData = new FormData();
                      var type = $('#dgp_type').val();
                      var imageflag = false,imageId = 'files1',titleId='typetitleVal';
                     switch(type)
                      {
                        case '2':
                               console.log('case shape >>');
                               imageflag = true;                  //image upload true
                               imageMultipleFlag = false;        //image multiple false                               
                               console.log('case shape <<');
                               break;
                        case '3':
                               console.log('case colour >>');
                               imageflag = true;             //image upload true
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case colour <<');
                               break;
                        case '4':
                               console.log('case clarity >>');
                               imageflag = false;             //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               titleId='title';
                               console.log('case clarity <<');
                               break;

                        case '6':
                               console.log('case labs >>');
                               imageflag = false;            //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case labs <<');
                               break;                   
                        default:
                               console.log('case default >>');
                               imageflag = false;            //image upload false
                               imageMultipleFlag = false;   //image multiple false
                               console.log('case default <<');
                      }
                  //********* IMAGE UPLOAD ***********//
                  var formData = new FormData();
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
                            formData.append("img", document.getElementById('files1').files[0]);
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
                  
                
                 formData.append('type',document.getElementById('dgp_type').value);
                 formData.append('dgp_desc',document.getElementById('dgp_desc').value); 
                 formData.append('typetitleVal',document.getElementById('typetitleVal').value); 
                 formData.append('dgp_title',document.getElementById('dgp_title').value); 
                 formData.append('dgp_id',document.getElementById('dgp_id').value); 
                // alert('bottom');

              // console.log(formData);
              $.ajax({
                    type: "POST",
                    url: base_url+"admin/Diamond/diamondTypeUpdate", 
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
                              $('#submit').css('display','inline-block');
                              $('#processing').css('display','none');
                              if(response.data != '1')
                              {
                                swal(response.message);
                              }
                              else
                              {
                                swal({
                      title: "Are you sure u want to update the data",
                      text: response.message,
                      type: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#DD6B55",
                      confirmButtonText: "Yes, Update it!",
                      cancelButtonText: "No, cancel please!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm){
                      if (isConfirm) {
                     formData.append('updateTrue','1'); 
                            $.ajax({
                                    type: "POST",
                                    url: base_url+"admin/Diamond/diamondTypeUpdate", 
                                    data : formData,
                                    dataType:"json",
                                    contentType: false,       // The content type used when sending data to the server.
                                    cache: false,             // To unable request pages to be cached
                                    processData:false,
                                    success: function(response){
                                        if(response.success == true)
                                        {
                                           $('#submit').css('display','inline-block');
                                           $('#processing').css('display','none');
                                          swal({title: response.message, text: "", type: "success"},
                                                       function(){ 
                                                           location.reload();
                                                       }
                                                    );
                                        }else
                                        {
                                          swal(response.message);
                                        }
                                  
                          
                                         }
                                     });
                      } else {
                        swal("Cancelled", "Data is safe", "error");
                      }
                    });
                              }

                      

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