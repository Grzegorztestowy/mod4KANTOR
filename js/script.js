{
	const calculateResult = (amount, currency) => {

		const currencyEuro = 4.69;
		const currencyDolar = 4.37;
		const currencyPound = 5.34;
		const currencyFrank = 4.76;

		switch (currency) {
			case "euro":
				return amount / currencyEuro;

			case "dolar":
				return amount / currencyDolar;

			case "pound":
				return amount / currencyPound;

			case "frank":
				return amount / currencyFrank;
	}
};
		const updateResultText = (amount, result, currency) => {
			const resultElement = document.querySelector(".js-result");
			resultElement.innerText = result.toFixed(4);
		}

		const onFormSubmit = (event) => {

			event.preventDefault();

			const currencyElement = document.querySelector(".js-currency");
			const amountElement = document.querySelector(".js-amount");
		

			const currency = currencyElement.value
			const amount = +amountElement.value

			let result = calculateResult(amount, currency);

			updateResultText (amount, result, currency);
		};

	const init = () => { 
		const formElement = document.querySelector(".js-form");
		formElement.addEventListener("submit", onFormSubmit);
	};

	init();

}