function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById("name").value;

	Client.checkForName(formText);

	console.log("::: Form Submitted :::");
	fetch("api.openweathermap.org/data/2.5/weather?q=Malaga&appid=6c31832a1258f53fbea517b9e487dcf8")
		.then((res) => {
			return res.json();
		})
		.then(function (data) {
			document.getElementById("results").innerHTML = data.message;
		});
}

export { handleSubmit };
