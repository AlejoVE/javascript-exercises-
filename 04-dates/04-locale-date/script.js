/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const tagEl = document.getElementById('target');

	const today = new Date();
	const hour = today.getHours();
	const minutes = today.getMinutes();
	const day = today.getDay();
	const dayOfTheWeek = today.toLocaleString('en-us', { weekday: 'long' });
	const month = today.toLocaleString('en-us', { month: 'long' });
	const year = today.getFullYear();

	tagEl.innerHTML = `${dayOfTheWeek} ${day} ${month} ${year}, ${hour}h${minutes}`;
})();
