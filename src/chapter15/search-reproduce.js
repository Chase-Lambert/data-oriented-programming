var catalogData = {"booksByIsbn":{"978-1982137274":{"isbn":"978-1982137274","title":"7 Habits of Highly Effective People","authorIds":["sean-covey","stephen-covey"]},"978-1779501127":{"isbn":"978-1779501127","title":"Watchmen","publicationYear":1987,"authorIds":["alan-moore","dave-gibbons"]}},"authorsById":{"stephen-covey":{"name":"Stephen Covey","bookIsbns":["978-1982137274"]},"sean-covey":{"name":"Sean Covey","bookIsbns":["978-1982137274"]},"dave-gibbons":{"name":"Dave Gibbons","bookIsbns":["978-1779501127"]},"alan-moore":{"name":"Alan Moore","bookIsbns":["978-1779501127"]}}};
var query = "Watch";

Catalog.searchBooksByTitle(catalogData, query);
