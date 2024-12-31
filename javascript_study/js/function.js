fx1(); // 호이스팅!

function fx1() {
    console.log("fx1 호출")
}

function fx2 (num1, num2) {         // 타입 선언 X
    console.log(num1 + num2);
}

fx2(); // NaN    =>  매개변수 안넣어도 실행은 됨.
fx2(10); // NaN  =>  숫자 + undefined = X (숫자가 아님)
fx2(10, 20); // 30
fx2(10, 20, 30); // 30   => 매개변수의 개수를 맞추지 않아도 됨

function fx2 (num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
fx2(10, 20, 30); // 60
fx2(10, 20); // NaN         Overloading 개념이 존재하지 않음. 무조건 재정의! 따라서 숫자 + 숫자 + undefined 는 되지 않음.

function fx2 (num1, num2, num3=0) {         // default 값을 넣어두면 위의 문제가 발생하지 않음.
    console.log(num1 + (num2 ?? 0) + num3); // 연산자로 default 값 지정 가능, 단 연산 우선 순위 주의!! () 꼭 넣기
}
fx2(10, 20, 30); // 60
fx2(10, 20);     // 30
fx2(10);         // 10

const num1 = 20;
function fx3 () {
    return num1;    // 전역 변수를 메서드 내에서 사용 가능
}
console.log(fx3());

function fx4() {
    console.log("fx4 호출");
    
    function fx5() {                // Java에서는 함수 내에 함수 정의 X(람다, 익명 클래스 등을 사용하면 가능하긴 함)
        console.log("fx5 호출");    // 하지만, JS 에서는 함수 내에 함수 정의가 가능! (python도 가능)
    }

    fx5();
}
const fx6 = fx4;
fx6();          // 함수의 주소값을 변수에 담을 수 있다. => 함수도 하나의 객체(Object)로 판단

function fx11() {
    console.log("fx11 호출");
}
function fx12() {
    console.log("fx12 호출");
}
function fx13() {
    console.log("fx13 호출");
}

const fxArray = [fx11, fx12, fx13];  // 배열 안에 함수 넣을 수 있다.  배열 안에서 함수 정의도 가능
console.log(fxArray); // [ [Function: fx11], [Function: fx12], [Function: fx13] ]

for(let fx of fxArray) {    // fx11 호출
    fx();                   // fx12 호출
}                           // fx13 호출      <= 출력 결과

// callback 함수 : 함수 안의 매개변수로 함수를 갖는 함수
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}

run(add); // 30
run(sub); // -10

/**
 * 화살표 함수 (at Java: ->  ,   at JavaScript: =>  )
 * Java : 인터페이스
 * JavaScript : 함수 자체
 */
function fx(arg1, arg2) {
    return "리턴";
}
fx(1, 2);

const arrowFx = (arg1, arg2) => {
    return "리턴";
}
fx(3, 4);

const arrowFx2 = arg1 => arg1 + 1;
fx2(10);

function run(fx) {
    fx();
}
run(() => console.log("test"));