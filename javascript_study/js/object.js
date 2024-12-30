/**
 * 객체
 * const obj = { key: value }
 */

const obj = {
    name: "김영경",
    age: 25,                        // this.name != obj.name   >>  헷갈리지 말 것!
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), // tab 키 위 `
}

obj.print();

const obj2 = {
    name: "김영경",
    age: 25,                       
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

console.log (obj === obj2); // false  => 내용이 동일해도, 다른 객체임
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true
console.log(JSON.stringify(obj));                          // {"name":"김영경","age":25} 
console.log(typeof JSON.stringify(obj));                   // string 

/**
 * object -> Json  JSON.stringfy(object)
 * Json -> object  JSON.parse(json문자열)
 * 
 * User 객체 생성
 * username, password, name, email
 */

const user = {
    username: "abc",
    password: "1234",
    name: "김영경",
    email: "abc@gmail.com",
}

console.log(JSON.stringify(user)); // {"username":"abc","password":"1234","name":"김영경","email":"abc@gmail.com"}
console.log(JSON.parse('{"username":"abc","password":"1234","name":"김영경","email":"abc@gmail.com"}'));

const user1 = {
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    address: {
        si: "부산시",
        gungu: "부산진구",
    },
}
user1.username = "junil";
user1.password = 1234;
user1.name = "김준일";
user1.email = "junil@gmail.com";

const userJson = JSON.stringify(user1);
console.log(user1);
console.log(userJson);
console.log(user1.username);        // junil
// console.log(userJson.username);   >> X undefined, JSON은 문자열이기 때문에 그에 맞는 함수를 사용해야함

const convertUser = JSON.parse(userJson);
console.log(convertUser.username);  // junil

const user2 = {
    printUserInfo: () => console.log("사용자 정보 출력"),
}
const user2Json = JSON.stringify(user2);
console.log(user2);     // { printUserInfo: [Function: printUserInfo] }
console.log(user2Json)  // {} >> Function이 사라짐!     >>    JSON으로 변환할 때 key:value 만 담을 수 있음. 이때, value가 function이면 변환 X


const student = {
    name: "김영경",
    age: 25,
    address: "부산 연제구",
//    name:  "김양갱",
}

// console.log(student); // { name: '김양갱', age: 25, address: '부산 연제구' } >> 덮어써버린다
// 이를 어떻게 활용하느냐

const students2 = {
    ...student,
    name: "김양갱",
}
console.log(students2); // { name: '김양갱', age: 25, address: '부산 연제구' }

const key = "age";
const value = 32;

const student3 = {
    ...student,
    [key]: value,
}
console.log(student3); // { name: '김영경', age: 32, address: '부산 연제구' }