const hello = "first hello";
// hello = "second hello"; // error

if (true) {
  const hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // fist hello
