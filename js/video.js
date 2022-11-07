var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to ' + video.autoplay);
	console.log('Loop is set to '+ video.loop);

});

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
	if (video.muted == false) {    
		document.querySelector("#volume").innerHTML = video.volume * 0 + '%'
		video.muted = true;
		console.log('Video Muted')
		document.querySelector("#mute").innerHTML = 'Unmute'
 }

 else {
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	 video.muted = false;
	 console.log('Video Unmuted')
	 document.querySelector("#mute").innerHTML = 'Mute'
 }
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log('The current volume is: ' + video.volume);
	video.volume = this.value / 100;
	console.log('The current volume is: ' + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Old School is on');
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log('Old School is off / Original on');
	video.classList.remove('oldSchool');
});




