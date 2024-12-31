const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};
const obj2 = {
    ...obj,
    data2: 20,
};
/**
 * 비구조 할당(구조분해)
 */
// const data1 = obj.data1;
// const data2 = obj.data2; 이 두 줄은 밑의 한 줄과 같다.
const {data1:d1, data2:d2} = obj;   // 객체는 { } 로 표현
console.log(d1 ,d2);

const nums = [1, 2, 3, 4, 5];       // 배열은 [ ] 로 표현
const [n1, n2, n3] = nums;
console.log(n1, n2, n3);

const { data1: dd1, ...obj3 } = obj; // 여기에서의 ... >> Rest
console.log(obj3)
const [n4, n5, ...newNums] = nums;
console.log(newNums)