const { nanoid } = require('nanoid');
const books = require('./books');

// tambah buku
const addBooksHandler = (request, h) => {
  // mengirim data
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // kontainer buku
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt,
  };

  books.push(newBook);


  // pengondisian
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });

  response.code(500);
  return response;

};

// menampilkan semua buku
const getAllBooksHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});

module.exports = { addBooksHandler, getAllBooksHandler };