const url = 'https://api.openweathermap.org/data/2.5/weather?id=2755433&APPID=0930e2228bd4183266ef58e1cb503968&units=metric';
const div = document.querySelector('.weatherApp');
let data;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let weather;

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(weather){
		data = weather;
		div.innerHTML += `
		<div class="weatherApp__image"></div>
		<div class="weatherApp__location">
			<p class="location__place">${weather.name.split(' ')[1]}</p>
			<p class="location__date">${days[d.getDay()]} | ${months[d.getMonth()]} ${d.getDate()} | ${d.getHours()}:${d.getMinutes()}</p>
		</div>
		<div class="weatherApp__degrees">
			<p class="degree degree--first">${parseInt(weather.main.temp - 2)}</p>
			<p class="degree degree--second">${parseInt(weather.main.temp - 1)}</p>
			<p class="degree degree--main">${parseInt(weather.main.temp)}</p>
			<p class="degree degree--fourth">${parseInt(weather.main.temp + 1)}</p>
			<p class="degree degree--fifth">${parseInt(weather.main.temp + 2)}</p>
		</div>`

		switch (data.weather[0].main) {
			case 'Rain':
				document.getElementsByClassName('weatherApp__image')[0].classList.add('rain');
				break;
			default:
				document.getElementsByClassName('weatherApp__image')[0].classList.add('default');
				break;
		}
	});
