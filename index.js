// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require("./server.js");

const port = 5000 || process.env.PORT;
const greeting = "GREETINGS" || process.env.GREETING;

server.listen(port, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
