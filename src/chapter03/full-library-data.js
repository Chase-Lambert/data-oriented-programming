var libraryData = {
    "name": "The smallest library on earth",
    "address": "Here and now",
    "catalog": {
        "booksByIsbn": {
            "978-1779501127": {
                "isbn": "978-1779501127",
                "title": "Watchmen",
                "publicationYear": 1987,
                "authorIds": ["alan-moore",
                              "dave-gibbons"],
                "bookItems": [
                    {
                        "id": "book-item-1",
                        "libId": "nyc-central-lib",
                        "isLent": true
                    },
                    {
                        "id": "book-item-2",
                        "libId": "nyc-central-lib",
                        "isLent": false
                    }
                ]
            }
        },
        "authorsById": {
            "alan-moore": {
                "name": "Alan Moore",
                "bookIsbns": ["978-1779501127"]
            },
            "dave-gibbons": {
                "name": "Dave Gibbons",
                "bookIsbns": ["978-1779501127"]
            }
        }
    },
  "userManagement": {
    "librarians": {
      "franck@gmail.com" : {
        "email": "franck@gmail.com",
        "encryptedPassword": "bXlwYXNzd29yZA=="
      }
    },
    "members": {
      "samantha@gmail.com": {
        "email": "samantha@gmail.com",
        "encryptedPassword": "c2VjcmV0",
        "isBlocked": false,
        "bookLendings": [
          {
            "bookItemId": "book-item-1",
            "bookIsbn": "978-1779501127",
            "lendingDate": "2020-04-23"
          }
        ]
      }
    }
  }
};
