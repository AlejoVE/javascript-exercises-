/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
	row.id = 'child';
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	numbers.forEach((number) => {
		const th = document.createElement('th');
		th.innerText = `${number}`;
		row.appendChild(th);
		table.appendChild(row);
		targetEl.appendChild(table);
	});
	for (let i = 10; i >= 1; i--) {
		let child = document.getElementById('child');
		let row = document.createElement('tr');
		for (let n = 1; n <= 10; n++) {
			let td = document.createElement('td');
			td.innerText = `x${i}=${n * i}`;
			row.appendChild(td);
			child.after(row);
		}
	}
})();
