'use strict'

function initAdmin(){
    preventNonAdmin()
    renderUsersTable()
}

function renderUsersTable(){
    // getUsersForDisplay(gSortBy)
    var users = (!gSortBy) ? loadFromStorage('users') : gUsers
    var elTbody = document.querySelector('tbody')
    clearTbody()
    var strHTMLs = ''
    elTbody.innerHTML += strHTMLs
    users.map(user => {
        strHTMLs += `<tr>`
        strHTMLs += `<td>${user.username}</td>`
        strHTMLs += `<td>${user.password}</td>`
        strHTMLs += `<td>${user.lastLoginTime}</td>`
        strHTMLs += `<td>${user.isAdmin}</td>`
        strHTMLs += `</tr>`

    })
    clearTbody()
    elTbody.innerHTML += strHTMLs
}
function clearTbody(){
    var elTbody = document.querySelector('tbody')
    elTbody.innerHTML = ''
}

function onLogoutAdmin(){
    localStorage.removeItem('loggedInUser')
    // document.querySelector('.admin-btn').classList.add('hide')
}


function loadFromStorage(key) {
    const users = localStorage.getItem(key)
    return JSON.parse(users)
}

function onSetSort(sortBy){
    setSort(sortBy)
    renderUsersTable()
}