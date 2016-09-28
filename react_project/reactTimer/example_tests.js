//npm install --save expect
// https://github.com/mjackson/expect

console.log("Starting Tests");

function add(a, b) {
    return a + b;
}

expect(add(3, 5)).toBe(8);
console.log("All tests have passed");

function capitalize(word) {
    if (!word || !typeof('string')) {
        word = ''
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}
expect(capitalize('hello')).toBe('Hello');
console.log('Passed as Hello')
expect(capitalize('hello')).toBeA('string', 'Hello');
console.log('Passed as a string');
expect(capitalize()).toBe('');
console.log('Passed as an empty string');