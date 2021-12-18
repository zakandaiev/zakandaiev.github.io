$('#form').submit(function() {
	
	if (document.form.contact_name.value == '' || document.form.contact_email.value == '' || document.form.contact_subject.value == '' || document.form.contact_message.value == '') {
		valid = false;
		return valid;
	}
	
	$('#form .form-group').css("opacity",".3");
	$('#form button').css("opacity",".3");
	$('#form button').prop("disabled", true);
	$("#form-spinner").css("display", "block");
	
	$.ajax({
		url: "https://home255.000webhostapp.com/mail.php",
		crossDomain: true,
		type: "POST",
		cache: "false",
		dataType: "text",
		data: $(this).serialize()
	}).done(function() {
		$("#form-spinner .spinner").css("display", "none");
		$("#form-spinner .alert-thx").css("display", "block");
		setTimeout(function(){
			$("#form-spinner .alert-thx").css("display", "none");
			$("#form-spinner").css("display", "none");
			$(this).find('input').val('');
			$('#form').trigger('reset');
			$('#form .form-group').css("opacity","1");
			$('#form button').css("opacity","1");
			$('#form button').prop("disabled", false);
		}, 4000);
	});
	
	return false;
	
});

$('textarea').keyup(function() {
	var characterCount = $(this).val().length,
	current = $('#current'),
	maximum = $('#maximum');
	 
	current.text(characterCount);
	 
	if (characterCount >= 490) {
		maximum.css('color', '#e0474c');
	} else if (characterCount < 490) {
		maximum.css('color', '#55595c');
	}
	if (characterCount >= 497) {
		current.css('color', '#e0474c');
	} else if (characterCount < 497) {
		current.css('color', '#55595c');
	}
});