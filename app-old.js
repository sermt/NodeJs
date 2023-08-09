const http = require("http");

http
  .createServer((req, res) => {
  /*   res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    res.writeHead(200, { "Content-type": "application/csv" });
    res.write("id, nombre");
    res.write("1, fernando"); */

    res.write('Hola');
    res.end();
  })
  .listen(3600);
