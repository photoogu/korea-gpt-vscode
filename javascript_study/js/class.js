class User {
    username;
    password;
    name;
    email;
    
    // 생성자 : 클래스 명이 아닌, "constructor" 키워드를 사용
    constructor(username = null, password = null, name = null, email = null) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    toString() {
        return `User = {username: ${this.username}, password: ${this.password}}`
    }
}

const user = new User("aaa", "1234");
console.log(user.toString());