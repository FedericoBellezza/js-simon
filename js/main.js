// - get elements by html
const countdownEl = document.getElementById('countdown');
const firstSlotEl = document.getElementById('first-slot');
const secondSlotEl = document.getElementById('second-slot');
const thirdSlotEl = document.getElementById('third-slot');
const fourthSlotEl = document.getElementById('fourth-slot');
const fifthSlotEl = document.getElementById('fifth-slot');
const submitButtonEl = document.getElementById('submit-button');

// - Game start function
const gameStart = () => {
	// - SLOT 1 (Assegno un numero per ogni slot)
	let currentNumber = randomNumGeneration(1, 99);
	firstSlotEl.setAttribute('value', currentNumber);
	console.log(currentNumber);

	// - SLOT 2 (Assegno un numero per ogni slot)
	currentNumber = randomNumGeneration(1, 99);
	secondSlotEl.setAttribute('value', currentNumber);
	console.log(currentNumber);

	// - SLOT 3 (Assegno un numero per ogni slot)
	currentNumber = randomNumGeneration(1, 99);
	thirdSlotEl.setAttribute('value', currentNumber);
	console.log(currentNumber);

	// - SLOT 4 (Assegno un numero per ogni slot)
	currentNumber = randomNumGeneration(1, 99);
	fourthSlotEl.setAttribute('value', currentNumber);
	console.log(currentNumber);

	// - SLOT 5 (Assegno un numero per ogni slot)
	currentNumber = randomNumGeneration(1, 99);
	fifthSlotEl.setAttribute('value', currentNumber);
	console.log(currentNumber);
};

// - Random number generation function
function randomNumGeneration(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

submitButtonEl.addEventListener('click', gameStart);
