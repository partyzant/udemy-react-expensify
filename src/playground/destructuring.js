// object destructuring
const person = {
  name: 'Juka',
  age: 16,
  location: {
    city: 'Chujnia',
    temp: -32323
  }
};

const { name: firstName = 'anonymus', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
console.log(`it's ${temperature} in ${city}`);


const book = {
  title: 'Chuj dupa i gałęzi kupa',
  author: 'Pan Bóg',
  publisher: {
    name: 'Życie'
  }
};

const { name: publisherName = 'chuj go wie' } = book.publisher;
console.log(publisherName);



// array destructuring
const address = ['123 S dupa street', 'Wawa', 'Mazowieckie', '24-233'];

const [, city, state = 'Nie wiadomo'] = address;
console.log(`You are in ${city} ${state}`);


const item = ['Coffee', '4', '6', '10'];

const [prod, , price] = item;
console.log(`A medium ${prod} costs ${price}`);
