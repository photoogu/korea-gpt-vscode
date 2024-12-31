/**
 * 연산자
 * 
 * 산술연산자
 * +, -, *, /, %, **(제곱)
 */
console.log(5 ** 2);  // 25

/**
 * 증감연산자
 * ++, --
 * 
 * 비교연산자
 * <, <=, >, >=, ==, !=, ===, !==
 * javascript의 특징은 기본적으로 변수의 타입이 정해지지 않음
 */

console.log(1 == 1);
console.log(1 == "1");      // true   타입 검사 X
console.log(1 === "1");     // false  타입 검사 O ----> js 에서는 주로 ===, !== 를 사용
console.log(1 != "1");      // false  타입 검사 X
console.log(1 !== "1");     // true   타입 검사 O

/**
 * 논리연산자
 * &&, ||
 * 
 * 단축 평가
 * 논리 자료 값 || anything
 * 논리 자료 값 === true       => return : true
 * 논리 자료 값 === false      => return : anything
 * 논리 자료 값 && anything
 * 논리 자료 값 === true       => return : anything
 * 논리 자료 값 !== false      => return : false
 * 
 * null 병합 연산
 * anything1 ?? anything2
 * 좌항(anything1) === null || 좌항(anything1) === undefined    => 우항(anything2)
 * 좌항(anything1) !== null || 좌항(anything1) !== undefined    => 좌항(anything1)
 */
console.log(1 === 1 || "김영경");
console.log(1 !== 1 || "김영경");
console.log(1 === 1 && "김영경");
console.log(1 !== 1 && "김영경");

console.log(null ?? "김영경");     // 김영경
console.log("김연경" ?? "김영경");  // 김연경

/**
 * Not 연산
 * ! (!"" = true), !! (!!"" = false)
 */
console.log("--------Not 연산--------");
console.log(!"");       // true
console.log(!0);        // true     => 즉, 값이 비어있으면 false
console.log(!null);     // true
console.log(!undefined);// true
console.log(![]);       // false    => 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []); // object   
console.log(![].length);// true

var name = "김영경";
if(!name) {
    console.log("이름이 비었습니다.");
}
if(!!name) {
    console.log("이름이 비어있지 않습니다.");
}