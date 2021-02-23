/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const randomNumber = Math.floor(Math.random(1, 100) * 100);
	console.log(randomNumber);
	let guesses = 0;

	const getAnswer = () => {
		let userAnswer = Number(prompt('Guess a number between 1 and 100'));
		let notNUmber = Object.is(NaN, userAnswer);

		if (notNUmber) {
			alert('only numbers are allowed');
			getAnswer();
		}

		switch (true) {
			case userAnswer === 0:
				break;
			case userAnswer === randomNumber:
				guesses++;
				alert(`That is! You needed ${guesses} guesses`);
				break;
			case userAnswer < randomNumber:
				guesses++;
				alert('Higher, try again');
				getAnswer();
				break;
			case userAnswer > randomNumber:
				guesses++;
				alert('Lower, try again');
				getAnswer();
				break;
			default:
				break;
		}
	};

	getAnswer();
})();
