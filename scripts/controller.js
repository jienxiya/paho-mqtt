// Create a client instance
// var client;

var connectBtn = document.getElementById('connectBtn');
var publishBtn = document.getElementById('publishBtn');
var subscribeBtn = document.getElementById('subscribeBtn');

client = new Paho.Client("broker.hivemq.com",8000,"clientId")

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
// client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Connected");
  client.subscribe("World");
  // message = new Paho.Message("Hello Woooorrlllddd");
  // message.destinationName = "World";
  // client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+ responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+ message.payloadString);
}

connectBtn.addEventListener('click', function(e){
	e.preventDefault();
	// console.log('Connect Button');
	client.connect({onSuccess:onConnect});
})

publishBtn.addEventListener('click', function(e){
	e.preventDefault();
	console.log('Publishing..');
	var input = document.getElementById('inputBox').value;
	var message = new Paho.Message(''+ input);
  	message.destinationName = "World";
  	client.send(message);
})
subscribeBtn.addEventListener('click', function(e){
	e.preventDefault();
	console.log('Subscribing..');
	
})
