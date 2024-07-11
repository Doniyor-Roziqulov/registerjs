import { USERS } from "./db.js";
// popap start
const btnOpen = document.querySelector(".btn__open");
const btnClose = document.querySelector(".btn__close");
const popap = document.querySelector(".popap");
const overlay = document.querySelector(".overlay");
// popap end

// moel start
const model = document.querySelector(".model");
const modelName = document.querySelector(".modul__name");
const modelUsername = document.querySelector(".modul__username");
const modelPassword = document.querySelector(".modul__password");
const modelPasswordConfirm = document.querySelector(".modul__password-confirm");
const eyePassword = document.querySelector(".eye__password");
const eyePasswords = document.querySelector(".eye__passwords");
const eyePass = document.querySelector(".eye__pass");
const loginPassword = document.querySelector(".login__password");
const inputBox = document.querySelector(".input-box");
const inputBoxss = document.querySelector(".input-boxss");
// model end

// card start

const wrapper = document.querySelector(".wrapper");

// card end
model.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = modelName.value;
    let username = modelUsername.value;
    let password = modelPassword.value;
    let passwordConfirm = modelPasswordConfirm.value;
    if (password !== passwordConfirm) {
        inputBox.style.border = "1px solid red";
        inputBox.style.boxShadow = "0 0 5px 1px red";
        inputBoxss.style.border = "1px solid red";
        inputBoxss.style.boxShadow = "0 0 5px 1px red";
        return;
    }
    inputBox.style.border = "1px solid #03b1fb";
    inputBoxss.style.border = "1px solid #03b1fb";
    inputBoxss.style.boxShadow = "0 0 5px 1px #03b1fb";
    inputBox.style.boxShadow = "0 0 5px 1px #03b1fb";

    let existUser = USERS.findIndex((user) => user.username == username);
    // console.log(existUser);
    if (existUser >= 0) {
        return alert("Mavjud bolgan user name kiritdingiz ⚠️⚠️⚠️");
    }
    let newUser = {
        id: new Date().getTime(),
        name,
        username,
        password,
    };
    USERS.push(newUser);
    model.reset();
    popupState("none");
    createCard(USERS);
});

eyePassword.addEventListener("click", () => {
    if (modelPassword.type === "text") {
        modelPassword.type = "password";
        eyePassword.innerHTML = `<img src="./eyeclose.svg" width="20" height="20" alt="eye">`;
    } else {
        modelPassword.type = "text";
        eyePassword.innerHTML = `<img src="./eyeopen.svg" width="20" height="20" alt="eye">`;
    }
});

eyePasswords.addEventListener("click", () => {
    if (modelPasswordConfirm.type === "text") {
        modelPasswordConfirm.type = "password";
        eyePasswords.innerHTML = `<img src="./eyeclose.svg" width="20" height="20" alt="eye">`;
    } else {
        modelPasswordConfirm.type = "text";
        eyePasswords.innerHTML = `<img src="./eyeopen.svg" width="20" height="20" alt="eye">`;
    }
});

eyePass.addEventListener("click", () => {
    if (loginPassword.type === "text") {
        loginPassword.type = "password";
        eyePass.innerHTML = `<img src="./eyeclose.svg" width="20" height="20" alt="eye">`;
    } else {
        loginPassword.type = "text";
        eyePass.innerHTML = `<img src="./eyeopen.svg" width="20" height="20" alt="eye">`;
    }
});

function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove();
    }
    data.forEach((user) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        Id:<p>${user.id}</p>
        Name: <h3>${user.name}</h3>
            Username: <p>${user.username}</p>
            Password: <p>${user.password}</p>
        `;
        wrapper.appendChild(card);
    });
}

btnOpen.addEventListener("click", () => {
    popupState("flex");
});
btnClose.addEventListener("click", () => {
    popupState("none");
});
overlay.addEventListener("click", () => {
    popupState("none");
});

function popupState(state) {
    popap.style.display = state;
}
