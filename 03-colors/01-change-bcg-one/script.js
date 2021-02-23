/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const redButton = document.getElementById('red');
	const greenButton = document.getElementById('green');
	const yellowButton = document.getElementById('yellow');
	const blueButton = document.getElementById('blue');

	const changeColor = (color) => {
		document.body.style.background = color;
	};

	const addEventListener = (button, color) => {
		button.addEventListener('click', () => {
			changeColor(color);
		});
	};

	addEventListener(redButton, 'red');
	addEventListener(greenButton, 'green');
	addEventListener(yellowButton, 'yellow');
	addEventListener(blueButton, 'blue');
})();
