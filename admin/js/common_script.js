$('#cancel').click(function() {
   if(confirm("Are you sure you want to navigate away from this page?"))
   {
      history.go(-1);
   }        
   return false;
});


 function getcompany(company)
{
   $.ajax({
    type:"POST",
      url:"person/ajax_call_company", 
    data :{ company:company},
    success: function(myvar){
      //alert(myvar);
      $('#cct_cmp_id').html(myvar);
      $('#cct_cmp_id').val(company);
      
    


    }
  });
}


// $('#prs_dob').mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
