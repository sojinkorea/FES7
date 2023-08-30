let hello = "first hello";
// let hello = "second hello"; // error

if (true) {
  let hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello
