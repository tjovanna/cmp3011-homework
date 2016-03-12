//checks that the string (field_value) meets a minimum length
function check_length ( field_value, minimum_character_length ) {

	console.log ("field_value.length", field_value.length) ;
		if ( field_value.length < minimum_character_length ) {
			return false ;
		}

		return true ;
}

//function to validate data in form 
// function validateForm() {
$('#submit').on('click', function() {
	//Get the fields & store as objects
	var $username_textfield = $('#username' ) ;

	var $mail_textfield = $('#mail') ;

	var $password_field = $('#password') ;

	var $confirm_password_field = $('#confirm_password') ;

	var $color_options = $('#$color_options') ;

	// Initially this variable is set to false. Any fields that fail to validate will cause this variable to be set to true. 
	//If has_an_error is true, the form values will NOT be echoed on screen.
	var has_an_error = false;

	//USERNAME
	if (! check_length (username.value, 2) ) {  //too short
		var error_message = 'Warning: The username must be MORE than 2 characters!' ;
		console.log(error_message) ;
		$username_textfield.addClass('error') ; //CSS class
		$('#username_message').text(error_message) ; //set error msg contents
		$('#username_message').css('visibility', 'visible')  ; //make error msg visible
		has_an_error = true ; 
	}
	else { //long enough
		console.log( 'The username was MORE THAN 2 characters!' ) ; 
		$username_textfield.removeClass('error') ; //remove CSS class
		$('#username_message').text(' '); //blanks out error message
		$('#username_message').css('visibility', 'hidden') ; //hide blank error message
	}

	//EMAIL
	if (! check_length (mail.value, 5)) { //too short
		var error_message = "Warning: Your email must be MORE than 5 characters!" ;
		console.log(error_message) ;
		$mail_textfield.addClass('error') ; 
		$('#email_message').text(error_message) ; 
    $('#email_message').css('visibility', 'visible') ;
		has_an_error = true ;
	}
	else {
		console.log( 'The email was MORE THAN 5 characters!' ) ;
        $mail_textfield.removeClass('error' ) ; 
        $('#email_message').text(' ') ; 
        $('#email_message').css('visibility', 'hidden')  ; 
    }

    //PASSWORD
    var check_password_for_a_number = true ; 

    if(! check_length ($password_field.value, 10)) { //password too short
    	var error_message = 'Warning: Password must be MORE than 10 characters!';
    	console.log(error_message);
    	$password_field.addClass('error' ) ; 
      $('#password_message').text(error_message) ; 
      $('#password_message').css('visibility', 'visible'); 
        has_an_error = true ;
        check_password_for_a_number = false ; // Should we continue the other password checks? If false, don't bother.
    }
    else { 
        console.log( 'The password was MORE THAN ten characters!' ) ;
        $password_field.removeClass('error' ) ; 
        $('#password_message').text(' ') ; 
        $('#password_message').css('visibility', 'hidden'); 
        check_password_for_a_number = true ; 
    }
    
    //PASSWORD CONTAINS A NUMBER

    var check_password_for_a_match = true ;

    if(check_password_for_a_number) {

    	var pattern = /\d/ ;
    	if(! pattern.test ($password_field.value)) { //no digit appeared in the password...
    		var error_message = 'Warning: Your password must contain a number!';
    		console.log(error_message) ;
    		$password_field.addClass('error') ;
    		$('#password_message').text(error_message) ;
    		$('#password_message').css('visibility', 'visible');
    		has_an_error = true ;
    		check_password_for_a_match = false ;

    	}
    	else { // a digit does appear in the password
        	console.log( 'The password contains a number!' ) ;
        	$password_field.removeClass('error' ) ; 
        	$('#password_message').text('') ; 
        	$('#password_message').css('visibility', 'hidden');
        	check_password_for_a_match = true ;
        }

    }

    //PASSWORD MATCH
    if (check_password_for_a_match) {

    	if ( $password_field.value != $confirm_password_field.value ) { 
            var error_message = 'The passwords did not match!' ; 
            console.log( error_message ) ;
            $confirm_password_field.addClass('error' ) ; 
            $('#password_confirm_message').text(error_message) ;
            // document.getElementById('password_confirm_message').style.visibility = 'visible' ; 
            has_an_error = true ;
        }
        else { 
            console.log( 'The passwords matched!' ) ;
            $confirm_password_field.removeClass('error' ) ; 
            $('#password_confirm_message').text('') ; 
            // document.getElementById('password_confirm_message').style.visibility = 'hidden' ; 
        }
    }
    
    //COLOR (RADIO BUTTON)
    var $colors = $(':radio') ; //get the colors parent div

    var has_picked_a_color = false ; //tracks whether user has picked a color

    //Find the selected color
  $colors.each(
    function() {
    	if ( $(":checked")) {
    		selectedColor = this.value;
    		console.log("selectedColor", selectedColor) ;
    		has_picked_a_color  = true ; 

    	});
      
  

    //If they haven't picked a color, warn user
    if (! has_picked_a_color) {
    	var error_message = 'Please pick a color!' ; 
    	console.log(error_message) ;
    	$color_options.addClass('error') ;
    	$('#color_message').text(error_message) ;
    	// document.getElementById('color_message').style.visibility = 'visible' ;
    	has_an_error = true ;
    }
    else {
    	console.log('A color was picked!') ;
    	$color_options.removeClass('error') ;
    	$('#color_message').text('');
    	// document.getElementById('color_message').style.visibility = 'hidden' ;
    }

    // If no errors above, echo the form contents under submit button
    // & change the background color of div to selected color

   if( ! has_an_error ) {
   	console.log("Echoing the form contents.") ;

   	//create new empty div element
   	var $form_values_div = $('form').after('<div></div>');   
   	//Set ID for this div
   	$form_values_div.attr("id", "form_values_div");

   	//Create a horizontal rule
   	// var hr = document.createElement("hr");
   	//Add horizontal rule to our #form_values_div
   	$form_values_div.prepend('<hr>');
    $form_values_div.append('</p>Username: ' + username.value + '</br> Email: ' + mail.value + 'Favorite color: '+selectedColor+'</p>');

   //Change div background color to the selected color
   $form_values_div.css('background-color', selectedColor) ;

   //Change foreground color to white if the dark background color is chosen
   if( selectedColor == '#282525') {
   		$form_values_div.css('color', 'white');
   }
   else {
   		$form_values_div.css('color', 'black');
   }

   }
 }

