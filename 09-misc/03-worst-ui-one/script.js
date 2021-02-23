/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const input = document.querySelector('input');

	const targetEl = document.getElementById('target');

	input.addEventListener('input', () => {
		targetEl.innerText = `0${input.value}`;
	});
})();
