/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const input = document.querySelector('input');
	const valEl = document.getElementById('validity');

	input.addEventListener('keyup', () => {
		const value = input.value;
		const array = value.split('');
		const numbers = [];

		if (value.length >= 8) {
			array.forEach((e) => {
				const regEx = /\d/;
				const isNumber = regEx.test(e);
				if (isNumber) {
					numbers.push(e);
				}
			});

			if (numbers.length >= 2) {
				valEl.innerText = 'Ok';
			} else {
				valEl.innerText = 'Not ok';
			}
		}
	});
})();
