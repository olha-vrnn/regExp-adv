'use strict'

const userLogin = document.getElementById('userLogin');
const userPassword = document.getElementById('userPassword');
const userEmail = document.getElementById('userEmail');
const addUserBtn = document.getElementById('addUserBtn');
const editUserBtn = document.getElementById('editUserBtn');
const usersList = document.getElementById('table-body');

let userLoginRegEx = /^[a-zA-Z]{4,16}$/;
let userPasswordRegEx = /^[a-zA-Z0-9_\-\.]{4,16}$/;
let userEmailRegEx = /^[a-zA-Z0-9\-\.]+@[a-zA-Z]+\.[a-zA-Z]+$/;

let login,
    password,
    email,
    users = [],
    userIndex,
    editUserAcc,
    check = true;


function getButton() {
    if (login && password && email) {
        addUserBtn.disabled = false;
        addUserBtn.classList.add('active-btn');
        editUserBtn.disabled = false;
        editUserBtn.classList.add('active-btn');
    }
};

userLogin.oninput = function () {
    login = userLoginRegEx.test(userLogin.value);
    userLogin.classList.add('input-style-setting');
    addUserBtn.classList.remove('active-btn');
    if (login) getButton();
};

userLogin.onblur = () => userLogin.classList.remove('input-style-setting');

userPassword.oninput = function () {
    password = userPasswordRegEx.test(userPassword.value);
    userPassword.classList.add('input-style-setting');
    addUserBtn.classList.remove('active-btn');
    if (password) getButton();
};

userPassword.onblur = () => userPassword.classList.remove('input-style-setting');

userEmail.oninput = function () {
    email = userEmailRegEx.test(userEmail.value);
    userEmail.classList.add('input-style-setting');
    addUserBtn.classList.remove('active-btn');
    if (email) getButton();
};

userEmail.onblur = () => userEmail.classList.remove('input-style-setting');

addUserBtn.onclick = function addUser() {

    if (login && password && email) {

        let userObj = {}

        userObj.login = userLogin.value;
        userObj.password = userPassword.value;
        userObj.email = userEmail.value;
        users.push(userObj);

        addUserBtn.style.outline = '4px solid #00ad4573';
        setTimeout(() => addUserBtn.style.outline = 'none', 1000);
        render();
        document.forms[0].reset();

    }
    addUserBtn.classList.remove('active-btn');
    addUserBtn.disabled = true;
    clearValue();
};

function render() {

    usersList.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${users[i].login}</td>
        <td>${users[i].password}</td>
        <td>${users[i].email}</td>
        <td><button class="edit-btn table-btn">Edit</button></td>
        <td><button class="delete-btn table-btn">Delete</button></td>`;
        usersList.append(row);
    }
};

usersList.onclick = function (event) {
    if (event.target.classList.contains('edit-btn')) {
        editUser(event);
    } else if (event.target.classList.contains('delete-btn')) {
        deleteUser(event);
    }
};

function deleteUser(event) {
    let index = event.target.parentElement.parentElement.firstElementChild.innerText - 1;
    users.splice(index, 1);
    render();
};

function editUser(event) {
    userIndex = event.target.parentElement.parentElement.firstElementChild.innerText - 1;

    editUserAcc = users[userIndex];
    userLogin.value = editUserAcc.login;
    userPassword.value = editUserAcc.password;
    userEmail.value = editUserAcc.email;

    addUserBtn.style.display = 'none';
    editUserBtn.style.display = 'block';
    editUserBtn.disabled = false;
    editUserBtn.classList.add('active-btn');
};

editUserBtn.onclick = function saveEditUser() {

    login = userLoginRegEx.test(userLogin.value);
    password = userPasswordRegEx.test(userPassword.value);
    email = userEmailRegEx.test(userEmail.value);

    if (login && password && email) {
        getButton();
        editUserAcc.login = userLogin.value;
        editUserAcc.password = userPassword.value;
        editUserAcc.email = userEmail.value;
        render();
        editUserBtn.style.outline = '4px solid #00ad4573';
        setTimeout(() => {
            editUserBtn.style.outline = 'none';
            editUserBtn.style.display = 'none';
        addUserBtn.style.display = 'block';
        }, 1000);
        document.forms[0].reset();
    } else if (!login || !password && !email) {
        addUserBtn.classList.remove('active-btn');
        addUserBtn.disabled = true;
    }

    addUserBtn.classList.remove('active-btn');
    addUserBtn.disabled = true;
    clearValue();
};

function clearValue() {
    login = false;
    password = false;
    email = false;
};



