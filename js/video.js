var video = document.querySelector("#player1");
var slider = document.querySelector("#slider");
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = slider.value + "%";
	console.log("Volume: ",slider.value,"%");
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -=0.1;
	console.log("Playback Speed: ",video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate +=0.1;
	console.log("Playback Speed: ",video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 <= video.duration){
		video.currentTime+=10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Current Time: ",video.currentTime,"seconds");
});
document.querySelector("#mute").addEventListener("click", function() {
	const button = document.querySelector("#mute");
	if(button.textContent=="Mute"){
		video.muted = true;
		button.textContent = "Unmute";
		console.log("Video Muted");
	}
	else{
		video.muted = false;
		button.textContent = "Mute";
		console.log("Video Unmuted");
	}	
});
slider.oninput = function() {
	video.volume = slider.value/100; 
	document.querySelector("#volume").textContent = slider.value + "%";
	console.log("Volume: ",slider.value,"%");
}
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});
