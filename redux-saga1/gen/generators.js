function* someGenerator() {
  const helloStr = yield 1;
  console.log(helloStr); // если аргумент в функции next не передавать, то переменная будет
  // undefined
  yield 2;
  yield 3;
  return 4;
}
const gen = someGenerator();
console.log(gen.next());
console.log(gen.next("Hello"));
console.log(gen.next());
console.log(gen.next());
// console.log(gen.next());
