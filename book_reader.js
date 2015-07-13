function BookReader(book, currentPage) {
  // your code here
  this.book = book,
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  // your code here
  if (this.book.length - 1 > this.currentPage) {
    this.currentPage += 1;
    var indexOfBook = this.currentPage;
    return this.book[indexOfBook];
  }
  if (this.book.length - 1 === this.currentPage) {
    var indexOfBook = this.currentPage;
    return this.book[indexOfBook];
  }
};

BookReader.prototype.previousPage = function() {
  // your code here
  if (this.currentPage === 0) {
    var indexOfBook = this.currentPage;
    return this.book[indexOfBook];
  }
  else {
    this.currentPage = this.currentPage - 1;
    var indexOfBook = this.currentPage;
    return this.book[indexOfBook];
  }
};

BookReader.prototype.pagesLeft = function() {
  // your code here
  return (this.book.length - 1) - this.currentPage
};

BookReader.prototype.encouragement = function() {
  // your code here
  var pageRemainder = (this.book.length - 1) - this.currentPage;
  if (pageRemainder === 1) {
    return "Keep going, this book is good 'til the last drop!";
  }
  else {
    var string = "Keep going, only " + pageRemainder + " pages left after this one!";
    return string;
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
