const { addBooksHandler, getAllBooksHandler, getSingleBookHandler, editBookHandler, hapusBookHandler } = require('./handler');

const routes = [

  // tambah buku
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  { // menampilkan semua buku
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  { // menampilkan detail buku
    method: 'GET',
    path: '/books/{bookId}',
    handler: getSingleBookHandler,
  },
  { // mengubah data buku
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookHandler,
  },
  { // menghapus data buku
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: hapusBookHandler,
  },






  // Page Home
  // {
  //   method: 'GET',
  //   path: '/',
  //   handler: (request, h) => {
  //       return 'Home Page';
  //   }
  // },
  // {
  //   method: '*',
  //   path: '/',
  //   handler: (request, h) => {
  //       return 'Halaman tidak dapat diakses dengan method tersebut';
  //   },
  // },

  // // Page About
  // {
  //   method: 'GET',
  //   path: '/about',
  //   handler: (request, h) => {
  //       return 'About Page';
  //   }
  // },
  // {
  //   method: '*',
  //   path: '/about',
  //   handler: (request, h) => {
  //       return 'Halaman tidak dapat diakses dengan method';
  //   },
  // },

  // // Page Lain
  // {
  //   method: '*',
  //   path: '/{any*}',
  //   handler: (request, h) => {
  //       return 'Halaman tidak ditemukan';
  //   },
  // },

  // // Route Lain
  // {
  //   method: 'GET',
  //   path: '/hello/{name?}',
  //   handler: (request, h) => {
  //     const { name = "stranger" } = request.params;
  //     const { lang } = request.query;

  //     if(lang === 'id') {
  //       return `Hai, ${name}!`;
  //     }

  //     return `Hello, ${name}!`;
  //   }
  // },
];

module.exports = routes;