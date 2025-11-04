document.getElementById("loadUser").addEventListener("click", getUsers);

function getUsers() {
  const container = document.getElementById("usersContainer");
  container.innerHTML = "<p class='placeholder'>Завантаження даних...</p>";

  fetch("https://randomuser.me/api/?results=4")
    .then(response => {
      if (!response.ok) throw new Error("Помилка завантаження");
      return response.json();
    })
    .then(data => showUsers(data.results))
    .catch(error => {
      container.innerHTML = `<p style="color:#a00;">Сталася помилка: ${error.message}</p>`;
    });
}

function showUsers(users) {
  const container = document.getElementById("usersContainer");
  container.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");
    card.innerHTML = `
      <img src="${user.picture.large}" alt="User photo">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p><strong>Телефон:</strong> ${user.cell}</p>
      <p><strong> Місто:</strong> ${user.location.city}</p>
      <p><strong> Країна:</strong> ${user.location.country}</p>
    `;
    container.appendChild(card);
  });
}
document.getElementById("loadUser").addEventListener("click", getUsers);

function getUsers() {
  const container = document.getElementById("usersContainer");
  container.innerHTML = "<p class='placeholder'>Завантаження даних...</p>";

  fetch("https://randomuser.me/api/?results=4")
    .then(response => {
      if (!response.ok) throw new Error("Помилка завантаження");
      return response.json();
    })
    .then(data => showUsers(data.results))
    .catch(error => {
      container.innerHTML = `<p style="color:#a00;">Сталася помилка: ${error.message}</p>`;
    });
}

function showUsers(users) {
  const container = document.getElementById("usersContainer");
  container.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");
    card.innerHTML = `
      <img src="${user.picture.large}" alt="User photo">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p><strong>Телефон:</strong> ${user.cell}</p>
      <p><strong>Місто:</strong> ${user.location.city}</p>
      <p><strong>Країна:</strong> ${user.location.country}</p>
    `;
    container.appendChild(card);
  });
}
