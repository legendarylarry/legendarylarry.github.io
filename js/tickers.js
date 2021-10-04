document.addEventListener("DOMContentLoaded", function() {


var xhr = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr.readyState !== 4) return;

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr);
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

	// This will run either way
	// All three of these are optional, depending on what you're trying to do
	console.log('This always runs...');

};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

const interval = setInterval(function() {
   // method to be executed;
 }, 5000);


});
