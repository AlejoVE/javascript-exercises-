/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const button1 = document.getElementById('part-one');
	const button2 = document.getElementById('part-two');
	const button3 = document.getElementById('part-three');
	const button4 = document.getElementById('part-four');
	const tagEl = document.getElementById('target');
	let valueTarget = tagEl.innerHTML;
	let filterString = valueTarget.split('+');
	let targetNumber = parseInt(filterString[1]);

	const addListener = (button) => {
		button.addEventListener('click', () => {
			const buttonValue = parseInt(button.innerHTML);
			targetNumber += buttonValue;
			tagEl.innerHTML = `+${targetNumber}`;
		});
	};

	addListener(button1);
	addListener(button2);
	addListener(button3);
	addListener(button4);
})();
