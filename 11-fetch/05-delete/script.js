/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const input = document.querySelector('input');
	document.querySelector('button').addEventListener('click', async () => {
		const id = Number(input.value);

		try {
			const res = await fetch(`http://localhost:3000/heroes/`);
			const heroes = await res.json();

			const index = heroes.findIndex((hero) => hero.id === id);
			const [removedHero] = heroes.splice(index, 1);
			console.log('Deleted hero:', removedHero);
			console.log(heroes);
		} catch (error) {
			console.log(error);
		}
	});
})();
