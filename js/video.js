var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to ' + video.autoplay);
	console.log('Loop is set to '+ video.loop);

});

// var demoButton = document.getElementById('play');
// demoButton.addEventListener('click', onClick)
// demoButton.addEventListener('mouseover', onHover)
// demoButton.addEventListener('mouseout', onOut)

// function onClick(){
// 	document.getElementById('status').innerHTML = 'clicked'
// }

// function onHover(){
// 	document.getElementById('status').innerHTML = 'moused over'
// }

// function onOut(){
// 	document.getElementById('status').innerHTML = 'moused out'
// }



document.querySelector("#play").addEventListener("click", function() {
	console.log("play video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down video");
	video.playbackRate *= 0.9 
	console.log("The new speed is: " + video.playbackRate * 100);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video");
	video.playbackRate *= 1.10
	console.log("The new speed is: " + video.playbackRate * 100);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead in video");
	video.currentTime += 10
	if (video.currentTime >= 67.4033){
		video.currentTime = 0
	}
	console.log('The current time is: ' + video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume * 0 + '%'
	console.log(video.volume)
});


