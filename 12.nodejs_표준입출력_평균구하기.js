// readline 사용하기
let score = [];
let result = 0;

let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    score.push(line); // 입력받은 점수

    // -1을 입력하고 과목의 개수가 2개 이상일 때 평균 구하기
    if(line === '-1' && score.length > 1) {
        score.splice(-1, 1); // -1이 배열에 들어가기 때문에 마지막 배열값 삭제
        reader.close();
        process.exit();
    } else if(line === '-1' && score.length < 2) { // -1을 입력하고 과목의 개수가 2개 미만일 때 문구 나타나기
        console.log('2개 이상의 과목을 입력해야 전체 평균을 구할 수 있습니다.');
        process.exit();
    } else if(isNaN(line) === true) {
        console.log('점수는 숫자만 입력해 주세요.');
        process.exit();
    }
});

reader.on('close', () => {
    for(i = 0; i < score.length; i++) {
        result += parseInt(score[i], 10); // 전체 점수 더하기
    }
    result = result / i; // 평균 구하기

    console.log("평균 = " + result);
    process.exit();
});