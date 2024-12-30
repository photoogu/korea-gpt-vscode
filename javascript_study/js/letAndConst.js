var a = 10;
console.log(a);
var a = 20;
console.log(a); // 재선언이 가능?? => var 키워드때문
console.log(b); // b 선언 전에 undefined로 출력이 됨 => 호이스팅
var b = 30;
console.log(b);
/**
 * 호이스팅
 * 선언과 정의가 먼저 실행되는 현상
 */

let c = "c data";       // 일반 변수
console.log(c);
// let c = "c2 data";
c = "c2 data";
console.log(c);

// console.log(c1);     // let 변수는 재선언, 호이스팅 불가능
// let c1 = 10;

const d = "d data";     // 상수
console.log(d);