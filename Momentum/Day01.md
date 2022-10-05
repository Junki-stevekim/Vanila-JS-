## Day 01~Day03
> Nomard corder 수업공부내용
---
1. JS의 사용하는 자료형에 대해 공부(숫자,  문자형)
2. 문자형(String) 은 '' 또는 ""로 처리.
   
```javascript
console.log("Hi" +"My name is" ~~)

```

#### Variables   

- Const : 변하지 않는 변수.
- let : let은 const와 다르게 값을 변경할수있음.
- var: 재할당,재사용이 항시 가능한 변수

***

** 주로 JS에선 const값의 변수를 정의해서 사용하나,변수의 값을 변경할 계획이 있으면 let 변수를 사용**

```javascript
let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능
```
---
## Booleans
---
- 매우 간단한 변수.
  - true or false
```javascript
const amIFat = true;
console.log(amIFat);
```
또 다른 값으로는 null, undefined가 있다.
1. null: 변수에 null(값이없다)가 할당. 즉 정의된 변수.
2. undefined: 변수는 선언했지만, 값을 할당하지는 않은상태. 정의되지않음.



