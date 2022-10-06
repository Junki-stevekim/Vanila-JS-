### Functions
---
- Objects 안에서의 function
```javascript
const player ={
    name="Junki",
    sayHello=function(otherPersonsName){
        console.log("hello!"+otehrPersonNAME);
    }
}

console.log(player.name);
player.sayHello("lynn");
```
---
### Returns
---
- function안에서 return과 추가작업을 입력하면
return만 작업하고 추가 수행은 이뤄지지 않는다.
만약 return 앞에 기타작업이 있다면 이 작업은 수행된다.
즉, return"까지만" 수행된다!
---
### Conditionals
---
- KeyWord -> IF,ELSE
---

- 조건문은  true false 여부를 알려주기때문에 매우 중요한 문법이다.
- 무엇인가를 확인할때 대부분 사용.

### 예제 - 나이계산기 만들어보기.


1. 유저의 나이를 묻는것부터 시작해보자

```javascript

const age = prompt("How Old Are You?");

prompt 함수는 굉장히 old한 function이다.
브라우저 안에서 javascript를 일시정지시킨다.
유저에게 값을 물어보는 아주아주 오래된방법.
현재는 거의 사용하지않는다.
```

```javascript

console.log(typeof age);

typeof -> 변수의 value를 확인하는 방법 in javascript
```

```javascript

isNaN(); ->숫자인지 아닌지 판별해주는 function
boolean 값을 return 해준다.
```

### IF문의 기본구조.

```javascript

if(condition){
    condition === true 일때 실행
}else{
    condition ===false 일때 실행
}
```

---