 $(document).ready(function (e) {
 

// Function to preview image after validation
$(function() {

 $.fn.fileUploader = function (filesToUpload) {
           

            this.closest(".files").change(function (evt) {

          

             document.getElementById('upload_button_value_docs').value='0';
             // $('#upload_docs').css('display','block');
             // $("#information1").css('display','block');
             document.getElementById('documents_count').value=+document.getElementById('documents_count').value + +evt.target.files.length;
             for (var i = 0; i < evt.target.files.length; i++)
             {
                filesToUpload.push(evt.target.files[i]);
            };
            var output = [];
            document.getElementById("documents_priview").innerHTML='';
           for (var i = 0, f; f = evt.target.files[i]; i++) 
           {
          var sizeInMB = ( f.size / (1024*1024)).toFixed(2);
        
                    
                    data= "<div  class=\"row\"><div  class=\"col-md-6\"><span class=\"pip\">" + "<img class=\"imageThumb\" src=\"" +  URL.createObjectURL(evt.target.files[i]) + "\" />" +"</span> - <strong>"+f.name+ "</strong>-"+ sizeInMB+" MB. &nbsp; &nbsp;</div> </div>  ";
                          var div = document.getElementById('documents_priview');
                       document.getElementById("documents_priview").innerHTML=div.innerHTML +data;
                      

                }

             });
        };

        var filesToUpload = [];

        $(document).on("click",".removeFile", function(e){
         document.getElementById('documents_count').value=document.getElementById('documents_count').value - 1;
         e.preventDefault();
         var fileName = $(this).parent().children("strong").text();
             // loop through the files array and check if the name of that file matches FileName
            // and get the index of the match
            for(i = 0; i < filesToUpload.length; ++ i){
                if(filesToUpload[i].name == fileName){
                    //console.log("match at: " + i);
                    // remove the one element at the index where we get a match
                    filesToUpload.splice(i, 1);
                }   
            }
            //console.log(filesToUpload);
            // remove the <li> element of the removed file from the page DOM
            $(this).parent().remove();
        });


        $("#files1").fileUploader(filesToUpload);
        $("#files2").fileUploader(filesToUpload);

        $("#uploadBtn").click(function (e) {
            e.preventDefault();
        });


$("#file").change(function() {

$("#message").empty(); // To remove the previous error message
var file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];
if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
{
$('#previewing').attr('src','noimage.png');
$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
}
});
    
});
function imageIsLoaded(e) {
$("#file").css("color","green");
$('#image_preview').css("display", "block");
$('#previewing').attr('src', e.target.result);
$('#previewing').attr('width', '250px');
$('#previewing').attr('height', '230px');
};
});

