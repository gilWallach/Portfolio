'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {

    const todos = getTodosForDisplay()

    var msg = `No ${getFilterStatus(todos[0])} tasks to show`
    if (todos.length === 0) document.querySelector('.msg').innerText = msg
    else document.querySelector('.msg').innerText = ''


    const strHTMLs = todos.map(todo => `
        <div class="todo-item-container">
        <li class="todo-item-content ${(todo.isDone) ? 'done' : ''}" onclick="onToggleTodo('${todo.id}')">
        ${todo.txt}
        </li>
        <button onclick="onRemoveTodo(event,'${todo.id}')" >X</button>
        <span>Set Importance:</span>
        <select onchange="onSetImportance(this.value, '${todo.id}')">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </div>
    `)

    document.querySelector('ul').innerHTML = strHTMLs.join('')
    document.querySelector('span.total').innerText = getTotalCount()
    document.querySelector('span.active').innerText = getActiveCount()
}


function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    if (!confirm('Are you sure?')) return
    removeTodo(todoId)
    renderTodos()
}

function onSetImportance(importance, todoId) {
    setImportance(importance, todoId)

}

function onToggleTodo(todoId) {
    console.log('Toggling:', todoId)
    toggleTodo(todoId)
    renderTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('[name=txt]')
    const txt = elTxt.value
    if (!txt) return
    addTodo(txt)
    renderTodos()
    elTxt.value = ''
}

function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderTodos()
}

function onSetFilterByTxt(txt) {
    setFilterByTxt(txt)
    renderTodos()
}

function onSetSort(sortBy) {
    // console.log('sortBy:', sortBy)
    setSort(sortBy)
    renderTodos()
}