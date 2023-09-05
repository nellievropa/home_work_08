
import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: "#vimeo-player",
//     width: 640
// });

const player = document.querySelector('#vimeo-player');



// player.on('play', function() {
//     console.log('played the video!');
// });

document.querySelector('button.video').onclick = () => {

	basicLightbox.create(`
		<video controls data-id="2">
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`).show()

}






// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

