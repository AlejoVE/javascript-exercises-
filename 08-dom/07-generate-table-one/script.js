/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	const targetEl = document.getElementById('target');
	const table = document.createElement('table');
	const row = document.createElement('tr');
	const header = document.createElement('th');
	header.innerText = 'My column';

	row.appendChild(header);
	table.appendChild(row);

	for (let i = 1; i < 10; i++) {
		const row = document.createElement('tr');
		const td = document.createElement('td');
		td.innerText = `I am row ${i + 1}`;

		row.appendChild(td);
		table.appendChild(row);
	}

	targetEl.appendChild(table);
})();
