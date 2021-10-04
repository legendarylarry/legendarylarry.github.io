document.addEventListener("DOMContentLoaded", function() {


var xhr_extract = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr_extract.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr_extract.readyState !== 4) return;

	// Process our return data
	if (xhr_extract.status >= 200 && xhr_extract.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr_extract);
		document.querySelector('#ticker-extract').innerHTML = xhr_extract.responseText;
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}


};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
 xhr_extract.open('GET', 'http://18.223.40.153/ticker/kr_extract_extract_FsCSV');
   xhr_extract.send();

const interval = setInterval(function() {
   xhr_extract.open('GET', 'http://18.223.40.153/ticker/kr_extract_extract_FsCSV');
   xhr_extract.send();
 }, 3000);


var xhr_kafka = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr_kafka.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr_kafka.readyState !== 4) return;

	// Process our return data
	if (xhr_kafka.status >= 200 && xhr_kafka.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr_kafka);
		document.querySelector('#ticker-kafka').innerHTML = xhr_kafka.responseText;
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL

   xhr_kafka.open('GET', 'http://18.223.40.153/ticker/kr_extract_load_Kafka');
   xhr_kafka.send();

const interval2 = setInterval(function() {
   xhr_kafka.open('GET', 'http://18.223.40.153/ticker/kr_extract_load_Kafka');
   xhr_kafka.send();
 }, 3000);


var xhr_ml = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr_ml.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr_ml.readyState !== 4) return;

	// Process our return data
	if (xhr_ml.status >= 200 && xhr_ml.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr_ml);
		document.querySelector('#ticker-ml').innerHTML = xhr_ml.responseText;
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL

   xhr_ml.open('GET', 'http://18.223.40.153/ticker/kr_load_extract_Kafka');
   xhr_ml.send();

const interval3 = setInterval(function() {
   xhr_ml.open('GET', 'http://18.223.40.153/ticker/kr_load_extract_Kafka');
   xhr_ml.send();
 }, 3000);


var xhr_es = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr_es.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr_es.readyState !== 4) return;

	// Process our return data
	if (xhr_es.status >= 200 && xhr_es.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr_es);
		document.querySelector('#ticker-es').innerHTML = xhr_es.responseText;
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL

   xhr_es.open('GET', 'http://18.223.40.153/ticker/kr_load_load_ElasticSearch');
   xhr_es.send();

const interval4 = setInterval(function() {
   xhr_es.open('GET', 'http://18.223.40.153/ticker/kr_load_load_ElasticSearch');
   xhr_es.send();
 }, 3000);

});
