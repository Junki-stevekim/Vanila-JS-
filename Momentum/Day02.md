## Objects
---
1.  게임 캐릭터를 예로 들어보자

Objects 개념이 없다면 우리는
```
const playerName ="Junki";
const playerPoints =12121212;
const playerHandsome =false;
```
등과 같이 정의할것이다.

하지만 
```
player.name
player.points
player.handsome
```
등으로 코드를 정리하는것이 더욱 간결하고 가독성이 좋은 코드가 될것이다.

이렇듯  객채(Objects)라는 JS에서의 개념은 
**설명이 필요한 정보가 담긴 데이터리스트**라고 정의할수있다.

```javascript
const player ={
    name:"junki",
    points:10,
    fat:true
};

console.log(player.name);
console.log(player.points);
```

와 같이 간결하고 가독성좋게 코드를작성할수있다. 또한 값을 업데이트 할수 있다.
```
player.fat =false;
```
---
## Functions
---
- Function 이란, 반복해서 사용하는 코드 조각이라고 생각하자.
- 어떠한 코드를 캡슐화해서  실행을 여러번 할수있게 도와준다.
```javascript
function sayHello(){
    중괄호안에 실행문이 계속해서 실행.
}

sayhello(); -> 실행문!
```
--- 

- argument -> function을 실행하는 동안 어떠한 정보를 function 에 전달하는방법
```javascript
데이터를 전송하는법

function sayHello(변수명){
    console.log(변수명)
}

sayHello("변수명");
```

이처럼 JS에서는  첫번째 argument로  변수명이 들어오게되면, 그 이름을 받게된다. 이것은 하나의 변수만을 받을수있는것은 아니며, 한개의 변수를 더 받을수있다.
```javascript
ex) function sayHello(변수명,변수명){

}

sayHello("첫번째변수명",두번째변수);
```
---
```javascript
function sayHello(nameOfPerson, age){
    console.log("Hello my Name is" + nameOfPerson + "and I am" + age)
}

sayHello("Junki",31); -> Junki와 31이라는 정보를 전달

=> 결과값

"Hello my Nama is Junki and I am 31"
```


***정보를 받는 변수명은 필요에 의해 작명하면되지만, 정보를 전달 하는 변수들은 순서에 맞게 정의해야함을 항상 기억하자***

---

