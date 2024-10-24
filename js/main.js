// - get elements by html
const countdownEl = document.getElementById('countdown');
const firstSlotEl = document.getElementById('first-slot');
const secondSlotEl = document.getElementById('second-slot');
const thirdSlotEl = document.getElementById('third-slot');
const fourthSlotEl = document.getElementById('fourth-slot');
const fifthSlotEl = document.getElementById('fifth-slot');
const submitButtonEl = document.getElementById('submit-button');
const resultEl = document.getElementById('result');
const instructionsEl = document.getElementById('instructions');
let numbers = [];
let userNumbers = [];
let countdown;
let currentNumber;

// - Game start function
const gameStart = () => {
	firstSlotEl.classList.remove('text-bg-success');
	secondSlotEl.classList.remove('text-bg-success');
	thirdSlotEl.classList.remove('text-bg-success');
	fourthSlotEl.classList.remove('text-bg-success');
	fifthSlotEl.classList.remove('text-bg-success');

	firstSlotEl.classList.remove('text-bg-danger');
	secondSlotEl.classList.remove('text-bg-danger');
	thirdSlotEl.classList.remove('text-bg-danger');
	fourthSlotEl.classList.remove('text-bg-danger');
	fifthSlotEl.classList.remove('text-bg-danger');

	submitButtonEl.innerText = 'Attendi la fine del countdown';
	instructionsEl.innerText = "Memorizza i numeri (l'ordine non è importante)";

	submitButtonEl.setAttribute('type', 'button');
	countdown = 5;
	countdownEl.innerText = countdown;
	numbers = [];
	userNumbers = [];
	countdownEl.setAttribute('value', currentNumber);
	resultEl.classList.add('d-none');

	// - SLOT 1 (Assegno un numero per ogni slot e lo aggiungo ad un array)
	currentNumber = randomNumGeneration(1, 99);
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

// - Timeout function
const timeOut = () => {
	firstSlotEl.setAttribute('value', '');
	secondSlotEl.setAttribute('value', '');
	thirdSlotEl.setAttribute('value', '');
	fourthSlotEl.setAttribute('value', '');
	fifthSlotEl.setAttribute('value', '');

	instructionsEl.innerText = "L'ordine non è importante";
	countdownEl.innerText = 'Inserisci i numeri che ti ricordi';
	submitButtonEl.innerText = "L'accendiamo?";

	firstSlotEl.removeAttribute('readonly');
	secondSlotEl.removeAttribute('readonly');
	thirdSlotEl.removeAttribute('readonly');
	fourthSlotEl.removeAttribute('readonly');
	fifthSlotEl.removeAttribute('readonly');
};

submitButtonEl.addEventListener('click', () => {
	if (submitButtonEl.textContent === 'Avvia gioco' || submitButtonEl.textContent === 'Riavvia gioco') {
		gameStart();
	} else if (submitButtonEl.textContent === "L'accendiamo?") {
		gameCheck();
	}
});

console.log(submitButtonEl.textContent);

const gameCheck = () => {
	countdownEl.innerText = 'Vuoi la rivincita?';
	instructionsEl.innerText = 'Risultato:';

	submitButtonEl.innerText = 'Riavvia gioco';
	submitButtonEl.setAttribute('type', 'reset');

	let points = 0;
	userNumbers.push(parseInt(firstSlotEl.value));
	userNumbers.push(parseInt(secondSlotEl.value));
	userNumbers.push(parseInt(thirdSlotEl.value));
	userNumbers.push(parseInt(fourthSlotEl.value));
	userNumbers.push(parseInt(fifthSlotEl.value));
	firstSlotEl.readOnly = true;
	secondSlotEl.readOnly = true;
	thirdSlotEl.readOnly = true;
	fourthSlotEl.readOnly = true;
	fifthSlotEl.readOnly = true;

	console.log(userNumbers, numbers);

	for (i = 0; i < userNumbers.length; i++) {
		if (numbers.includes(userNumbers[i])) {
			points++;
			console.log(userNumbers[i]);
		}
	}
	if (points === 0) {
		firstSlotEl.classList.add('text-bg-danger');
		secondSlotEl.classList.add('text-bg-danger');
		thirdSlotEl.classList.add('text-bg-danger');
		fourthSlotEl.classList.add('text-bg-danger');
		fifthSlotEl.classList.add('text-bg-danger');
	}
	if (points === 1) {
		firstSlotEl.classList.add('text-bg-success');
		secondSlotEl.classList.add('text-bg-danger');
		thirdSlotEl.classList.add('text-bg-danger');
		fourthSlotEl.classList.add('text-bg-danger');
		fifthSlotEl.classList.add('text-bg-danger');
	}
	if (points === 2) {
		firstSlotEl.classList.add('text-bg-success');
		secondSlotEl.classList.add('text-bg-success');
		thirdSlotEl.classList.add('text-bg-danger');
		fourthSlotEl.classList.add('text-bg-danger');
		fifthSlotEl.classList.add('text-bg-danger');
	}
	if (points === 3) {
		firstSlotEl.classList.add('text-bg-success');
		secondSlotEl.classList.add('text-bg-success');
		thirdSlotEl.classList.add('text-bg-success');
		fourthSlotEl.classList.add('text-bg-danger');
		fifthSlotEl.classList.add('text-bg-danger');
	}
	if (points === 4) {
		firstSlotEl.classList.add('text-bg-success');
		secondSlotEl.classList.add('text-bg-success');
		thirdSlotEl.classList.add('text-bg-success');
		fourthSlotEl.classList.add('text-bg-success');
		fifthSlotEl.classList.add('text-bg-danger');
	}
	if (points === 5) {
		firstSlotEl.classList.add('text-bg-success');
		secondSlotEl.classList.add('text-bg-success');
		thirdSlotEl.classList.add('text-bg-success');
		fourthSlotEl.classList.add('text-bg-success');
		fifthSlotEl.classList.add('text-bg-success');
	}

	console.log(points);
	resultEl.classList.remove('d-none');
	resultEl.innerText = `Hai totalizzato ${points} punti!`;
};
