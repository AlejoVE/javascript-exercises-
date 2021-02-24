/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const target = document.getElementById('target');
	const template = document.getElementById('tpl-hero');

	document.querySelector('button').addEventListener('click', async () => {
		const res = await fetch('http://localhost:3000/heroes');
		const heroes = await res.json();

		heroes.map((hero) => {
			const powers = hero.abilities;
			const templateClone = template.content.cloneNode(true);

			const strongEl = templateClone.querySelector('strong');
			strongEl.innerHTML = `${hero.name}`;

			const pEl = templateClone.querySelector('p');
			pEl.innerHTML = `${[...powers]}`;

			const emEl = templateClone.querySelector('em');
			emEl.innerHTML = `${hero.alterEgo}`;
			target.appendChild(templateClone);
		});
	});
})();
