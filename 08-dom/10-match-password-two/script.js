/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const pass1 = document.getElementById('pass-one');
	const pass2 = document.getElementById('pass-two');
	const inputs = document.querySelectorAll('input');

	document.querySelector('button').addEventListener('click', () => {
		const valueA = pass1.value;
		const valueB = pass2.value;

		if (valueA != valueB) {
			inputs.forEach((input) => {
				input.setAttribute('class', 'error');
			});
		}
	});
})();
