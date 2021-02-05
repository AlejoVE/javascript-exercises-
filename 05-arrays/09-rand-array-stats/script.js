/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const button = document.querySelector('button');
	const minEl = document.getElementById('min');
	const maxEl = document.getElementById('max');
	const sumEl = document.getElementById('sum');
	const avgEl = document.getElementById('average');
	const numbers = [1, 25, 33, 45, 56, 66, 78, 81, 97, 100];

	button.addEventListener('click', () => {
		let indexArray = 0;
		for (let i = 1; i <= 10; i++) {
			const tagEl = document.getElementById(`n-${i}`);
			tagEl.innerHTML = numbers[indexArray];
			indexArray++;
		}

		const minNumber = Math.min(...numbers);
		minEl.innerHTML = minNumber;

		const maxNumber = Math.max(...numbers);
		maxEl.innerHTML = maxNumber;

		const sumNumbers = numbers.reduce((total, num) => total + num);
		sumEl.innerHTML = sumNumbers;

		const avgNumber =
			numbers.reduce((total, num) => total + num) / numbers.length;
		avgEl.innerHTML = avgNumber;
	});
})();
