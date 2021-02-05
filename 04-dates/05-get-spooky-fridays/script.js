/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const button = document.querySelector('button');
	const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	button.addEventListener('click', () => {
		const year = Number(document.getElementById('year').value);

		months.forEach((month) => {
			for (let day = 1; day <= 31; day++) {
				const date = new Date(year, month, day);
				const dayOfTheWeek = date.getDay();
				const dayOfTheMonth = date.getDate();
				const monthName = date.toLocaleString('en-us', { month: 'long' });

				if (dayOfTheWeek === 5 && dayOfTheMonth === 13) {
					alert(monthName);
				}
			}
		});
	});
})();
