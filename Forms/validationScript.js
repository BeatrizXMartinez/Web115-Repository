  // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      var inputElement = document.getElementById('inputField');
      
      // Add an event listener to the form submits an event.
      //Implement a function that validates the input value using a regular expression for alphanumeric input.

      var form = document.getElementById('myForm');
      form.addEventListener('submit', function(e) {

        var userInput = inputElement.value;
        var regex = /^[a-zA-Z0-9]*$/; // Regular expression pattern for alphanumeric input
        
        if (regex.test(userInput)) { // Check if the input value matches the pattern
          alert('Valid input, your form has been send.') // Valid input: display confirmation and submit the form
          form.submit();
        } else {
          alert('Invalid input: Input is not alphanumeric.') // Invalid input: display error message
          e.preventDefault(); //Prevent the form from submitting if the input value is not alphanumeric.
        }
      })