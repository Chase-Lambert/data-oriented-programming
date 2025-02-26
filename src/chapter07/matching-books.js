class CatalogDB {
  static matchingBooks(title)  {
    var matchingBooksQuery = `
SELECT isbn, available
 FROM books
 WHERE title = like '%$1%';
`;
    var books = dbClient.query(catalogDB, matchingBooksQuery, [title]);
    if(!valid(booksFromDBSchema, books)) {
    throw "Invalid books";
  }
    return books;
  }
}
