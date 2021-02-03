/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const myFunction = function () {
		const age = prompt('What is your age?');
		const gender = prompt('What is your gender?');
		const city = prompt('Where do you live?');

		const isValid = confirm(
			`You are ${age} years old, you live in ${city} and you identify yourself as a ${gender}, is that correct?`
		);

		return isValid;
	};

	const answer = myFunction();

	if (answer) {
		console.log('Nice!');
	} else {
		myFunction();
	}
})();
