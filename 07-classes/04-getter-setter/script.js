/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	class Person {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		get name() {
			return `${this.firstName} ${this.lastName}`;
		}

		set name(string) {
			const array = string.split(' ');
			this.firstName = array[0];
			this.lastName = array[1];
		}
	}

	document.querySelector('button').addEventListener('click', () => {
		const person = new Person('Alejandro', 'Montilla');
		console.log(person.name);

		person.name = 'Carlos Zamora';
		console.log(person);
	});
})();
