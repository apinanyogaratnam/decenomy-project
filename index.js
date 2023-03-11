import Wait from './wait.js';

async function main() {
  const myObj = new Wait();
  const result = await myObj.getOk();
  console.log(result);
}

main();
