/* You should initialize your project as a git project, and make small, descriptive commits as you work. When you are finished, please send me the Github link to your completed project.

The Library

You've been contracted to write a piece of software for the local library. The software needs to meet the following requirements:

- The software should track the library's inventory of books
- Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length, and checked-in/checked-out status
- Librarians should be able to:
a.) add books to the inventory
b.) remove books from the inventory 
c.) view a list of all the books in the library
d.) view a list of all the books in a given genre
e.) search for a book by title or author

BONUS: This is a library, so books can be checked in and checked out. Librarians should also be able to:

1.) Change the checked-in/checked-out status of a copy of a book
2.) Track the name of the person who has checked out a given book and the date when it is due
3.) Mark a book as overdue
4.) View a list of checked-in books only */

var sget = require("sget");

function runLibrary() {

  //----------------------CONSTRUCTORS----------------------
  function Book(template) {
    this.id = template.id;
    this.title = template.title;
    this.author = template.author;
    this.genre = template.genre;
    this.bookLength = template.bookLength;
    this.borrowStatus = false;
    this.borrower = undefined;
    this.returnDate = undefined;
    this.overdue = false;
    this.checkOut = function(checkoutTemplate) {
      this.borrowStatus = true;
      this.borrower = checkoutTemplate.name;
      this.returnDate = checkoutTemplate.date;
    };
    this.checkIn = function() {
      this.borrowStatus = false;
      this.borrower = undefined;
      this.returnDate = undefined;
    }
  }

  function Inventory() {
    this.books = {};
    this.addBook = function(book) {
      this.books[book.id] = book;
    };
    this.removeBook = function(book) {
      delete this.book[book.id];
    };
  }
  //--------------------------------------------------------

  inventory = new Inventory();
  initializeLibrary();

  function initializeLibrary() {
    var template = { id: Object.size(inventory.books), title: "on the road", author: "jack kerouac", genre: "beat", bookLength: 320 };
    var book = new Book(template);
    inventory.addBook(book);
    template = { id: Object.size(inventory.books), title: "hitchhiker's guide to the galaxy", author: "douglas adams", genre: "comedy", bookLength: 190 };
    book = new Book(template);
    inventory.addBook(book);
    template3 = { id: Object.size(inventory.books), title: "the unbearable lightness of being", author: "milan kundera", genre: "philosophical fiction", bookLength: 320 };
    book = new Book(template);
    inventory.addBook(book);
    runMainMenu();
  }

  function runMainMenu() {

  }

}

  










}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

runLibrary();