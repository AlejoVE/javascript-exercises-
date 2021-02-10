/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
	console.log(inputs);

	document.querySelector('button').addEventListener('click', () => {
		const valueA = pass1.value;
		const valueB = pass2.value;

		if (valueA != valueB) {
			inputs.forEach((input) => {
				input.style.border = '1px solid red';
			});
		}
	});
})();
