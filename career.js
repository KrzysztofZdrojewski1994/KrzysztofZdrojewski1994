const buttons = [...document.querySelectorAll('div.headerFAQ button.show')];
const containerJob = [...document.querySelectorAll('div.mainJob')];


function butonSelection() {
	var index = buttons.indexOf(this);
	containerJob.forEach(element => {
		element.classList.remove('active')
	});
	containerJob[index].classList.add('active');
}

buttons.forEach(element => {
	element.addEventListener('click', butonSelection)
});