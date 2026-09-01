---
title: "타입스크립트 객체지향 프로그래밍"
date: '2022-12-07'
tags:
  - typescript
description: "일단 이 포스팅은 객체지향에 대해 상세하게 설명하고 있지 않으니 객체지향프로그래밍 개념을 아예 알지 못 한다면 다른 포스팅을 참고하고 이해해서 이 글을 읽는 것이 좋다. 타입스크립트에서나 자바스크립트 에서나 객체지향 코딩은 둘다 지원"
---

일단 이 포스팅은 객체지향에 대해 상세하게 설명하고 있지 않으니 객체지향프로그래밍 개념을 아예 알지 못 한다면 다른 포스팅을 참고하고 이해해서 이 글을 읽는 것이 좋다. 

타입스크립트에서나 자바스크립트 에서나 객체지향 코딩은 둘다 지원을 하는데 해당 클래스에 private, protect, public 같은 키워드는 타입스크립트에서만 제공되고, 자바스크립트에서는 무조건 오픈되어 있다. 

예제코드를 보면 

```
class Palyer{
	constructor(
    private firstName:string,
    private lastName:string,
    public nickName:string
    ){}
}

const nico = new Player("nico","las","니꼬")

nico.firstName // private 키워드가 있기 때문에 외부에서 가지고 올 수 없다. 에러발생
```

추상클래스(Abstract class)

추상클래스는 클래스 내부안에 구체적으로 구현되어진 로직 없이 말 그대로 추상적인 형태만 가지고 있는 클래스를 추상 클래스라고 한다.

추상클래스 본인은 직접 새로운 인스턴스를 만들 수 없고 명시적인 변수나 메서드 선언부만 보통 나열되어져 있다. 

추상클래스는 보통 상속이라는 개념을 통해 추상클래스를 상속받은 클래스가 어떠한 변수나 메소드들을  그대로 가지고와서 오버라이딩 하고자 할때 사용한다. 

```
abstract class User{
    constructor(
        private firstname:string,
        private lastname:string,
        public nickname:string
    ){
    	abstract getNickname():void
    }
}

class Player extends User{
// 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.
getNickname(){
	console.log(this.nickname)
	}
}
//public: 모든 클래스에서 접근 가능
//private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
//protected: 해당 클래스와 자식 클래스에서 접근 가능
```

이와 같이 객체지향을 썼을때 자바스크립트와 타입스크립트가 다른데 자바스크립트에도 상속 개념은 있지만 추상클래스 개념은 타입스크립트에서만 존재한다. privatel, protected, public 키워드도 타입스크립트에서만 존재하다. 이렇게 타입스크립트는 일단 객체지향 언어들 처럼 세부 키워드 개념들을 거의 흡사하게 사용이 가능하다.

또한 클래스를 타입으로 정의해서 사용이 가능하다. 다음 예제를 참고.

```
type Words = {
	[key: string]: string;
};

class Dict {
	private words: Words;
    constructor() {
    	this.words = {};
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
    	return this.words[term];
    }
    
    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
	}
    
    del(term: string) {
    	if (this.words[term] !== undefined) {
    		delete this.words[term];
    	}
	}
}

class Word {
	constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "super cool food");
const pizza = new Word("pizza", "super nice piazza");
const dict = new Dict();

dict.add(kimchi);
dict.add(pizza);
console.log("KIMCHI:", dict.def("kimchi"));
console.log("PIZZA:", dict.def("pizza"));

dict.update(new Word("kimchi", "very incredible super food"));
console.log("UPDATE KIMCHI:", dict.def("kimchi"));
console.log("NOT UPDATE PIZZA:", dict.def("pizza"));

dict.del("pizza");
console.log("DELETE PIZZA", dict.def("pizza"));
console.log("NOT DELETE KIMCHI:", dict.def("kimchi"));
```

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/21)에 처음 게시(2022-12-07)된 글입니다.
