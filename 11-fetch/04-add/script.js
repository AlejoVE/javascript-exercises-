/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const [inputName, inputAlertEgo, inputPowers] = document.querySelectorAll(
		'input'
	);
	document.querySelector('button').addEventListener('click', async () => {
		const name = inputName.value.trim();
		const alterEgo = inputAlertEgo.value.trim();
		const powers = inputPowers.value.trim();
		const powersArray = powers.split(',');

		if (name === '' || alterEgo === '' || powers === '') {
			alert('Please fill up all the fields');
			return;
		}

		try {
			const res = await fetch(` http://localhost:3000/heroes`);
			const heroes = await res.json();
			const heroId = heroes.length + 1;

			const newHero = {
				id: heroId,
				name,
				alterEgo,
				abilities: powersArray,
			};

			heroes.push(newHero);
			console.log(heroes);
		} catch (error) {
			console.log(error);
		}
	});
})();
