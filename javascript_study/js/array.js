/** 
 * 배열
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // const - 주소를 고정! 내부 데이터는 변경 가능
console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for(let num of numbers) { // for-each문 (향상된 for문)
    console.log(num);
}
numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers);
console.log(numbers.pop());                     // 10   => array는 스택구조, pop은 마지막 값을 반환받고 해당 값을 배열에서 삭제
console.log(numbers.includes(5));               // true => 값을 포함하고 있는지 확인(contains)
console.log(numbers.indexOf(5));                // 4    => 값의 위치(index)
console.log(numbers.lastIndexOf(4));            // 3    => 뒤에서부터 값의 위치(index)
console.log(numbers.concat([11, 12, 13, 14, 15]));  // 두 배열의 병합하여 새로운 배열을 생성(numbers에 적용되는 게 아님!)
console.log(numbers);                           
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers);
const newNumbers2 = [ ...numbers, 11, 12, 13, 14, 15];      // concat과 동일한 연산, 주로 사용됨.
console.log(newNumbers2);
const newNumbers3 = numbers.slice(0, 5);
console.log(newNumbers3);   // [ 1, 2, 3, 4, 5 ]
const newNumbers3_1 = numbers.slice(5);
console.log(newNumbers3_1);   // [ 6, 7, 8, 9 ]

// 배열에서 특정 인덱스의 데이터 삭제하기 방법 1 - slice
const newNumbers4 = numbers
.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1))      // javascript에서는 ; 생략 가능
console.log(newNumbers4);

const newNumbers5 = numbers.splice(3, 1);    // 제거하고자 하는 인덱스(3)의 시작 위치에서 개수(1)만큼 해당 배열에서 삭제 후 반환
console.log(newNumbers5);   // [4]
console.log(numbers);       // [1, 2, 3, 5, 6, 7, 8, 9]

const newNumbers6 = numbers.splice(4, 2, 11, 12); // 위와 같이 제거한 후, 해당 위치에 각 값(11, 12)을 새로 추가하여 배열 반환 후 제거한 값 반환
console.log(newNumbers6);   // [6, 7]
console.log(numbers);       // [1, 2, 3, 4, 5, 11, 12, 8, 9]

numbers.splice(4, 0, 20, 21);   // 0개 지움 => 제거를 하지 않고, 해당 인덱스 위치에 값을 추가하기만 함
console.log(numbers);           // [1, 2, 3, 5, 20, 21, 11, 12, 8, 9]