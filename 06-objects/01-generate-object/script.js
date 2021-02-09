/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const me = {
		firstName: 'Luis Alejandro',
		lastName: 'Montilla',
		age: 26,
		city: 'Liege',
	};

	const button = document.querySelector('button');
	button.addEventListener('click', () => {
		console.log(me);
	});
})();
