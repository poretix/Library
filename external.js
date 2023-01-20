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
let library = [];

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

    //create new book object and add to library
    let newBookObject = new Book(titleResult, authorResult, pagesResult, checkBoxResult);
    library.push(newBookObject);

    //hide form upon submission and prevent refresh of page
    hideForm();
    event.preventDefault();
}

//function to change status of read book 
function readBook(event) {
    /*const bookCheckRead = document.querySelector(".checkReadResult");*/
    if (event.target.textContent === "Read") {
        event.target.style.backgroundColor = "rgba(250, 163, 163, 0.6)";
        event.target.textContent = "Not Read";
    }
    else if (event.target.textContent === "Not Read") {
        event.target.style.backgroundColor = "rgba(163, 250, 165, 0.6)";
        event.target.textContent = "Read";
    }
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    //create new book div
    const bookShelf = document.querySelector('#bookshelf');
    const newBook = document.createElement('div');
    newBook.setAttribute("id", "newBook");
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
        bookCheckRead.style.backgroundColor = "rgba(163, 250, 165, 0.6)";
        bookCheckRead.textContent = "Read";
    }
    else if (this.read === false) {
        bookCheckRead.style.backgroundColor = "rgba(250, 163, 163, 0.6)";
        bookCheckRead.textContent = "Not Read";
    }

    bookCheckRead.addEventListener("mouseover", hoverOpacity);
    bookCheckRead.addEventListener("mouseout", offOpacity);
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

function hoverOpacity() {
    const bookCheckRead = document.querySelector(".checkReadResult");
    if (bookCheckRead.textContent === "Read") {
        bookCheckRead.style.backgroundColor = "rgba(163, 250, 165)"
    }
    else if (bookCheckRead.textContent === "Not Read") {
        bookCheckRead.style.backgroundColor = "rgba(250, 163, 163)"; 
    }
}

function offOpacity() {
    const bookCheckRead = document.querySelector(".checkReadResult");
    if (bookCheckRead.textContent === "Read") {
        bookCheckRead.style.backgroundColor = "rgba(163, 250, 165, 0.6)"
    }
    else if (bookCheckRead.textContent === "Not Read") {
        bookCheckRead.style.backgroundColor = "rgba(250, 163, 163, 0.6)";
    }
}