const counters = document.querySelectorAll('.counter');
const speed =   100; // The lower the slower
const height = document.querySelector('.counter').offsetTop;


var funkcjaStart = function(){
	var funkcjaStrzal = counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;

			// Lower inc to slow and higher to slow
			const inc = Math.ceil(target / speed);

			// console.log(inc);
			// console.log(count);

			// Check if target is reached
			if (count < target) {
				// Add inc to count and output in counter
				counter.innerText =  count + inc;
				// Call function every ms
				setTimeout(updateCount, 50);
			} else {
				counter.innerText =target;
			}
		};
		updateCount();
	});
};
document.addEventListener('scroll', function(e) {

	if (window.scrollY > height - window.innerHeight * 0.5){
		funkcjaStart();
	};
});