/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	document.getElementById('run').addEventListener('click', function () {
		const squareNumbers = [];

		const square = () => {
			for (let n = 1; n <= 21; n++) {
				const result = n * n;

				if (result <= 21) {
					squareNumbers.push(result);
				}
			}
		};

		square();

		alert(`The numbers are ${[...squareNumbers]}`);
	});
})();
