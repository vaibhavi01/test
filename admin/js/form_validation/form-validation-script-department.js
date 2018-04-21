var Script = function () {
   // alert('bhvbgh');

    $.validator.setDefaults({
        submitHandler: function() {  

            var dpt_id = document.getElementById('dpt_id').value;
           // alert(dpt_id);
           var dpt_name = document.getElementById('dpt_name').value;
          
            

              data = {
                dpt_id:dpt_id,
                  dpt_name:dpt_name,
                 
                 
    }
  $.ajax({
        type: "POST",
       // url: base_url + "MFS/savefree_trial", 
      url: base_url +"Department/modelinserts", 
        data : data,
        dataType:"json",
        success: function(response){
          if(response.success==true){
           alert(response.message);
           location.reload();
          }else{
            alert(response.message);
          }
          
        }
    });
    return false; }
    });

    $().ready(function() {
        // validate the comment form when it is submitted
        $("#add_model").validate();

    });


}();


function edit(dpt_id)
 {

    $.ajax({
        type:"POST",
        url:"Department/editdepartment", 
        data :{ dpt_id:dpt_id},
        success: function(myvar){
             window.mydata = myvar;
            var a=trim(myvar);
   
    var arr1 = new Array();
   
    arr1=a.split("##");
     document.getElementById("dpt_name").value=arr1[1];
        document.getElementById("dpt_id").value=arr1[0];
        /*$("#addnewform").toggle("slow");*/
                                
            
        }
    });
}

function deleting(dpt_id) {
    var d=confirm("Are you Sure deleting data with id { "+dpt_id+" }");
            if(d==1)
            {
    $.ajax({
        type:"POST",
        url:"Department/delete", 
        dataType:"json",
        data :{ dpt_id:dpt_id},
        success: function(response){
             if(response.success==true){
           alert(response.message);
           location.reload();
          }else{
            alert(response.message);
          }                         
            
        }
    });
                }
    
}


function LTrim( value )
{
    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");
}

function RTrim( value )
{
    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");
}

function trim( value )
{
    return LTrim(RTrim(value));
}