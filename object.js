// 1. Create an object with some properties
const myObject = {
    name: 'john doe',
    age: 30,
    gender: 'male',
    job: 'builder',
};

// 2. Create a copy of the object
const myObjectCopy = { ...myObject };

// Modify some properties of the copy
myObjectCopy.age = 31;
myObjectCopy.occupation = 'Designer';

// Iterate through the object and output the key-value pairs

// Using a for...in loop
for (let key in myObjectCopy) {
    console.log(`${key}: ${myObjectCopy[key]}`);
}

// Using Object.entries() method
Object.entries(myObjectCopy).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// pros and cons of using for in loop
// pros: it is easy to use
// cons: it is not safe to use

// pros and cons of using Object.entries() method
// pros: it is safe to use and used with other methods like forEach, map, filter, reduce, etc.
// cons: it is not easy to use
