'use strict'

var gCurrUsername
var gCurrPassword

function onInit() {
    var user = loadFromStorage('loggedInUser')

    if (!user) renderLoginForm()
    renderSecretContent(user.username, user.isAdmin)
}

function renderLoginForm() {
    var elFormContainer = document.querySelector('.login-form')
    elFormContainer.innerHTML = `<div class="img"></div>
    <form onsubmit="onLogin(event)">
        <label>Username</label></br>
        <input name="username" oninput="onEnterUsername(this.value)" type="text" placeholder="Enter username"></br>
        <label>Password</label></br>
        <input name="password" oninput="onEnterPassword(this.value)" type="text" placeholder="Enter password"></br>
        <button onclick="onLogin(event)">login</button>
    </form>`
}

function doLogin(userName, password) {
    var users = getUsersToShow()
    var currUser = users.find(user => userName === user.username)

    if (password === currUser.password) {
        currUser.lastLoginTime = new Date().getTime()
        saveToStorage('loggedInUser', currUser)
        renderSecretContent(userName, currUser.isAdmin)
        return currUser
    }
    return null
}

function renderSecretContent(userName, isAdmin) {
    var elUserDetails = document.querySelector('.user-details')
    elUserDetails.innerText = `Welcome ${userName}!`

    var elSecretContent = document.querySelector('.secret-content')
    elSecretContent.innerHTML = '<img src="img/secret1.jpg" alt="secrete content">'

    var elLoginForm = document.querySelector('.login-form')
    elLoginForm.innerHTML = ''
    elLoginForm.innerHTML = '<button onClick="onLogout()">logout</button>'
    
    var elHeader = document.querySelector('.header')
    if (isAdmin) elHeader.innerHTML += `<button class="admin-btn"><a href="admin.html">Admin page</button>`
}

function onLogout() {
    renderLoginForm()
    localStorage.removeItem('loggedInUser')
    var elUserDetails = document.querySelector('.user-details')
    elUserDetails.innerText = `Welcome guest! please login`

    var elSecretContent = document.querySelector('.secret-content')
    elSecretContent.innerText = ''

    document.querySelector('.admin-btn').classList.add('hide')
}

function onEnterUsername(char) {
    gCurrUsername = ''
    return gCurrUsername += char
}

function onEnterPassword(char) {
    gCurrPassword = ''
    return gCurrPassword += char
}

function onLogin(ev) {
    ev.preventDefault()
    doLogin(gCurrUsername, gCurrPassword)
}