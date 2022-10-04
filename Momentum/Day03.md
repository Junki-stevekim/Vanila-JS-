### Functions
---
- Objects 안에서의 function
```
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
