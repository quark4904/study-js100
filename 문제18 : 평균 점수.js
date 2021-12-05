// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요.
// **단, 소숫점 자리는 모두 버립니다.**

// **입출력**

// 입력 : 20 30 40
// 출력 : 30

// Method 1 - for
const averageScore = (arr) => {
  let sum = Number(""); // let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
};

// Method 2 - forEach
const averageScore = (arr) => {
  let sum = Number();
  arr.forEach((e) => {
    sum += e;
  });
  return Math.floor(sum / arr.length);
};

// Method 3 - for...of
const averageScore = (arr) => {
  let sum = Number("");
  for (let i of arr) {
    sum += i;
  }
  return Math.floor(sum / arr.length);
};

// Answer
const scores = prompt("세 과목의 점수를 입력하세요.").split(" "); // string 형태로 입력을 받는다고 가정하는구나
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
