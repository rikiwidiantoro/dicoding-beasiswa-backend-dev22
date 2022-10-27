const http = require('http');
 
const requestListener = (request, response) => {
    // response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'application/json'); // mengubah format HTML menjadi format JSON
    response.setHeader('X-Powered-By', 'NodeJS');
 
    // response.statusCode = 200;
    // response.end('<h1>Halo HTTP Server!</h1>');

    const { method, url } = request;
    // request

    // if(method === 'GET') {
    //   response.end('<h1>Hello! GET</h1>');
    // }
    // if(method === 'POST') {
    //   // response.end('<h1>Hai! POST</h1>');
    //   let body = [];

    //   request.on('data', (chunck) => {
    //     body.push(chunck);
    //   });

    //   request.on('end', () => {
    //     body = Buffer.concat(body).toString();

    //     const { name } = JSON.parse(body);
    //     response.end(`<h1>Hai, ${name}!</h1>`);
    //   });
    // }


    // if(method === 'PUT') {
    //   response.end('<h1>Bonjour! PUT</h1>');
    // }
    // if(method === 'DELETE') {
    //   response.end('<h1>Salam! DELETE</h1>');
    // }


    // routing request
    if(url === '/') {
      if(method === 'GET') {
        response.statusCode = 200;
        response.end(JSON.stringify({
          message: `Ini adalah homepage.`,
        }));
      } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request.`,
        }));
      }
    } else if(url === '/about') {
      if(method === 'GET') {
        response.statusCode = 200;
        response.end(JSON.stringify({
          message: `Halo! Ini adalah halaman about.`,
        }));
      } else if(method === 'POST') {
        let body = [];

        request.on('data', (chunck) => {
          body.push(chunck);
        });

        request.on('end', () => {
          body = Buffer.concat(body).toString();
          const { name } = JSON.parse(body);
          response.statusCode = 200;
          response.end(JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about.`,
          }));
        });
      } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request.`,
        }));
      }
    } else {
      response.statusCode = 404;
      response.end(JSON.stringify({
        message: `Halaman tidak ditemukan!`,
      }));
    }




};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});