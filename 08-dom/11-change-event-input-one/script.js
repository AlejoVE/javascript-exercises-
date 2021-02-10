/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const input = document.querySelector('input');
	const counter = document.querySelector('span');

	input.addEventListener('keyup', () => {
		const value = input.value;
		counter.innerText = value.length;
		if (value.length >= 10) {
			input.setAttribute('maxlength', '10');
		}
	});
})();
