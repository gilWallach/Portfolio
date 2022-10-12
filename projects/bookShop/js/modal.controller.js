'use strict'
// ! add the description to the book obj so it doesn't change on refresh
var gCurrDisplayedBook

function onRead(bookId) {
    getCurrBookDisplayed(bookId)
    var book = getBookById(bookId)
    renderModal(book)

}

function renderModal(book) {
    var elModal = document.querySelector('.read-modal')
console.log('book', book.rate)
    elModal.querySelector('h2').innerText = book.title
    elModal.querySelector('.img').innerHTML = `<img src="${book.imgUrl}" alt="">`
    elModal.querySelector('.price').innerText = `Price: ${book.price}$`
    // elModal.querySelector('.rate span').innerText = `${book.rate}`
    elModal.querySelector('.description').innerText = makeLorem(50)

    elModal.classList.add('read-modal-open')

    renderRateBtn(book)
}

function renderRate(book) {
    var elModal = document.querySelector('.read-modal')
    elModal.querySelector('.rate span').innerText = `${book.rate}`
}

function onCloseModal() {
    var elModal = document.querySelector('.read-modal')
    elModal.classList.remove('read-modal-open')
}

function getCurrBookDisplayed(bookId) {
    var book = getBookById(bookId)
    gCurrDisplayedBook = book
}

function renderRateBtn(book) {
    var strHTML = `<button class="minus green-bg" onclick="
    onChangeRate('${book.id}',-1)">-</button>
    <span class="rate-screen">${book.rate}</span>
    <button class="plus green-bg" onclick="onChangeRate('${book.id}',1)">+</button>`
    document.querySelector('.rate-container').innerHTML = strHTML
  }

function onChangeRate(bookId, diff){
var book = getBookById(bookId)
var newRate = +book.rate + diff
if (!newRate || newRate > 10) return
book.rate = newRate
document.querySelector('.rate-screen').innerText = book.rate
_saveToStorage()
}

function onBookmark() {
    setQueryParams(gFilters, gCurrDisplayedBook.id)
}

function onRemoveBookmark(){
    gCurrDisplayedBook = undefined
    setQueryParams(gFilters, gCurrDisplayedBook)
}
