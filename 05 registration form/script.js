//checks that the string (field_value) meets a minimum length
function check_length ( field_value, minimum_character_length ) {

	console.log ("field_value.length", field_value.length) ;
		if ( field_value.length < minimum_character_length ) {
			return false ;
		}

		return true ;
}

//function to validate data in form 
function validateForm() {

	//Get the fields & store as objects
	var username_textfield = document.getElementById ( 'username' ) ;

	var mail_textfield = document.getElementById ('mail') ;

	var password_field = document.getElementById ('password') ;

	var confirm_password_field = document.getElementById ( 'confirm_password' ) ;

	var color_options = document.getElementById ('color_options') ;

	// Initially this variable is set to false. Any fields that fail to validate will cause this variable to be set to true. 
	//If has_an_error is true, the form values will NOT be echoed on screen.
	var has_an_error = false;

	//USERNAME
	if (! check_length (username.value, 2) ) {  //too short
		var error_message = 'Warning: The username must be MORE than 2 characters!' ;
		console.log(error_message) ;
		username_textfield.setAttribute('class', 'error') ; //CSS class
		document.getElementById('username_message').textContent = error_message ; //set error msg contents
		document.getElementById('username_message').style.visibility = 'visible' ; //make error msg visible
		has_an_error = true ; 
	}
	else { //long enough
		console.log( 'The username was MORE THAN 2 characters!' ) ; 
		username_textfield.removeAttribute('class', 'error') ; //remove CSS class
		document.getElementById('username_message').textContent = ''; //blanks out error message
		document.getElementById('username_message').style.visibility = 'hidden' ; //hide blank error message
	}

	//EMAIL
	if (! check_length (mail.value, 5)) { //too short
		var error_message = "Warning: Your email must be MORE than 5 characters!" ;
		console.log(error_message) ;
		mail_textfield.setAttribute('class', 'error') ; 
		document.getElementById('email_message').textContent = error_message ; 
		document.getElementById('email_message').style.visibility = 'visible' ;
		has_an_error = true ;
	}
	else {
		console.log( 'The email was MORE THAN 5 characters!' ) ;
        mail_textfield.removeAttribute('class', 'error' ) ; 
        document.getElementById('email_message').textContent = '' ; 
        document.getElementById('email_message').style.visibility = 'hidden' ; 
    }

    //PASSWORD
    var check_password_for_a_number = true ; 

    if(! check_length (password_field.value, 10)) { //password too short
    	var error_message = 'Warning: Password must be MORE than 10 characters!'
    	console.log(error_message);
    	       password_field.setAttribute('class', 'error' ) ; 
        document.getElementById('password_message').textContent = error_message ; 
        document.getElementById('password_message').style.visibility = 'visible' ; 
        has_an_error = true ;
        check_password_for_a_number = false ; // Should we continue the other password checks? If false, don't bother.
    }
    else { 
        console.log( 'The password was MORE THAN ten characters!' ) ;
        password_field.removeAttribute('class', 'error' ) ; 
        document.getElementById('password_message').textContent = '' ; 
        document.getElementById('password_message').style.visibility = 'hidden' ; 
        check_password_for_a_number = true ; 
    }
    
    //PASSWORD CONTAINS A NUMBER

    var check_password_for_a_match = true ;

    if(check_password_for_a_number) {

    	var pattern = /\d/ ;
    	if(! pattern.test (password_field.value)) { //no digit appeared in the password...
    		var error_message = 'Warning: Your password must contain a number!';
    		console.log(error_message) ;
    		password_field.setAttribute('class', 'error') ;
    		document.getElementById('password_message').textContent = error_message ;
    		document.getElementById('password_message').style.visibility = 'visible' ;
    		has_an_error = true ;
    		check_password_for_a_match = false ;

    	}
    	else { // a digit does appear in the password
        	console.log( 'The password contains a number!' ) ;
        	password_field.removeAttribute('class', 'error' ) ; 
        	document.getElementById('password_message').textContent = '' ; 
        	document.getElementById('password_message').style.visibility = 'hidden' ; 
        	check_password_for_a_match = true ;
        }

    }

    //PASSWORD MATCH
    if (check_password_for_a_match) {

    	if ( password_field.value != confirm_password_field.value ) { 
            var error_message = 'The passwords did not match!' ; 
            console.log( error_message ) ;
            confirm_password_field.setAttribute('class', 'error' ) ; 
            document.getElementById('password_confirm_message').textContent = error_message ;
            document.getElementById('password_confirm_message').style.visibility = 'visible' ; 
            has_an_error = true ;
        }
        else { 
            console.log( 'The passwords matched!' ) ;
            confirm_password_field.removeAttribute('class', 'error' ) ; 
            document.getElementById('password_confirm_message').textContent = '' ; 
            document.getElementById('password_confirm_message').style.visibility = 'hidden' ; 
        }
    }
    
    //COLOR (RADIO BUTTON)
    var colors = document.getElementsByName("color") ; //get the colors parent div

    var has_picked_a_color = false ; //tracks whether user has picked a color

    //Find the selected color
    for (var button = 0 ; button < colors.length ; button++ ) {
    	if ( colors[button].checked ) {
    		selectedColor = colors[button].value;
    		console.log("selectedColor", selectedColor) ;
    		has_picked_a_color  = true ; 

    	}
    }

    //If they haven't picked a color, warn user
    if (! has_picked_a_color) {
    	var error_message = 'Please pick a color!' ; 
    	console.log(error_message) ;
    	color_options.setAttribute('class', 'error') ;
    	document.getElementById('color_message').textContent = error_message ;
    	document.getElementById('color_message').style.visibility = 'visible' ;
    	has_an_error = true ;
    }
    else {
    	console.log('A color was picked!') ;
    	color_options.removeAttribute('class', 'error') ;
    	document.getElementById('color_message').textContent = '';
    	document.getElementById('color_message').style.visibility = 'hidden' ;
    }

    // If no errors above, echo the form contents under submit button
    // & change the background color of div to selected color

   if( ! has_an_error ) {
   	console.log("Echoing the form contents.") ;

   	//create new empty div element
   	var form_values_div = document.createElement("div");   
   	//Set ID for this div
   	form_values_div.setAttribute("id", "form_values_div");

   	//Create a horizontal rule
   	var hr = document.createElement("hr");
   	//Add horizontal rule to our #form_values_div
   	form_values_div.appendChild(hr);

   	//Create new paragraph element
   	var username_p = document.createElement("p");
   	//Create new text node with our text in it
   	var username_text = document.createTextNode("Username: " + username.value);
   	//Add text node to our paragraph element
   	username_p.appendChild(username_text);
   	//Add the paragraph element to our #form_values_div.

   var email_p = document.createElement("p");
   var email_text = document.createTextNode("Email: " + mail.value);
   email_p.appendChild(email_text);
   form_values_div.appendChild(email_p); 

   var color_p = document.createElement("p");
   var color_text = document.createTextNode("Favorite color: " + selectedColor)
   color_p.appendChild(color_text);
   form_values_div.appendChild(color_p);

   //Add #form_values_div to the end of the body of the document
   document.body.appendChild(form_values_div);

   //Change div background color to the selected color
   form_values_div.style.backgroundColor = selectedColor ;

   //Change foreground color to white if the dark background color is chosen
   if( selectedColor == '#484147') {
   		form_values_div.style.color = 'white';
   }
   else {
   		form_values_div.style.color = 'black'
   }

   }

}

