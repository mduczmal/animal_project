var effects = ["sepia", "none"];
var i = 0;
function sepia_change(video) {
	var element = video.target;
	var effect = effects[i%2]; 
	element.className = effect;
	event.stopPropagation();
	event.preventDefault();
	i++;
}


var myVideo = document.getElementById('visual_system');
myVideo.addEventListener('click', sepia_change, false); 
