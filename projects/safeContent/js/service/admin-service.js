'use strict'
var gSortBy

function setSort(sortBy) {
    gSortBy = sortBy
    sortUsers(sortBy)
}

function sortUsers(sortBy){
    if(sortBy === 'username') gUsers.sort((a, b) => (a.username < b.username ? -1 : 1))
    gUsers.sort((a, b) => a.lastLoginTime - b.lastLoginTime)
    return gUsers
}

function preventNonAdmin() {
    var loggedInUser = loadFromStorage('loggedInUser')
    if(!loggedInUser || !loggedInUser.isAdmin) window.location.assign("index.html")
  }