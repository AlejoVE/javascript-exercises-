const function2 = () => {
	console.log('THE SECOND LOG');
	function3();
};

const function1 = () => {
	console.log('THE FIRST LOG');
	function2();
};

const function3 = () => {
	console.log('THE THIRD LOG');
};

console.log('IM AT THE END, WHY YOU SEE ME FIRST?');
function1();

const myArray = ['Tariq', 'Nico', 'Sia', 'Max', 'Adriano', 'Alejo'];

myArray.forEach((person) => {
	console.log(person);
});
