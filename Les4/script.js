// ------1 задание------
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. 
// Пользователь должен иметь возможность удалить любого пользователя из списка. 
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. 
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

const users = document.querySelector('.userBox');

const getDataUsers = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

function removeUserFromList(id) {
	localStorage.removeItem(id);			// удалить из локального хранилища
	document.getElementById(id).remove();	// удалить блок из html по id
}

try {
	const usersData = await getDataUsers(urlUsers);
	usersData.forEach((user) => {
		users.insertAdjacentHTML(
			'beforeend',
			`
				<div id="${user.id}" class="userBox__user">
					<p class="userBox__user__description">
						id: ${user.id}<br>
					  	name: ${user.name}<br>
						username: ${user.username}<br>
						city: ${user.address.city}<br>
						phone:${user.phone}
					</p>
					<button id="${user.id}">Удалить</button>
				</div>
			`
		);
	
		localStorage.setItem(`${user.id}`, JSON.stringify(user));
	});

	const buttons = document.querySelectorAll('button');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			console.log(`User with id = ${button.id} removed`);
			removeUserFromList(button.id);
		});
	});

} catch (error) {
	console.error('Что-то пошло не так!');
}

// ------2 задание------
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const urlDogs = 'https://dog.ceo/api/breeds/image/random';

const dogBox = document.querySelector('.dogBox');

const getDataDogs = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

function printDog(image) {
	dogBox.insertAdjacentHTML(
		'beforeend',
		`
			<img class="dogBox__dogImg" src="${image}" alt="pic"/>	
		`
	);
}

try {
	for (let i = 0; i < 10; i++) {
		const dogPhoto = await getDataDogs(urlDogs);

		setTimeout(printDog, i * 3000, dogPhoto.message)
	}
} catch (error) {
	console.error('Что-то пошло не так!');
}