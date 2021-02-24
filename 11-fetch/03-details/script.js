/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const target = document.getElementById('target');
	const template = document.getElementById('tpl-hero');
	const input = document.querySelector('input');
	document.querySelector('button').addEventListener('click', async () => {
		const id = Number(input.value);
		try {
			const res = await fetch(`http://localhost:3000/heroes/${id}`);
			const hero = await res.json();

			const powers = hero.abilities;

			const templateClone = template.content.cloneNode(true);

			const strongEl = templateClone.querySelector('strong');
			strongEl.innerHTML = `${hero.name}`;

			const pEl = templateClone.querySelector('p');
			pEl.innerHTML = `${[...powers]}`;

			const emEl = templateClone.querySelector('em');
			emEl.innerHTML = `${hero.alterEgo}`;
			target.appendChild(templateClone);
		} catch (error) {
			alert('There is no hero with that ID');
		}
	});
})();
