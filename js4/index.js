document.getElementById("btn").onclick = function () {
    const userImage = prompt("Вставте посилання на ваше зображення", "http://site.com/image.jpg"),
        userName = prompt("Введіть ваше ім'я", "Ім'я"),
        userSecondName = prompt("Введіть ваше прізвище", "Прізвище"),
        userAge = prompt("Введіть ваш вік","18"),
        userPhone = prompt("Введіть ваш номер телефону", "+380ХХХХХХХХХ"),
        userMail = prompt("Введіть вашу електронну адресу", "example@mail.to"),
        divUser = document.querySelector(".user"),
        newDiv = document.createElement("div");
    newDiv.className = "user-card";
    newDiv.innerHTML = `
            <div class="user-image">
                <img src="${userImage}" alt="">
            </div>
            <div class="user-info">
                <div><span>Ім'я:</span>${userName}</div><hr>
                <div><span>Прізвище:</span>${userSecondName}</div><hr>
                <div><span>Вік:</span>${userAge}</div><hr>
                <div><span>Телефон:</span><a href="tel:">${userPhone}</a></div><hr>
                <div><span>E-mail:</span><a href="mailto:">${userMail}</a></div><hr>
            </div>`;
    divUser.appendChild(newDiv);
}
