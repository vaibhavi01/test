var Script = function () {
   // alert('bhvbgh');

    $.validator.setDefaults({
        submitHandler: function() {  

            var sbm_id = document.getElementById('sbm_id').value;
            var sbm_mnu_id = document.getElementById('sbm_mnu_id').value;
            var sbm_parent_id = document.getElementById('sbm_parent_id').value;
            var sbm_group = document.getElementById('sbm_group').value;
           var sbm_name = document.getElementById('sbm_name').value;
            var sbm_pagelink = document.getElementById('sbm_pagelink').value;
             var sbm_order = document.getElementById('sbm_order').value;
          
            

              data = {
                sbm_id:sbm_id,
                sbm_mnu_id:sbm_mnu_id,
                sbm_parent_id:sbm_parent_id,
                sbm_group:sbm_group,
                  sbm_name:sbm_name,
                  sbm_pagelink:sbm_pagelink,
                  sbm_order:sbm_order
                 
                 
    }
  $.ajax({
        type: "POST",
       
      url: base_url +"Submenu_master/submenuinserts", 
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

function edit(sbm_id)
 {

    $.ajax({
        type:"POST",
        url:"Submenu_master/editsubmenu_master", 
        data :{ sbm_id:sbm_id},
        success: function(myvar){
             window.mydata = myvar;
            var a=trim(myvar);
   
    var arr1 = new Array();
   
    arr1=a.split("##");
    
      document.getElementById("sbm_id").value=arr1[0];
         document.getElementById("sbm_mnu_id").value=arr1[1];
          document.getElementById("sbm_name").value=arr1[2];
           document.getElementById("sbm_pagelink").value=arr1[3];
            document.getElementById("sbm_parent_id").value=arr1[4];
              document.getElementById("sbm_order").value=arr1[5];
            document.getElementById("sbm_group").value=arr1[6];
        /*$("#addnewform").toggle("slow");*/
                                
            
        }
    });
}

function deleting(sbm_id) {
    var d=confirm("Are you Sure deleting data with id { "+sbm_id+" }");
            if(d==1)
            {
    $.ajax({
        type:"POST",
        url:"Submenu_master/delete", 
        dataType:"json",
        data :{ sbm_id:sbm_id},
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