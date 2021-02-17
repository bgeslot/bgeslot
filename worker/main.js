
var X;
var Y;

if (window.Worker) {
	for(i=0;i<10;i++){
		const myWorker = new Worker("worker.js");
		myWorker.onmessage = function(e) {
			X,Y = e.data;
			console.log('Message received from worker');
			console.log(X);
			console.log(Y);
		}
	}
	

	
} else {
	console.log('Your browser doesn\'t support web workers.')
}