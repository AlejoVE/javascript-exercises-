/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	const computers = [
		{ id: '0001', available: false, user: 'leny', os: 'macOS' },
		{ id: '0002', available: false, user: 'Nicolas' },
		{ id: '0003' },
		{ id: '0004', os: 'Windows' },
		{ id: '0005' },
		{ id: '0006', os: 'macOS' },
		{ id: '0007' },
		{ id: '0008' },
		{ id: '0009', available: false, user: 'Anthony' },
	];
	const defaultProps = {
		available: true,
		os: 'linux',
		user: null,
	};

	const button = document.querySelector('button');
	button.addEventListener('click', () => {
		computers.forEach((object) => {
			for (const key in defaultProps) {
				const includes = object.hasOwnProperty(key);

				if (!includes) {
					object[key] = defaultProps[key];
				}
			}

			console.log(object);
		});
	});
})();

!true;
