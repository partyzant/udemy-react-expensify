//plik wyłączony z testowania przez kreskę w nazie 

const add = (a,b) => a+b;
const generateGreet = (name = 'Sweet') => `Hello ${name}!`

test('should add two num', () => {
  const result = add(3,4);
  //  if(result !== 7) {
  //    throw new Error(`You added 4 and 3 Te result ${result}. Exp 7`)
  //  }
  expect(result).toBe(7);
});

test('print name', () => {
  const pr = generateGreet('Julia');
  expect(pr).toBe('Hello Julia!');
})
test('print name no val', () => {
  const pr = generateGreet();
  expect(pr).toBe('Hello Sweet!');
})
