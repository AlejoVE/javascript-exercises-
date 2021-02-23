/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const targetEl = document.getElementById('target');
	let counter = localStorage.getItem('counter') || 0;
	targetEl.innerHTML = counter;

	document.querySelector('button').addEventListener('click', () => {
		counter++;
		localStorage.setItem('counter', JSON.stringify(counter));
		targetEl.innerHTML = counter;
	});
})();
