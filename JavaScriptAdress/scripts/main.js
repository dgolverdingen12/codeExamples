var url = 'https://randomuser.me/api/?results=40';
var div = document.querySelector('.content');
let data;
let contacts;
let close;

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(users){
		data = users;
		for (let user of users.results){
			div.innerHTML += `
			<div class="contacts" data-userid="${user.login.uuid}">
				<div class="contact__image">
					<img src="${user.picture.thumbnail}"/>
				</div>
				<div class="contact__info">
					<p class="contact__name">${user.name.first}</p>
					<p class="contact__phone">+${user.phone}</p>
				</div>
			</div>`
		}
		contacts = document.getElementsByClassName('contacts');
		getUserDetails();
	});

	const secondSection = document.getElementsByClassName('second')[0];
	const secondContacts = secondSection.getElementsByClassName('contacts')[0];
	let currentUser;

	function getUserDetails() {
		for(let i = 0; i < contacts.length; i++) {
			contacts[i].addEventListener('click', function() {
				currentUser = this.getAttribute('data-userid');
				for(let user of data.results) {
					if(currentUser === user.login.uuid) {
						secondSection.innerHTML = `
						<div class="close close--open">
							<i class="fas fa-arrow-left"></i>
						</div>
						<div class="image">
							<div class="button__container">
								<i class="fas fa-star"></i>
								<i class="fas fa-comment"></i>
								<i class="fas fa-envelope"></i>
								<i class="fas fa-phone"></i>
							</div>
						</div>
						<div class="contacts contacts--open">
							<div class="contact__info">
								<p class="contact__name contact__name--open">${user.name.first}</p>
								<p class="contact__phone">${user.location.city}</p>
							</div>
						</div>
						<div class="contact__numbers">
							<i class="fas fa-phone"><span>+ ${user.phone}</span></i><br>
							<i class="fas fa-envelope"> <span>${user.email}</span></i>
						</div>`
						close = document.querySelector('.close');
						close.addEventListener('click', showFunction);
					}
				} 
				showFunction();
			})
		}
	}


// show and hide content
const section = document.querySelectorAll('section');

function showFunction() {
	for(let i = 0; i < section.length; i++) {
		if (section[i].classList.contains('show')) {
			section[i].classList.remove('show');
			section[i].classList.add('hide');
		} else {
			section[i].classList.remove('hide');
			section[i].classList.add('show');
		}
	}
}
