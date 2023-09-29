let sliderTimeout = 5000;
let sliderInterval;

function selectSlide(slideId) {
	document.querySelector('.progress_block.active').classList.toggle('active');
	document.querySelector('.image_wrapper.active').classList.toggle('active');
	document.querySelector('.customer_comment_item.active').classList.toggle('active');
	document.querySelector(`.progress_block[data-slideid="${slideId}"]`).classList.toggle('active');
	document.querySelector(`.image_wrapper[data-slideid="${slideId}"]`).classList.toggle('active');
	document.querySelector(`.customer_comment_item[data-slideid="${slideId}"]`).classList.toggle('active');
}

function customerSliderChange() {
	const activeSlidePage = document.querySelector('.progress_block.active');
	const activeSlideId = +activeSlidePage.dataset.slideid;
	const nextSlideId = activeSlideId === 3 ? 1 : activeSlideId + 1;
	selectSlide(nextSlideId);
}
function runSlider() {
	sliderInterval = setInterval(customerSliderChange, sliderTimeout);
	console.log('interval started', sliderInterval);
}

runSlider();

function refreshInterval() {
	clearInterval(sliderInterval);
	console.log('interval stopped', sliderInterval)
	runSlider();
}

document.querySelector('.slider_progress_bar').addEventListener('click', (event) => {
	selectSlide(event.target.dataset.slideid);
	refreshInterval()
})
