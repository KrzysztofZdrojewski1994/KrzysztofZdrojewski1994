let burger = document.getElementById('burger'),
	nav = document.getElementById('main-nav');
burger.addEventListener('click', function (e) {
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

document.addEventListener('scroll', function (e) {
	if (scrollY > 60) {
		nav.classList.add('transparent')
	}
	if (scrollY < 60) {
		nav.classList.remove('transparent')
	}
});
nav.addEventListener('mouseover', function (e) {
	nav.classList.remove('transparent')
});