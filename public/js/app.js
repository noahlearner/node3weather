console.log('Client side javascript file is loaded!');
 
const weatherForm = document.querySelector('form');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.innerHTML, (messageTwo.innerHTML = '');
weatherForm.addEventListener('submit', (e) => {
    messageOne.textContent = 'Loading...'
	e.preventDefault();

	const location = document.querySelector('input').value;
	console.log('location', location);
	fetch('/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.innerHTML, messageTwo.innerHTML = '';
				messageOne.textContent = data.error;
			} else {
				messageOne.innerHTML, messageTwo.innerHTML = '';
				messageOne.innerHTML = "Today's Conditions for " + data.location;
				messageTwo.innerHTML = data.forecast.summary;

				console.log({
					location: data.location,
					forecast: data.forecast
				});
			}
		});
	});
});
