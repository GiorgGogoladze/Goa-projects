const http = require('http'); 

const port = 1; // პორტი
//სერვერი შევქენი
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to GOA!'); //ტექსტსი
});

//გაშვება სერვერის
server.listen(port, () => {
  console.log(`სერვერი მუშაობს პორტზე ${port}`);
});
