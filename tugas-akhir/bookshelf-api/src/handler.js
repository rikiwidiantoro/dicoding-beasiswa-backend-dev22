const { nanoid } = require('nanoid');
const books = require('./books');

// tambah buku
const addBooksHandler = (request, h) => {
  // mengirim data
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // finished => Nilai finished didapatkan dari observasi pageCount === readPage.
  let finished = Boolean;
  if(pageCount === readPage) {
    finished = true;
  } else {
    finished = false;
  }

  // kontainer buku
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
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
// const getAllBooksHandler = () => ({
//   status: 'success',
//   data: {
//     books,
//   },
// });
// const getAllBooksHandler = (request, h) => {
//   const { name, reading, finished } = request.query;

//   const data = [];

//   books.map((book) => {
//     if(book.name.toLowerCase().includes(name.toLowerCase())){
//         data.push({
//             id: book.id, name: book.name, publisher: book.publisher
//         });
//       }
//   });

//   const response = h.response({
//     status: 'success',
//     data: {
//       books: data
//     },
//   });
//   response.code(200);
//   return response;
// };



const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  if(name){
     const data = [];

      books.map((book) => {
          if(book.name.toLowerCase().includes(name.toLowerCase())){
              data.push({
                  id: book.id, name: book.name, publisher: book.publisher
              });
          }
      });

      const response = h.response({
          status: "success",
          data : {
              books: data
          }
      });
      response.code(200);
      return response;
  }

  if(reading){
      const data = [];

      books.map((book) => {
          if(book.reading == reading){
              data.push({
                  id: book.id, name: book.name, publisher: book.publisher
              });
          }
      });

      const response = h.response({
          status: "success",
          data : {
              books: data
          }
      });
      response.code(200);
      return response;
  }

  if(finished){
      const data = [];

      books.map((book) => {
          if(book.finished == finished){
              data.push({
                  id: book.id, name: book.name, publisher: book.publisher
              });
          }
      });

      const response = h.response({
          status: "success",
          data : {
              books: data
          }
      });
      response.code(200);
      return response;
  }

  if(books.length > 0 && !name && !reading && !finished){
      const data = [];

      books.map((book) => {
          data.push({
              id: book.id, name: book.name, publisher: book.publisher
          });
      });

      const response = h.response({
          status: "success",
          data : {
              books: data
          }
      });
      response.code(200);
      return response;
  }

  const response = h.response({
      status: "success",
      data : {
          books: []
      }
  });

  response.code(200);
  return response;
};

// menampilkan detail buku
const getSingleBookHandler = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter((n) => n.id === bookId)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

// mengubah data buku
const editBookHandler = (request, h) => {
  const { bookId } = request.params;

  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const updatedAt = new Date().toISOString();

  // finished => Nilai finished didapatkan dari observasi pageCount === readPage.
  let finished = Boolean;
  if(pageCount === readPage) {
    finished = true;
  } else {
    finished = false;
  }

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name, 
      year, 
      author, 
      summary, 
      publisher, 
      pageCount, 
      readPage, 
      reading,
      finished,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// menghapus data buku
const hapusBookHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  // Bila index bernilai -1, maka kembalikan handler dengan respons gagal.
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addBooksHandler, getAllBooksHandler, getSingleBookHandler, editBookHandler, hapusBookHandler };