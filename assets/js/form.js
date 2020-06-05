// form section//
$(document).ready(function(){
	
	$('.contact_form').submit(
	
	function validateForm(e) {
		var name              = $('#name').val();
		var phone_number      = $('#phone_number').val();
		var email             = $('#email').val();		
		var message           = $('#message').val();
		var ok                = true;
		
		if(name == ''){
			ok = false;
		}
		
		if(phone_number == ''){
			ok = false;
		}
		
		if(email == ''){
			ok = false;
		}
		
		if(message == ""){
			ok = false;
		}
		
		if(ok){
			
			swal ('Hello, '+name);
		}else{
			e.preventDefault();
			$('#error').text('All Fields Are Required');
			return false;
		}
	});
	
});

