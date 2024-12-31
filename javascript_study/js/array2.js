const user1 = {
    username: "aaa",
    password: "1234",
}
const user2 = {
    username: "bbb",
    password: "1234",
}
const user3 = {
    username: "ccc",
    password: "1234",
}

const users = [user1, user2, user3];
const usersInfoString = users.map(user => `사용자명: ${user.username}, 비밀번호: ${user.password}`);
console.log(usersInfoString[0]);
// 실무에서 사용하는 방법
const userComponents = users.map(user =>
    `   
        <label>사용자이름</label>
        <div>${user.username}</div>
        <label>비밀번호</label>
        <div>${user.password}</div>
    `
).join("");
console.log(userComponents);

const users2 = users.filter(user => user.username !== "bbb");
console.log(users2);

/**
 * bbb -> ddd
 * ccc -> 제거
 */
// ====== 내 풀이 ======
// users.forEach(user => {
//     if (user.username === "bbb") {
//         user.username = "ddd";
//     }
// });
// const users3 = users.filter(user => user.username !== "ccc");
// console.log(users3);

// 풀이
const users4 = users.map(user => {
    if(user.username === "bbb") {
        return {
            username: "ddd",
            password: "1234",
        }
    }
    return user;
}).filter(user => user.username !== "ccc");
console.log(users4);

const users5 = users.map(user => {
    if(user.username === "bbb") {
        return {
            ...user,
            username: "ddd",
        };
    }
    return user;
}).filter(user => user.username !== "ccc");
console.log(users5);

const nums = [1, 2, 3, 4, 5];
const nums2 = nums.map(n => n * 2);
const nums3 = nums.map(n => 0);
const nums4 = nums.map(n => {
    if(n%2 === 0) {
        return n*2;
    }
    return n;
})
console.log(`${nums} ===> ${nums4}`); // 1,2,3,4,5 ===> 1,4,3,8,5
/**
 * nums2 : [1, 2, 3, 4, 5]  =>  [2, 4, 6, 8, 10]
 * nums3 : [1, 2, 3, 4, 5]  =>  [0, 0, 0, 0, 0]
 * nums4 : [1, 2, 3, 4, 5]  =>  [1, 4, 3, 8, 5]
 */