// readline 사용하기
let score = []; // 입력받은 점수
let result = 0;

let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    score.push(line);

    // -1을 입력하면 종료
    if(line == '-1') {
        reader.close();
        process.exit();
    }
});

reader.on('close', () => {
    for(i = 0; i < score.length; i++) {
        result += parseInt(score[i], 10);
    }

    result = result / i; // 평균 구하기

    console.log("결과" + result);

    reader.close();
    process.exit();
});

