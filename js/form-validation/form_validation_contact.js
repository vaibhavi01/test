$(document).ready(function() {
    
	
    
	$('#contact_form').validate({
			errorClass: "my-error-class",
			rules : {
				

				

				contact_email : {

					email: true
				},

				

				
			},
			messages : {
				contact_email    : {

					email : "Please enter the valid email"
				},
				
				

			},


			submitHandler: function(form) {

			 		try
			 		{
			 			var name = document.getElementById('contact_name').value;
			 			var email = document.getElementById('contact_email').value;
			 			var subject = document.getElementById('contact_subject').value;
			 			
			 			var message = document.getElementById('message').value;
			 			


			 			data = {
							name:name,
							email:email,
							subject:subject,
							message:message

						}
						console.log(data);

						$.ajax({
							type: "POST",
		                    url: "Pages/contactDetails", 
		                    data:data,
		                    dataType:"json",
		                    success:function(response)
		                    {
		                    	if(response.success == true)
								{
									
									alert(response.message)
								}
								else
								{
									alert('NOT');
								}
		                    }
						});
			 		}catch(e)
			 		{
			 			console.log(e);
			 		}	
			}
	});
});	
