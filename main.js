process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

console.log('덧셈 = ' + process.argv[2] + process.argv[4]);

console.log('뺼셈 = ' + process.argv[2] - process.argv[4]);

console.log('곱셈 = ' + process.argv[2] * process.argv[4]);

console.log('나눗셈 = ' +  process.argv[2] / process.argv[4]);

console.log('나머지 = ' +  process.argv[2] % process.argv[4]);

// function add(a, b, callback){
//     var result = a b;
//     callback(result);
// }

// add(process.argv[2], process.argv[4], function(result){
//     console.log('더하기 : ', result);
// });


