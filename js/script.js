let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let amountElement = document.querySelector(".js-amount")
let resultElement = document.querySelector(".js-result")

let currencyEuro = 4.69;
let currencyDolar = 4.37;
let currencyPound = 5.34;
let currencyFrank = 4.76;

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	let currency = currencyElement.value
	let amount = amountElement.value
	let result = resultElement.value

	switch (currency) {
		case "euro":
			result = amount / currencyEuro;
			break;

		case "dolar":
			result = amount / currencyDolar;
			break;
		case "pound":
			result = amount / currencyPound;
			break;

		case "frank":
			result = amount / currencyFrank;
	}

	resultElement.innerText = result.toFixed(3);

});