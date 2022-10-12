'use strict'

// paging function
// add modal to query string maybe a more elegant way?

var gUpdatedBookId

function onInit() {
    renderFilterByQueryStringParams()
    renderBooks()
}
function renderBooks() {
    gFavLayout === 'table' ? renderBooksTable() : renderBooksCards()
}

function renderBooksTable() {
    setFavLayout('table')
    var books = getBooksForDisplay()

    document.querySelector('.cards').classList.add('hide')
    document.querySelector('.books-display table').classList.remove('hide')

    var strHTMLs = books.map(book => `
    <tr class="book">
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.price}$</td>
        <td><button class="read-btn" onclick="onRead('${book.id}')">Read</button></td>
        <td><button class="update-btn" onclick="onUpdateBook('${book.id}')">Update</button></td>
        <td><button class="delete-btn" onclick="onRemoveBook('${book.id}')">Delete</button></td>
    </tr>
`)

    document.querySelector('.books-display table tbody').innerHTML = strHTMLs.join('')
    document.querySelector('.paging span').innerText = getCurrPage()
}

function renderBooksCards() {
    setFavLayout('cards') // on choose layout
    document.querySelector('.books-display table').classList.add('hide')
    document.querySelector('.books-display .cards').classList.remove('hide')

    var books = getBooksForDisplay()
    var strHTMLs = books.map(book => `
    <article class="book-card">
        <h2>${book.title}</h2>
        <img src="${book.imgUrl}" alt="">
        <h3>Price: ${book.price}$</h3>
        <p>Book id: ${book.id}</p>
        <button class="read-btn" onclick="onRead('${book.id}')">Read</button>
        <button class="update-btn" onclick="onUpdateBook('${book.id}')">Update</button>
        <button class="delete-btn" onclick="onRemoveBook('${book.id}')">Delete</button></td>
    </article>
`)

    document.querySelector('.books-display .cards').innerHTML = strHTMLs.join('')
    document.querySelector('.paging span').innerText = getCurrPage()
}


// Crud

// ----- filter books -----

function onSetFilterBy(filterBy) {
    filterBy = setBookFilterBy(filterBy)
    renderBooks()
    setQueryParams(filterBy, gCurrDisplayedBook)
}

// ----- remove book -----
function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()

}

// ----- add book -----
function onAddBook() {
    document.querySelector('.add-book-user-input').classList.add('show-left-modal-user-input')
}

function onSubmitNewBook() {
    var newTitle = document.querySelector('.enter-title').value
    var newPrice = document.querySelector('.enter-price').value
    var newImgUrl = document.querySelector('.enter-img').value
    addBook(newTitle, +newPrice, newImgUrl)

    document.querySelector('.add-book-user-input').classList.remove('show-left-modal-user-input')
    renderBooks()
}

function onCloseNewBook() {
    document.querySelector('.add-book-user-input').classList.remove('show-left-modal-user-input')
}

// ----- update book -----
function onUpdateBook(bookId) {
    document.querySelector('.update-user-input').classList.add('show-left-modal-user-input')
    return gUpdatedBookId = bookId

    //! How to get rid of this global variable??
}

function onSubmitUpdate() {
    var updatedPrice = document.querySelector('.updated-price').value
    // ! make sure input is a number
    if (updatedPrice < 0 && updatedPrice > 75) return
    updateBook(gUpdatedBookId, updatedPrice)
    renderBooks()
}

// ----- paging -----
// try to make one function using diff
function onChangePage(diff) {
    switch (diff) {
        case 1: document.querySelector('.prev').disabled = false
            document.querySelector('.prev').classList.remove('disabled')
            changePage(diff)

            renderBooks()

            if (gPageIdx >= (gBooks.length / PAGE_SIZE) - 1) {
                document.querySelector('.next').disabled = true
                document.querySelector('.next').classList.add('disabled')
            }
            break
        case -1: document.querySelector('.next').disabled = false
            document.querySelector('.next').classList.remove('disabled')
            changePage(diff)

            renderBooks()

            if (gPageIdx <= 0) {
                document.querySelector('.prev').disabled = true
                document.querySelector('.prev').classList.add('disabled')
            }
    }
}

// ----- query params -----
function setQueryParams(filterBy, bookId) {
    const queryStringParams = `?maxPrice=${filterBy.maxPrice}&minRate=${filterBy.minRate}&title=${filterBy.title}&bookmark=${bookId}`
    const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function renderFilterByQueryStringParams() {
    const queryStringParams = new URLSearchParams(window.location.search)
    const filterBy = {
        maxPrice: queryStringParams.get('maxPrice') || 75,
        minRate: queryStringParams.get('minRate') || 0,
        title: queryStringParams.get('title') || '',
    }
    const bookId = queryStringParams.get('bookmark')
    document.querySelector('.filters .filter-max-price').value = filterBy.maxPrice
    document.querySelector('.filters .filter-min-rate').value = filterBy.minRate

    setBookFilterBy(filterBy)

    if (bookId !== 'undefined' && bookId !== 'null' && bookId !== null) onRead(bookId)
    // ! how to convert undefined & null from the queryStringParams to actual values? 
}
// !render here!!
