String manipulation:

// toUpperCase(): Returns a string with all characters converted to uppercase.
const str1 = 'hello world';
const strUpperCase = str1.toUpperCase(); // "HELLO WORLD"
console.log(strUpperCase);

// toLowerCase(): Returns a string with all characters converted to lowercase.
const str2 = 'Hello World';
const strLowerCase = str2.toLowerCase(); // "hello world"
console.log(strLowerCase);

// slice(): Returns a section of a string.
const str3 = 'hello world';
const slicedStr = str3.slice(6, 11); // "world"
console.log(slicedStr);

// indexOf(): Returns the position of the first occurrence of a specified value in a string.
const str4 = 'hello world';
const indexOfL = str4.indexOf('l'); // 2
console.log(indexOfL);

// substring(): Returns a section of a string.
const str5 = 'hello world';
const subStr = str5.substring(6, 11); // "world"
console.log(subStr);

// charAt(): Returns the character at a specified index in a string.
const str6 = 'hello world';
const charAtIndex3 = str6.charAt(3); // "l"
console.log(charAtIndex3);

// concat(): Joins two or more strings.
const str7 = 'hello';
const str8 = 'world';
const strConcatenated = str7.concat(' ', str8); // "hello world"
console.log(strConcatenated);

// replace(): Searches a string for a specified value, and returns a new string where the specified values are replaced.
const str9 = 'hello world';
const replacedStr = str9.replace('world', 'mars'); // "hello mars"
console.log(replacedStr);

// trim(): Removes whitespace from both ends of a string.
const str10 = '  hello world   ';
const trimmedStr = str10.trim(); // "hello world"
console.log(trimmedStr);





Number manipulation:

// parseInt(): Parses a string and returns an integer.
const str1 = '10';
const num1 = parseInt(str1); // 10
console.log(num1);

// parseFloat(): Parses a string and returns a floating point number.
const str2 = '10.5';
const num2 = parseFloat(str2); // 10.5
console.log(num2);

// Math.round(): Rounds a number to the nearest integer.
const num3 = 3.6;
const roundedNum = Math.round(num3); // 4
console.log(roundedNum);

// Math.ceil(): Rounds a number up to the nearest integer.
const num4 = 3.1;
const ceiledNum = Math.ceil(num4); // 4
console.log(ceiledNum);

// Math.floor(): Rounds a number down to the nearest integer.
const num5 = 3.9;
const flooredNum = Math.floor(num5); // 3
console.log(flooredNum);

// Math.max(): Returns the highest value in a list of numbers.
const numArr1 = [2, 4, 6, 8, 10];
const maxNum1 = Math.max(...numArr1); // 10
console.log(maxNum1);

// Math.min(): Returns the lowest value in a list of numbers.
const numArr2 = [2, 4, 6, 8, 10];
const minNum1 = Math.min(...numArr2); // 2
console.log(minNum1);

// Math.random(): Returns a random number between 0 and 1.
const randomNum1 = Math.random(); // (random number between 0 and 1)
console.log(randomNum1);

// isNaN(): Determines whether a value is NaN (Not a Number).
const num6 = 10;
const isNotANumber1 = isNaN(num6); // false
console.log(isNotANumber1);

// setTimeout(): Calls a function after a specified number of milliseconds.
function sayHello() {
  console.log('Hello!');
}
setTimeout(sayHello, 2000); // prints "Hello!" after 2 seconds

// setInterval(): Calls a function at specified intervals (in milliseconds).
function sayHi() {
  console.log('Hi!');
}
setInterval(sayHi, 1000); // prints "Hi!" every second

// clearTimeout(): Stops the execution of a function that was called with setTimeout().
const timeoutID1 = setTimeout(sayHello, 2000);
clearTimeout(timeoutID1); // stops the execution of sayHello()

// clearInterval(): Stops the execution of a function that was called with setInterval().
const intervalID1 = setInterval(sayHi, 1000);
clearInterval(intervalID1); // stops the execution of sayHi()






Timers:

// setTimeout(): Calls a function after a specified number of milliseconds.
function sayHello() {
  console.log('Hello!');
}
setTimeout(sayHello, 2000); // prints "Hello!" after 2 seconds

// clearTimeout(): Stops the execution of a function that was called with setTimeout().
const timeoutID1 = setTimeout(sayHello, 2000);
clearTimeout(timeoutID1); // stops the execution of sayHello()

// setInterval(): Calls a function at specified intervals (in milliseconds).
function sayHi() {
  console.log('Hi!');
}
setInterval(sayHi, 1000); // prints "Hi!" every second

// clearInterval(): Stops the execution of a function that was called with setInterval().
const intervalID1 = setInterval(sayHi, 1000);
clearInterval(intervalID1); // stops the execution of sayHi()






Events:

// addEventListener(): Attaches an event listener to an element.
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// removeEventListener(): Removes an event listener from an element.
function handleClick() {
  console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// stopPropagation(): Stops the propagation of an event through the DOM.
const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
inner.addEventListener('click', (event) => {
  console.log('Inner clicked!');
  event.stopPropagation();
});
outer.addEventListener('click', () => {
  console.log('Outer clicked!');
});

// preventDefault(): Prevents the default action of an event from occurring.
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  console.log('Link clicked!');
  event.preventDefault();
});







Function execution:

// bind(): Creates a new function that, when called, has its 'this' keyword set to a specific value.
const obj = {name: 'John'};
function sayName() {
  console.log(this.name);
}
const boundSayName = sayName.bind(obj);
boundSayName(); // prints "John"

// call(): Calls a function with a given 'this' value and arguments provided individually.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet.call(null, 'John'); // prints "Hello, John!"

// apply(): Calls a function with a given 'this' value and arguments provided as an array.
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet.apply(null, ['John', 30]); // prints "Hello, John! You are 30 years old."







Array manipulation:

// slice(): Returns a portion of an array into a new array.
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4);
console.log(slicedArr); // prints [2, 3, 4]

// splice(): Removes or replaces existing elements and/or adds new elements to an array.
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b', 'c');
console.log(arr); // prints [1, 'a', 'b', 'c', 4, 5]

// concat(): Joins two or more arrays and returns a new array that contains all the elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log(newArr); // prints [1, 2, 3, 4, 5, 6]

// forEach(): Calls a provided function once for each element in an array.
const arr = [1, 2, 3];
arr.forEach((element) => {
  console.log(element);
});

// map(): Creates a new array with the results of calling a provided function on every element in the calling array.
const arr = [1, 2, 3];
const mappedArr = arr.map((element) => {
  return element * 2;
});
console.log(mappedArr); // prints [2, 4, 6]

// filter(): Creates a new array with all elements that pass the test implemented by a provided function.
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((element) => {
  return element % 2 === 0;
});
console.log(filteredArr); // prints [2, 4]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // prints 15

// sort(): Sorts the elements of an array in place.
const arr = [5, 3, 1, 2, 4];
arr.sort();
console.log(arr); // prints [1, 2, 3, 4, 5]

// push(): Adds one or more elements to the end of an array.
const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // prints [1, 2, 3, 4, 5]

// pop(): Removes the last element from an array and returns that element.
const arr = [1, 2, 3];
const poppedElement = arr.pop();
console.log(poppedElement); // prints 3

// shift(): Removes the first element from an array and returns that element.
const arr = [1, 2, 3];
const shiftedElement = arr.shift();
console.log(shiftedElement); // prints 1

// unshift(): Adds one or more elements to the beginning of an array.
const arr = [1, 2, 3];
arr.unshift(4, 5);
console.log(arr); // prints [4, 5, 1, 2, 3]

// join(): joins all elements of an array into a string
const fruits = ["apple", "banana", "kiwi"];
const fruitString = fruits.join(", ");
console.log(fruitString); // "apple, banana, kiwi"

// reverse(): reverses the order of elements in an array
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // ["d", "c", "b", "a"]

// toString(): returns a string representing the array
const numbers = [1, 2, 3, 4, 5];
const numberString = numbers.toString();
console.log(numberString); // "1,2,3,4,5"

// length: returns the number of elements in an array
const colors = ["red", "green", "blue"];
console.log(colors.length); // 3








Object manipulation:

// Object.assign(): copies the values of all enumerable properties from one or more source objects to a target object
const person = { firstName: "John", lastName: "Doe" };
const details = { age: 30, email: "john.doe@example.com" };
const completePerson = Object.assign(person, details);
console.log(completePerson); // {firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com"}

// Object.keys(): returns an array of a given object's own property names
const student = { name: "Alice", grade: "A", age: 20 };
const keys = Object.keys(student);
console.log(keys); // ["name", "grade", "age"]

// Object.values(): returns an array of a given object's own enumerable property values
const ages = { Alice: 20, Bob: 25, Charlie: 30 };
const ageValues = Object.values(ages);
console.log(ageValues); // [20, 25, 30]

// Object.entries(): returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const studentInfo = { name: "Alice", grade: "A", age: 20 };
const entries = Object.entries(studentInfo);
console.log(entries); // [["name", "Alice"], ["grade", "A"], ["age", 20]]

// Array.isArray(): returns true if the argument is an array, false otherwise
const fruits = ["apple", "banana", "kiwi"];
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("apple, banana, kiwi")); // false

// JSON.stringify(): converts a JavaScript object or value to a JSON string
const person = { firstName: "John", lastName: "Doe", age: 30 };
const personJson = JSON.stringify(person);
console.log(personJson); // '{"firstName":"John","lastName":"Doe","age":30}'

// JSON.parse(): converts a JSON string to a JavaScript object
const personObject = JSON.parse(personJson);
console.log(personObject); // {firstName: "John", lastName: "Doe", age: 30}








// Promise.all()
// Definition: Returns a promise that resolves with an array of values of all the promises in the iterable object passed as an argument.
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
Promise.all(promises).then((values) => {
  console.log(values); // Output: [1, 2, 3]
});

// Promise.race()
// Definition: Returns a promise that resolves or rejects as soon as one of the promises in the iterable object passed as an argument resolves or rejects.
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "one"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "two"));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Output: "one"
});

// Promise.resolve()
// Definition: Returns a Promise object that is resolved with a given value.
const promise3 = Promise.resolve(3);

promise3.then((value) => {
  console.log(value); // Output: 3
});

// Promise.reject()
// Definition: Returns a Promise object that is rejected with a given reason.
const promise4 = Promise.reject(new Error("Failed"));

promise4.catch((error) => {
  console.log(error.message); // Output: "Failed"
});

// then()
// Definition: Attaches a callback function to the promise object that gets called when the promise object is resolved.
const promise5 = Promise.resolve(5);

promise5.then((value) => {
  console.log(value); // Output: 5
});

// catch()
// Definition: Attaches a callback function to the promise object that gets called when the promise object is rejected.
const promise6 = Promise.reject(new Error("Failed"));

promise6.catch((error) => {
  console.log(error.message); // Output: "Failed"
});

// finally()
// Definition: Attaches a callback function to the promise object that gets called whether the promise object is resolved or rejected.
const promise7 = Promise.resolve(7);

promise7.finally(() => {
  console.log("Promise completed"); // Output: "Promise completed"
});










HTTP Requests:

// fetch()

// Definition: The fetch() method is used to send a request to a server and receive a response. It returns a promise that resolves to the response object.
// Example:
fetch('https://api.example.com/data')
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// fetch().then()

// Definition: The then() method is used to handle the response from a fetch() call, after it has resolved. It takes one or two callbacks, the first to handle a successful response, and the second to handle an error response.
// Example:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// fetch().catch()

// Definition: The catch() method is used to handle errors that occur during a fetch() call. It takes a callback function that is passed an error object.
// Example:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Response.json()

// Definition: The json() method is used to extract the JSON body content from a Response object. It returns a promise that resolves to the parsed JSON data.
// Example:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Request()

// Definition: The Request() constructor is used to create a new request object, which can then be passed to the fetch() method to initiate a network request.
// Example:
const myRequest = new Request('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
});

// Request.method, Request.headers, Request.body, Request.params, Request.url

// Definition: These are properties of a Request object that contain information about the request, such as the HTTP method, headers, body, parameters, and URL.
// Example:
const myRequest = new Request('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
});

console.log('Method:', myRequest.method);
console.log('Headers:', myRequest.headers);
console.log('Body:', myRequest.body);
console.log('Params:', myRequest.params);
console.log('URL:', myRequest.url);

// Response()

// Definition: The Response() constructor is used to create a new response object, which can then be returned from a fetch() call to simulate a network response.
// Example:
const myResponse = new Response(JSON.stringify({
  key1: 'value1',
  key2: 'value2'
}), {
  status: 200,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response.body, Response.headers, Response.status, Response.statusText

// Definition: These are properties of a Response object that contain information about the response, such as the response body, headers, status









XMLHttpRequest:

XMLHttpRequest()

// Definition: 
// The XMLHttpRequest (XHR) object is used to interact with servers. It can retrieve data from a URL without having to do a full page refresh.
// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onload = function() {
  if (this.status === 200) {
    console.log(JSON.parse(this.responseText));
  }
}

xhr.send();


XMLHttpRequest.open()

// Definition:
// The open() method of the XMLHttpRequest object initializes a newly-created request, or re-initializes an existing one.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();


XMLHttpRequest.setRequestHeader()

// Definition:
// The setRequestHeader() method of the XMLHttpRequest object sets the value of an HTTP request header.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();


XMLHttpRequest.send()

// Definition:
// The send() method of the XMLHttpRequest object sends the request to the server.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();


XMLHttpRequest.onreadystatechange

// Definition:
// The onreadystatechange property of the XMLHttpRequest object is a JavaScript function that is called whenever the readyState property changes.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
  }
};

xhr.send();


XMLHttpRequest.readyState

// Definition:
// The readyState property of the XMLHttpRequest object holds the status of the XMLHttpRequest object.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();

console.log(xhr.readyState); // Output: 1


XMLHttpRequest.status

// Definition:
// The status property of the XMLHttpRequest object holds the HTTP status code returned by the server.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onload = function() {
  console.log(this.status); // Output: 200
}

xhr.send();


XMLHttpRequest.responseText

// Definition:
// The responseText property of the XMLHttpRequest object holds the response from the server as a string.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onload = function() {
  console.log(this.responseText); // Output: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}
}

xhr.send();


XMLHttpRequest.responseXML

// Definition:
// The responseXML property of the XMLHttpRequest object holds the response from the server as an XML document.

// Example:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.w3schools.com/xml/note.xml', true);

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseXML.getElementsByTagName('to')[0].childNodes[0].nodeValue); // Output: Tove
  }
}

xhr.send();


XMLHttpRequest.timeout

// Definition:
// The timeout property of the XMLHttpRequest object specifies a time limit for the request in milliseconds.

// Example:

var request = new XMLHttpRequest();
request.timeout = 3000;


// XMLHttpRequest.ontimeout:

// Definition: The ontimeout property sets the function to be called when a request times out.

// Example:

var request = new XMLHttpRequest();
request.timeout = 3000;
request.ontimeout = function() {
  console.log("The request timed out.");
};


// XMLHttpRequest.abort():

// Definition: The abort() method aborts the current request.

// Example:

var request = new XMLHttpRequest();
request.open('GET', 'https://api.example.com/data');
request.send();
// Abort the request after 3 seconds
setTimeout(function() {
  request.abort();
}, 3000);


// XMLHttpRequest.getAllResponseHeaders():

// Definition: The getAllResponseHeaders() method returns all the response headers, separated by CRLF, as a string.
// Example:

var request = new XMLHttpRequest();
request.open('GET', 'https://api.example.com/data');
request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(request.getAllResponseHeaders());
  }
};
request.send();
