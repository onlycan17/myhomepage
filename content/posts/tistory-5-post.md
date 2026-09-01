---
title: "타입 스크립트 기본 문법"
date: '2022-12-05'
tags: []
description: "타입 스크립트는 다른 프로그래밍 언어와 달리 변수 뒤에 : 을 입력 후 타입을 쓴 후 값을 저장하는 방식으로 작성한다. const name : string = '홍길동' let age : number = 22 let c : boole"
---

타입 스크립트는 다른 프로그래밍 언어와 달리 변수 뒤에  : 을 입력 후 타입을  쓴 후 값을 저장하는 방식으로 작성한다. 

```
const name : string = "홍길동" 
let age : number = 22
let c : boolean = true

let d : string[] = ["111", "test"]
let e :number[] = [123, 245]

let f  = "test string"
```

Optional -> 해당 변수를 사용할 수도 있고 사용하지 않을 수도 있을 때 사용한다.(어떠한 오브젝트를 선언하거나 클래스 생성 및 함수를 호출할때 해당 파라미터 및 변수의 값을 넣지 않아도 작동하고 넣어 줘도 동일하고 작동하는 코드를 짜고 싶을 때 사용 한다.)

```
const player : {
    name: string,
    age?:number
} = {
    name: "test name"
}
```

위에 소스처럼 변수 바로 뒤에 ?를 붙여주면 해당 변수가 optional이 되면서 해당 변수를 선언하고 값을 넣어도 되고 하지 않아도 되는 형태로 사용 할 수 있다. 

또한 Type Alias 를 사용해서 객체 타입 및 함수 타입을 관리 할 수 있는데 

```
type Player = {
    name: string,
    age?:number
}

function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const testName = playerMaker1("test name")
testName.age = 12
```

위에 소스처럼 함수를 선언하고 맨위에 정의된 타입을 리턴타입으로 정의했을때 age는 사용해도 되고 하지 않아도 된다. 함수 호출 후 해당 리턴받은 변수에 다시 .age에 값을 대입시켜줘도 문법적으로 이상 없다. 

```
if(player.age && player.age < 10) {
}
```

Optional 변수는 할당이 되지 않는 경우의 수를 항상 염두하고 있어야 하기 때문에 위애 코드에서 처럼 값의 여부를 항상 체크하며 써야 한다.

타입스크립트는 readonly 키워드를 사용할 수 있는데 해당 키워드와 함께 변수를 선언하면 해당 초기화 이후에 다른 값을 넣을 수 없도록 막아주는 역활을 한다. 

```
type Player = {
    readonly name:string
    age?:number
}

const playerMaker = (name: string): Player => ({name})

const nico = playerMaker("nico")
nico.name = "aa" // 타입스크립트에서 에러 발생시킴
```

또한 아래와 같이 정해진 개수와 순서에 따라서 배열을 선언 할 수 있는데 이것을 Tuple 이라고 한다.

```
const player: [string, number, boolean] = ["nico", 1, true]
```

타입스크립트를 사용하다고 어떤 상황으로해 타입스크립트 기능을 꺼야 될 경우 any를 붙이면 되는데... 좋은 코딩을 한다면 이걸 쓸 일이 없을 듯 하지만 알아는 두도록 하자. 

```
const a : any[] = [1,2,3,4]
const b : any = true
```

프로그래밍을 짜다가 어떠한 변수를 선언하게 되었는데 해당 타입을 모를 경우 unkown이라는 키워드를 사용할 수 있다. 

```
let a:unknown;

if(typeof a === 'number'){
 let b = a+1; // 만약 if문 없이 해당 값만 넣으려고 하면 타입스크립트에 의해 에러가 발생한다. unknown을 입력하면 다음과같이 타입을 체크해야 한다.
}
```

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입스크립트를 써야 하는 이유?](https://onlycan17.tistory.com/2)(0)| 2022.12.02

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/5)에 처음 게시(2022-12-05)된 글입니다.
