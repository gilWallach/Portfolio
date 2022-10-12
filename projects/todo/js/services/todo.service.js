'use strict'

const STORAGE_KEY = 'todoDB'
var gFilters = {
    txt: '',
    status: '',
}
var gSortBy
var gTodos

_createTodos()

function getTodosForDisplay() {
    var todos = gTodos

    if (gFilters.status) {
        todos = todos.filter(todo =>
            (todo.isDone && gFilters.status === 'done') ||
            (!todo.isDone && gFilters.status === 'active')
        )
    }
    todos = todos.filter(todo => todo.txt.toLowerCase().includes(gFilters.txt.toLowerCase()))    
    return todos
}

function removeTodo(todoId) {
    const todoIdx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(todoIdx, 1)
    _saveTodosToStorage()
}

function setImportance(importance, todoId){
    const todoIdx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos[todoIdx].importance = importance
}
function toggleTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    _saveTodosToStorage()
}


function addTodo(txt) {
    // const todo = {
    //     id: _makeId(),
    //     txt,
    //     isDone: false
    // }
    // THE SAME
    const todo = _createTodo(txt)
    gTodos.push(todo)
    _saveTodosToStorage()
}

function setFilter(status) {
    gFilters.status = status
}
function getFilterStatus(todo){
    return gFilters.status
}

function setFilterByTxt(txt) {
    gFilters.txt = txt
}
function setSort(sortBy) {
    gSortBy = sortBy
    sortTodos(sortBy)
}

function sortTodos(sortBy){
    console.log(gTodos[0].createdAt)
    if(sortBy === 'date') gTodos.sort((a, b) => b.createdAt - a.createdAt)
    gTodos.sort((a, b) => a.importance - b.importance)
    console.log(gTodos)
    return gTodos
}

function getTotalCount() {
    return gTodos.length
}

function getActiveCount() {
    return gTodos.filter(todo => !todo.isDone).length
}


function _createTodos() {
    var todos = loadFromStorage(STORAGE_KEY)

    if (!todos || !todos.length) {
        todos = [
            {
                id: 't101',
                txt: 'Learn HTML',
                isDone: true,
                createdAt: new Date().getTime(),
                importance: ''
            },
            {
                id: 't102',
                txt: 'Master JS',
                isDone: false,
                createdAt: new Date().getTime(),
                importance: ''
            },
            {
                id: 't103',
                txt: 'Study CSS',
                isDone: false,
                createdAt: new Date().getTime(),
                importance: ''
            },
        ]
    }
    gTodos = todos
    _saveTodosToStorage()
}

function _createTodo(txt) {
    const todo = {
        id: _makeId(),
        txt,
        isDone: false,
        createdAt: new Date().getTime(),
        importance: ''
    }
    return todo
}


function _saveTodosToStorage() {
    saveToStorage(STORAGE_KEY, gTodos)
}

function _makeId(length = 5) {
    var txt = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return txt;
}

// function getTimeStr(){
//     var time = new Date()
//     var mins = String(time.getMinutes()).padStart(2, '0');
//     var hh = String(time.getHours()).padStart(2, '0');
//     var dd = String(time.getDate()).padStart(2, '0');
//     var mm = String(time.getMonth() + 1).padStart(2, '0');
//     var yyyy = time.getFullYear();
    
//     time = mm + '/' + dd + '/' + yyyy + ' at ' + hh + ':' + mins;
//     return time
// }