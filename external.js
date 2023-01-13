const formPopup = document.querySelector('.formPopup');
function showForm() {
    formPopup.classList.add('show');
    const title = document.querySelector("#title");
    title.value = '';
    const author = document.querySelector('#author');
    author.value = '';
    const pages = document.querySelector('#pages')
    pages.value = '';
    const checkBox = document.querySelector('#checkRead');
    checkBox.checked = false;
}

function hideForm() {
    formPopup.classList.remove('show');
}

function clearForm() {
    const title = document.querySelector("#title");
}

let titleResult = '';
let authorResult = '';
let pagesResult = '';
let checkBoxResult = '';

function submitForm(event) {
    //get values of form submission
    const title = document.querySelector("#title");
    titleResult = title.value;
    const author = document.querySelector('#author');
    authorResult = author.value;
    const pages = document.querySelector('#pages')
    pagesResult = pages.value;
    const checkBox = document.querySelector('#checkRead');
    checkBoxResult = checkBox.checked;

    //create new book object
    let newBookObject = new Book(titleResult, authorResult, pagesResult, checkBoxResult);

    library.push(newBookObject);


    //create new book div
    /*const bookShelf = document.querySelector('#bookshelf');
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    bookShelf.appendChild(newBook);

    const bookTitle = document.createElement('div');
    bookTitle.textContent = `"${title.value}"`;
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = author.value;
    newBook.appendChild(bookAuthor);

    const bookPages = document.createElement('div');
    bookPages.textContent = `${pages.value} pages`;
    newBook.appendChild(bookPages);

    //read or not read button
    const bookCheckRead = document.createElement('button');
    bookCheckRead.classList.add('checkReadResult');
    bookCheckRead.setAttribute("onclick", "readBook()");
    if (checkBox.checked === true) {
        bookCheckRead.style.backgroundColor = "rgba(163, 250, 165, 0.8)";
        bookCheckRead.textContent = "Read";
    }
    else if (checkBox.checked === false) {
        bookCheckRead.style.backgroundColor = "rgba(250, 163, 163, 0.8)";
        bookCheckRead.textContent = "Not Read";
    }
    newBook.appendChild(bookCheckRead);

    //delete button
    const deleteBook = document.createElement('button');
    deleteBook.textContent = "Remove";
    deleteBook.classList.add('deleteBook');
    deleteBook.setAttribute("onclick", "deleteBook()");
    newBook.appendChild(deleteBook);*/

    //adding book to library

    //hide form upon submission and prevent refresh of page
    hideForm();
    event.preventDefault();
}

//function to change status of read book 
function readBook(event) {
    /*const bookCheckRead = document.querySelector(".checkReadResult");*/
    if (event.target.textContent === "Read") {
        event.target.style.backgroundColor = "rgba(250, 163, 163, 0.8)";
        event.target.textContent = "Not Read";
    }
    else if (event.target.textContent === "Not Read") {
        event.target.style.backgroundColor = "rgba(163, 250, 165, 0.8)";
        event.target.textContent = "Read";
    }
}

//function toggle book's read status on Book prototype instance


let library = [];
let libraryIndex = 0;
if (library.length === 0) {
    libraryIndex = 0;
}
else {
    libraryIndex = library.length - 1;
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    //create new book div
    const bookShelf = document.querySelector('#bookshelf');
    const newBook = document.createElement('div');
    newBook.setAttribute("id", "newBook1");
    newBook.classList.add('book');
    bookShelf.appendChild(newBook);

    const bookTitle = document.createElement('div');
    bookTitle.textContent = `"${this.title}"`;
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = this.author;
    newBook.appendChild(bookAuthor);

    const bookPages = document.createElement('div');
    bookPages.textContent = `${this.pages} pages`;
    newBook.appendChild(bookPages);

    //read or not read button
    const bookCheckRead = document.createElement('button');
    bookCheckRead.classList.add('checkReadResult');
    bookCheckRead.setAttribute("onclick", "readBook(event)");
    if (this.read === true) {
        bookCheckRead.style.backgroundColor = "rgba(163, 250, 165, 0.8)";
        bookCheckRead.textContent = "Read";
    }
    else if (this.read === false) {
        bookCheckRead.style.backgroundColor = "rgba(250, 163, 163, 0.8)";
        bookCheckRead.textContent = "Not Read";
    }
    newBook.appendChild(bookCheckRead);

    //delete button
    const deleteBook = document.createElement('button');
    deleteBook.textContent = "Remove";
    deleteBook.classList.add('deleteBook');
    deleteBook.setAttribute("onclick", "deleteBook(event)");
    newBook.appendChild(deleteBook);

}

function deleteBook(event) {
    event.target.parentElement.remove();
}

function addBookToLibrary(...args) {
    library.push(...args);
    console.log(library);
}

function displayBook() {
    const bookShelf = document.querySelector('#bookshelf');
    for (let i = 0; i < library.length; i++) {
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.textContent = library[i];
        bookShelf.appendChild(newBook);
    }
}