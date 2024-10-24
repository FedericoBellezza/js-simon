// - get elements by html
const countdownEl = document.getElementById('countdown');
const firstSlotEl = document.getElementById('first-slot');
const secondSlotEl = document.getElementById('second-slot');
const thirdSlotEl = document.getElementById('third-slot');
const fourthSlotEl = document.getElementById('fourth-slot');
const fifthSlotEl = document.getElementById('fifth-slot');
const submitButtonEl = document.getElementById('submit-button');
let numbers = [];
let countdown = 3;

// - Game start function
const gameStart = () => {
	countdown = 3;
	countdownEl.innerText = countdown;
	numbers = [];
	// - SLOT 1 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	let currentNumber = randomNumGeneration(1, 99);
	firstSlotEl.setAttribute('value', currentNumber);
	numbers.push(currentNumber);
	// - SLOT 2 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	currentNumber = randomNumGeneration(1, 99);
	secondSlotEl.setAttribute('value', currentNumber);
	numbers.push(currentNumber);
	// - SLOT 3 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	currentNumber = randomNumGeneration(1, 99);
	thirdSlotEl.setAttribute('value', currentNumber);
	numbers.push(currentNumber);
	// - SLOT 4 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	currentNumber = randomNumGeneration(1, 99);
	fourthSlotEl.setAttribute('value', currentNumber);
	numbers.push(currentNumber);
	// - SLOT 5 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	currentNumber = randomNumGeneration(1, 99);
	fifthSlotEl.setAttribute('value', currentNumber);
	numbers.push(currentNumber);

	// - Passing seconds function
	const passingSecond = () => {
		// - Countdown Finish
		if (countdown === 1) {
			timeOut();
			clearInterval(Interval);
		} else {
			countdown--;
			countdownEl.innerText = countdown;
		}
	};

	// - Timeout start
	const Interval = setInterval(passingSecond, 1000);
};

// - Random number generation function
function randomNumGeneration(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const timeOut = () => {
	firstSlotEl.setAttribute('value', '');
	secondSlotEl.setAttribute('value', '');
	thirdSlotEl.setAttribute('value', '');
	fourthSlotEl.setAttribute('value', '');
	fifthSlotEl.setAttribute('value', '');

	countdownEl.innerText = 'Inserisci i numeri che ti ricordi';

	firstSlotEl.removeAttribute('readonly');
	secondSlotEl.removeAttribute('readonly');
	thirdSlotEl.removeAttribute('readonly');
	fourthSlotEl.removeAttribute('readonly');
	fifthSlotEl.removeAttribute('readonly');
};

submitButtonEl.addEventListener('click', gameStart);
