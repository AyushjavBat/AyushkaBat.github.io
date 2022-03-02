"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/*module.exports = { scrambleshowTitles, findTitles, showAuthors, findAuthors, showIDs, findIDs, addBook };
//add all of your function names here that you need for the node mocha tests


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;

}

function scramble() {

    const all_titles = findTitles();
    all_titles.sort((a, b) => a.length - b.length);
    const allString = all_titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = allString;

}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (let each_title of library) {
        titles.push(each_title.title)
    }
    return titles;
}

function showAuthors() {

    const authors = findAuthors();
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

function findAuthors() {
    let authors = [];
    for (let each_author of library) {
        authors.push(each_author.author)
    }
    return authors;
}

function showIDs() {

    const ids = findIDs();
    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}

function findIDs() {
    let ids = [];
    for (let each_id of library) {
        ids.push(each_id.libraryID)
    }
    return ids;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    const title = document.getElementById("title"); //retrieves the book title from the title textbox
    const author = document.getElementById("author");
    const libraryID = document.getElementById("libraryID");
    const another_object = {};
    another_object.title = title;
    another_object.author = author;
    another_object.libraryID = libraryID;
    library.push(another_object);

    return another_object;



    //finish the implementation -- get the author, create a book object, and add to the library array
}