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

```
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