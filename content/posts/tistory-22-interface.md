---
title: "타입스크립트의 인터페이스(interface)"
date: '2022-12-08'
tags:
  - typescript
description: "먼저 타입스크립트에 타입과 인터페이스가 어떻게 같고 다른지를 먼저 이해하고 인터페이스를 들어가 보도록 하겠다. type NickName = string type Health = number type Friends = Array<str"
---

먼저 타입스크립트에 타입과 인터페이스가 어떻게 같고 다른지를 먼저 이해하고 인터페이스를 들어가 보도록 하겠다. 

```
type NickName = string
type Health = number
type Friends = Array<string>

type Player = {
	nickname:string,
    healthBar: number,
    //nickname:Nickname,
    //healthBar:Health
}

const nico : Player = {
	nickname:"nico",
    healthBar:10
}

type Food = string;

const kimchi : Food = "delicious"
```

다음 소스코드는 타입에 대해서 다양하게 활용이 가능함을 보여주기위한 소스 코드이다. 

타입은 사용자가 만들고 싶은 무수히 많은 종류의 타입을 정의하고 만들 수 있다. 

심지어 타입은 지정된 옵션(마치 enum 타입처럼)으로만 제한 할 수도 있다. 

```
type Team = "read" | "blue" | "yellow"

type Health = 1 | 5 | 10

type Player = {
	nickname:string,
    team: Team,
    health: Health
}

const nico : Player = {
	nickname: "nico",
    team : "read" // "pink" 와 같이 타입옵션에 정의되어 있지 않은 string은 사용할 수 없음
}
```

어떠한 값을 타입에 가질 수 있도록 할 수도 있는데, 특정 값을 주고 해당 타입에 다음 값들만 입력하도록 제한을 걸 수도 있다. 

이처럼 타입은 다양한 방면에서 여러가지 모양으로 활용해서 쓸 수 있는 녀석이다. 

반면에 interface는 오브젝트만을 정의할 수 있는 녀석인데 타입과 쓰는 모양이 조금 다르다

```
interface Player {
	nickname:string,
    team:Team,
    health: Health
}
```

다음과 같은 모양을 가지고 있고 오직 오브젝트를 정의하기 위해서만 사용을 한다는 차이점이 있다. 지금까지만 보면 타입을 쓰는게 더 효율적이라고 생각할 수 있을 것인데, 또 다른 차이점을 확인해 보자. 

```
interface User{
	name:string
}

interface Player extends User {}

const nico : Player = {
	name: "nico"
}
```

인터페이스는 클래스와 모양이 닯은 것을 볼 수 있다. 또한 인터페이스끼리 상속을 받아서 활용할 수 있는 것을 볼 수 있는데, 그렇다면 타입에서는 상속을 없는걸까? 있다! 

```
type User = {
	name:string
}

type Player = User & {
}

const nico : Player = {
	name:"nico"
}
```

이 둘의 소스는 똑같이 동작을 한다. 그런데 모양이 다르게 생겼다. 기존에 객체지향프로그래밍을 어느정도 배운 사람이라면 insterface 모양이 더 친근감이 갈 것이다.  이 글을 작성하는 나도 전자가 더 친숙하다. 

또한 interface는 class와 더욱 친숙하게 사용이 가능한데 만약 오브젝트로 정의를 해야 한다면 type보다는 interface를 쓰는 것이 개인적인 판단으로는 더 좋아 보인다. 

특히 프로그래밍이 객체지향프로그래밍의 컨셉으로 설계되어 프로그래밍을 한다면 더더욱 interface를 활용하는 것이 좋을 것이다. 

그리고 인터페이스는 다음과 같이 사용 할 수 있는데 

```
interface Firstname{
    firstname: "kim"
}

interface Lastname extends Firstname{
    lastname:"jinseok"
}
```

다음처럼 어떤 인터페이스를 상속받아 할당된 속성을 하나로 합칠 수 있다. 반면에 타입은 이런 기능은 없다. 

인터페이스는 클래스와 결합하여 사용할 수 있는데 추상 클래스를 대체해서 상속(extends)가 아닌 구현(implaments)하여 다수의 인터페이스를 클래스에서 오버라이딩 하여 사용할 수 있다. 

```
interface User {
	firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}

interface Human {
	health:number,
}

class Player implements User, Human{
	constructor(
    	public firstName:string,
        public lastNmae:string,
        public health:number,
    ){}
    fullName(){
    	return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
    	return `Hello ${name}. My name is ${this.fullName()}`
    }
}
```

다음과 같이 인터페이스를 클래스와 같이 결합해서 사용하면 자바스크립트로 해석할때는 인터페이스가 자바스크립트에서는 따로 해석되어져서 오는 것 없기 때문에 소스를 줄일 수 있는 장점이 있다. 

보통 많은 객체지향프로그래밍에서 추상클래스보다 인터페이스를 많이 채용해서 사용하는 만큼 클래스의 모양을 특정할 수 있도록 하는 인터페이스를 잘 활용할 수 있도록 하자.

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/22)에 처음 게시(2022-12-08)된 글입니다.
