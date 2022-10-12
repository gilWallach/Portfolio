'use strict'
const STORAGE_KEY = 'users'
var gUsers

_createUsers()
function _createUsers() {
    var users = loadFromStorage(STORAGE_KEY)

    if (!users || !users.length) {
        users = [
            {
                id: 'u101',
                username: 'puki',
                password: 'secret',
                lastLoginTime: 1601891998864,
                isAdmin: true
            },
            {
                id: 'u102',
                username: 'muki',
                password: 'blabla',
                lastLoginTime: 1601891998863,
                isAdmin: false
            },
            {
                id: 'u103',
                username: 'shuki',
                password: 'lama',
                lastLoginTime: 1601891998862,
                isAdmin: false
            }

        ]
    }
    gUsers = users
    _saveUsersToStorage()
}

function getUsersToShow() {
    var users = gUsers
    return users
}

function _saveUsersToStorage() {
    saveToStorage(STORAGE_KEY, gUsers)
}

// ----- service-local-storage -----
function saveToStorage(key, val) {
    const users = JSON.stringify(val)
    localStorage.setItem(key, users)
}

function loadFromStorage(key) {
    const users = localStorage.getItem(key)
    return JSON.parse(users)
}