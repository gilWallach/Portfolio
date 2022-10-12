'use strict'

const STORAGE_KEY = 'booksDB'
const STORAGE_KEY_FAVLAYOUT = 'favLayout'

const PAGE_SIZE = 3

var gPageIdx = 0
var gCurrPage = 1
var gFilters = {
    maxPrice: 75,
    minRate: 0,
    text: ''
}

var gFavLayout = !loadFromStorage(STORAGE_KEY_FAVLAYOUT) ? 'cards' : loadFromStorage(STORAGE_KEY_FAVLAYOUT)

var gFilterBy

var gBooks
var gTitles = ['Frankenstein', 'Faith', 'A Storm of Swords', 'Alien Hunters', 'RENOVO', 'The Wise Man\'s Fear']
var gImgUrls = [
    'https://books.google.com/books/publisher/content/images/frontcover/4HBqDwAAQBAJ?fife=w240-h345',
    'https://books.google.com/books/content/images/frontcover/0ya91AZr524C?fife=w240-h345',
    'https://books.google.com/books/content/images/frontcover/rIj5x-C7D2cC?fife=w240-h345',
    'https://books.google.com/books/publisher/content/images/frontcover/zGMxBgAAQBAJ?fife=w240-h345',
    'https://books.google.com/books/publisher/content/images/frontcover/5YWmDAAAQBAJ?fife=w240-h345',
    'https://books.google.com/books/content/images/frontcover/qUW5js7ZD7UC?fife=w240-h345'
]

_createBooks()


function getBooksForDisplay() {
    var books = gBooks
    // filtering
    var books = gBooks.filter(book => book.price <= gFilters.maxPrice &&
        book.rate >= gFilters.minRate && 
        book.title.toLowerCase().includes(gFilters.text.toLowerCase())
        )

    // paging
    const startIdx = gPageIdx * PAGE_SIZE
    books = books.slice(startIdx, startIdx + PAGE_SIZE)

    return books
}


function removeBook(bookId) {
    var book = getBookById(bookId)
    gBooks.splice(book, 1)
    _saveToStorage()
}

function addBook(title, price, imgUrl) {
    const book = _createNewBook(title, price, imgUrl)
    gBooks.unshift(book)
    _saveToStorage()
}

function updateBook(bookId, newPrice) {
    var book = getBookById(bookId)
    book.price = newPrice
    _saveToStorage()
}

function setBookFilterBy(filterBy = {}) {
    if (filterBy.maxPrice !== undefined) gFilters.maxPrice = filterBy.maxPrice
    if (filterBy.minRate !== undefined) gFilters.minRate = filterBy.minRate
    filterBy.text ? (gFilters.text = filterBy.text) : (gFilters.text = '')

    return gFilters
}

function setFilter(filter = {}) {
    if (filter.minPrice !== undefined) gFilterBy.minPrice = filter.minPrice
    if (filter.minRate !== undefined) gFilterBy.minRate = filter.minRate
    filter.txt ? (gFilterBy.txt = filter.txt) : (gFilterBy.txt = '')
  
    return gFilterBy
  }

function changePage(diff){
gPageIdx += diff
}

function getCurrPage() {
    return gPageIdx + 1
}

function setFavLayout(layout) {
    gFavLayout = layout
    saveToStorage(STORAGE_KEY_FAVLAYOUT, gFavLayout)
}

function increaseRate(book) {
    book.rate++
    _saveToStorage()
}

function decreaseRate(book) {
    book.rate--
    _saveToStorage
}





function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function _getFromStorage() {
    loadFromStorage(STORAGE_KEY)
}

function _createBook(title, imgUrl) {
    return {
        id: makeId(3),
        title,
        price: getRandomIntInclusive(12, 50),
        imgUrl,
        rate: 0
    }
}

function _createNewBook(title, price = getRandomIntInclusive(5, 75), imgUrl) {
    return {
        id: makeId(3),
        title,
        price,
        imgUrl,
        rate: 0
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)

    if (!books || !books.length || books === undefined) {
        books = []
        for (let i = 0; i < gTitles.length; i++) {
            books.push(_createBook(gTitles[i], gImgUrls[i]))
        }
    }
    gBooks = books
    _saveToStorage()
}