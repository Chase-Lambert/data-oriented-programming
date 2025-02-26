var isbnSchema = {
  "type": "string",
  "pattern": "^[0-9-]{10,20}$"
};

var libIdSchema = {
  "type": "string",
  "pattern": "^[a-z0-9-]{3,20}$"
};

var authorIdSchema ={
  "type": "string",
  "pattern": "[a-z-]{2,50}"
};

var bookItemSchema = {
  "type": "object",
  "additionalProperties": {
    "id": uuidSchema,
    "libId": libIdSchema,
    "purchaseDate": {
      "type": "string",
      "format": "date"
    },
    "isLent": {"type": "boolean"}
  }
};

var bookSchema = {
  "type": "object",
  "required": ["title", "isbn", "authorIds", "bookItems"],
  "properties": {
    "title": {"type": "string"},
    "publicationYear": publicationYearSchema,
    "isbn": isbnSchema,
    "publisher": {"type": "string"},
    "authorIds": {
      "type": "array",
      "items": authorIdSchema
    },
    "bookItems": bookItemSchema
  }
};

var authorSchema = {
  "type": "object",
  "required": ["id", "name", "bookIsbns"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "bookIsbns": {
      "items": isbnSchema
    }
  }
};

var catalogSchema = {
  "type": "object",
  "properties": {
    "booksByIsbn": {
      "type": "object",
      "additionalProperties": bookSchema
    },
    "authorsById": {
      "type": "object",
      "additionalProperties": authorSchema
    }
  },
  "required": ["booksByIsbn", "authorsById"]
};
