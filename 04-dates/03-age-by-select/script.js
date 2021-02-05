/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const buttonEl = document.querySelector('button');

	buttonEl.addEventListener('click', () => {
		const day = Number(document.getElementById('dob-day').value);
		const month = Number(document.getElementById('dob-month').value) - 1;
		const year = Number(document.getElementById('dob-year').value);

		const birthday = new Date(year, month, day);

		const today = Date.now();

		const operation = today - birthday.getTime();

		const newDate = new Date(operation);
		const fullYear = newDate.getFullYear();

		const age = fullYear - 1970;

		alert(`You are ${age} years old`);
	});
})();
