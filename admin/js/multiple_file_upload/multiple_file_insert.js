 // Setup form validation on the #register-form element
      $("#documents").validate({  

          // Specify the validation rules

          // Specify the validation error messages
          submitHandler: function(form) {

           document.getElementById('upload_button_value_docs').value='1';
           var form_data = new FormData();
           var doc_ref_no =  $('#doc_ref_no').val(); 
           var session_type =  $('#session_type').val(); 
           var ins = document.getElementById('files1').files.length;
           var documents_count = document.getElementById('documents_count').value; 

          for (var x = 0; x < ins; x++) 
          {
           form_data.append("files[]", document.getElementById('files1').files[x]);
           
         }
        form_data.append("doc_ref_no",doc_ref_no);
         $.ajax({
           url: base_url +"TaranganSession/UploadTempDoc/"+session_type,
               dataType:"json", // what to expect back from the server
               cache: false,
               contentType: false,
               processData: false,
               data: form_data,
               type: 'post',
               beforeSend: function(){
                 $("#upload_docs").html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i> uploading...');
               },
               success: function(response)
               {

                 if(response.success==true)
                 {
                   $("#information1").css('display','none');
                   document.getElementById("documents_priview").innerHTML='';
                 
                   $('#upload_docs').css('display','none');
                   $("#upload_docs").html('upload');
                   document.getElementById("doc_ref_no").setAttribute("value", response.doc_ref_no);
                   var success_msg='Following documents uploaded successfully.</br>'+response.message;
                   document.getElementById("doc_uploaded").innerHTML=document.getElementById("doc_uploaded").innerHTML+success_msg;

                   
                           // alert(response.message);
                    // window.location.href=response.linkn;

                  }
                  else{
                   $("#information1").css('display','none');
                   document.getElementById("documents_priview").innerHTML='';
                   $('#upload_docs').css('display','none');
                   $("#upload_docs").html('upload');
                   document.getElementById("doc_ref_no").setAttribute("value", response.doc_ref_no);
                 
                   if(response.uploaded_documents!='')
                   {
                    var success_msg='Following documents uploaded successfully.</br>'+response.uploaded_documents;
                    document.getElementById("doc_uploaded").innerHTML=document.getElementById("doc_uploaded").innerHTML+success_msg;

                               // alert(response.message);
                             }
                             var error_msg='Following documents cannot be uploaded.Size exceed more than 5 MB</br>'+response.message;
                             document.getElementById("doc_error_invalid_size").innerHTML=document.getElementById("doc_error_invalid_size").innerHTML+error_msg;
                   // document.getElementById("login_submit").disabled = false;
                   //  $('#success1').css('display','none');
                   //  $('#msg1').css('display','block');
                   //  $('#msg1').html(response.message);
                   //  $("#msg1").fadeOut(4000);

                 }
               }
             });

       }
     });