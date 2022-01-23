const list = [...document.querySelectorAll('div.servicesContainer div ul li')];
const windowsHeight = window.innerHeight;


document.addEventListener('scroll', function (e) {
	list.forEach(element => {
		if (scrollY > element.offsetTop - (windowsHeight / 1.5))
			element.classList.add('active')
	});
});

document.addEventListener('scroll', function (e) {
list.forEach(element => {	
	if (scrollY < element.offsetTop - (windowsHeight))
		element.classList.remove('active')
});
});


