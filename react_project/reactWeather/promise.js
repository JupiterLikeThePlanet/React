// function basicPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("s'alright");
//             reject('location missing');
//         }, 2000);
//     });
// }
//
// basicPromise('Los Angeles').then(function(temp) {
//     console.log('Success! ', temp);
// }, function (err) {
//     console.log('ERROR HERE! ', err);
// });


// basicPromise('Los Angeles').then('76')


function addition (a , b) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number' ) {resolve(a + b)}
            else { reject('ERROR OVER HEEEEERE.  Type in numbers')}
        }, 2000);
    })
}

addition('a', 2).then(function(sum) {
        console.log('Success', sum);
    }, function(err) {
        console.log('Error', err);
    });


