// process.argv를 사용하면 배열로 파라미터가 담긴다.
let argv = process.argv;
let number_argv = argv.map(function(item){
    return parseInt(item, 10);
});

// console.log(argv);
// console.log(number_argv);

if (argv[3] == '+') {
    console.log(number_argv[2] + number_argv[4]);
} else if (argv[3] == '-') {
    console.log(number_argv[2] - number_argv[4]);
} else if (argv[3] == '*') {
    console.log(number_argv[2] * number_argv[4]);
} else if (argv[3] == '/') {
    console.log(number_argv[2] / number_argv[4]);
} else if (argv[3] == '%') {
    console.log(number_argv[2] % number_argv[4]);
} else {
    console.log('실행 인자를 입력해 주세요. {n} {연산자} {n}');
}