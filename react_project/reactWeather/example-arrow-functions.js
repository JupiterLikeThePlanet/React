var names = ['Andrew', 'Julie', 'Jen']

// names.forEach(function(name){
//     console.log('forEach', name);
// });
//
// // ES6 arrow functions
// names.forEach((name) => {
//     console.log('arrow func', name);
// });
//
// // or
//
// names.forEach((name) => console.log(name)); // automatically returns the value
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Jupiter'))

//// anon funcs have a binding with current function, arrow funcs bind with their parents

// var person = {
//     name: 'Jupiter',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// person.greet();

function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b
};

var addExpression = (a, b) => a + b ;


// good to use for the this binding of parent