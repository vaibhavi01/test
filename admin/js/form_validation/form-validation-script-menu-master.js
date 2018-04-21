var Script = function () {
   // alert('bhvbgh');

    $.validator.setDefaults({
        submitHandler: function() {  

            var mnu_id = document.getElementById('mnu_id').value;
           // alert(mnu_id);
           var mnu_name = document.getElementById('mnu_name').value;
            var mnu_link = document.getElementById('mnu_link').value;
             var mnu_icon = document.getElementById('mnu_icon').value;
          var mnu_order = document.getElementById('mnu_order').value;
            

              data = {
                mnu_id:mnu_id,
                  mnu_name:mnu_name,
                  mnu_link:mnu_link,
                  mnu_icon:mnu_icon,
                  mnu_order:mnu_order
                 
                 
    }
  $.ajax({
        type: "POST",
       
      url: base_url +"Menu_master/menuinserts", 
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

function edit(mnu_id)
 {

    $.ajax({
        type:"POST",
        url:"Menu_master/editmenu_master", 
        data :{ mnu_id:mnu_id},
        success: function(myvar){
             window.mydata = myvar;
            var a=trim(myvar);
   
    var arr1 = new Array();
   
    arr1=a.split("##");
       document.getElementById("mnu_id").value=arr1[0];
         document.getElementById("mnu_name").value=arr1[1];
          document.getElementById("mnu_order").value=arr1[2];
           document.getElementById("mnu_link").value=arr1[3];
            document.getElementById("mnu_icon").value=arr1[4];
        /*$("#addnewform").toggle("slow");*/
                                
            
        }
    });
}

function deleting(mnu_id) {
    var d=confirm("Are you Sure deleting data with id { "+mnu_id+" }");
            if(d==1)
            {
    $.ajax({
        type:"POST",
        url:"Menu_master/delete", 
        dataType:"json",
        data :{ mnu_id:mnu_id},
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