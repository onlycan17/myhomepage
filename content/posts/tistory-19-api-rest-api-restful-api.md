---
title: "Api / REST api/ RESTful api"
date: '2022-12-07'
tags: []
description: "API Application Programming Interface 는 응용 프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. 주로 파일 제어, 창 제어, 화상 처리"
---

**API(Application Programming Interface)**는 응용 프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. 주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.

API를 사용하면 특정 소프트웨어의 구현 방식을 알지 못하더라도 제품 또는 서비스가 서로 의사소통을 할 수 있으며 개발을 보다 쉽고 편리하게 할 수 있도록 해주는 역할을 한다. 따라서 개발 인력과 시간, 비용 등을 절약할 수 있어 많은 소프트웨어 기업에서는 필수적으로 사용하고 있다.

API는 UI(User Interface)와 비슷한 상호작용 역할을 하며, 이는 서로 다른 시스템이 만나 동작하기 위한 의사소통 역할을 하며, 데이터를 전달 및 처리하며 사용자에게 여러 응용 프로그램의 작업을 수행하고 완료하는 데에 있어 언제 어디서나 정보를 제공하고 있다. 반면에 UI와는 달리 사용자의 눈에 안보인다.

간단하게 설명하자면 작성된 프로그램은 API에게 데이터를 요청하게 되고, API는 요청받은 명령을 처리하기 위해 응용 프로그램 또는 애플리케이션과 상호작용을 하게 된다. 이후 결과물을 작성된 프로그램에게 전달하게 되는 것이다. 이러한 방식으로 API는 프로그램들이 서로 상호작용을 할 수 있도록 요청, 명령, 처리하는 인터페이스이다.

API의 접근 방식에는 크게 세 가지가 존재한다.

- Private API : API를 기업이나 연구 단체 등에서 사용하는 다양한 애플리케이션과 시스템의 통합을 위해 사용하는 것으로 단체 내부에서만 사용할 수 있도록 하는 것
- Partner API : API를 특정 비즈니스 파트너와 공유하는 것으로, 공유받은 API를 품질 저하 없이 사용할 수 있으며 수익 창출을 목표로 사용하는 것
- Public API : 모든 사람들에게 API를 제공하는 것으로, 개인이 API와 상호작용하는 프로그램을 무료로 개발할 수 있다. 다양한 아이디어를 통해 혁신적인 프로그램의 등장을 목표로 사용되고 있다.

앞서 API에 대하여 설명하면서 많은 장점들이 있었는데, 이 외에도 개발자들의 관점에서 크게 3가지의 장점이 있다.

1. 자동화가 용이 : API를 통해 사람이 직접 조작하지 않아도 관련 내용이 자동으로 생성되고 처리되어 워크플로우가 빨라질 수 있다.
2. 범위의 확장성 : API는 프로그램 사용 시 정보를 전달하는 기능이 있어 사용자의 환경에 맞춰서 전달할 수 있다. 또한 API에 직접 액세스 하지 않아도 콘텐츠가 자동적으로 생성 및 업로드되어 확장이 용이.
3. 적용력 : API는 변화 예측에도 큰 도움이 되기 때문에 API를 통해 데이터를 수집하고 전달하는 데 있어 유연한 서비스 환경을 구축할 수 있다.

## REST

**REST란 Representational State Transfer 의 약자**로 소프트웨어 프로그램 개발의 아키텍처의 한 형식이다.

**보통 REST라고 하면 좁은 의미인 HTTP를 통해[CRUD](https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EC%A3%BC%EC%86%8C%EB%A1%9D-%EB%A7%8C%EB%93%A4%EA%B8%B0/CRUD%EC%99%80-7-Standard-Actions)를 실행하는[API](https://www.a-mean-blog.com/ko/blog/%ED%86%A0%EB%A7%89%EA%B8%80/_/API)를 뜻한다.**

HTTP 프로토콜을 이용하기 때문에 URL([route](https://www.a-mean-blog.com/ko/blog/%ED%86%A0%EB%A7%89%EA%B8%80/_/Route-Router))를 통해 자원을 특정짓고[HTTP Verbs](https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/Hello-World/HTTP-Methods-HTTP-Verbs-GET-POST-PUT-PATCH-DELETE)를 통해 할일(CRUD)을 지정합니다. 또한 JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적이다.

위 정의에 더하여 REST를 정의하기 위한 조건들은 다음과 같다.

- **'클라이언트-서버' 구조**: 자원(resource)이 있는 쪽이 서버가 되며, 요청을 하는 쪽이 해당 서버에 대한 클라이언트가 된다.
- **무상태(Stateless)**: '서버'는 각각의 요청을 완전히 별개의 것으로 인식하고 처리해야하며, 이전 요청이 다음 요청의 처리에 연관이 되어서는 안된다. 즉 서버 session을 사용해선 안된다.
- **캐시 처리 가능(Cacheable)**: 대량의 요청을 효율적으로 처리하기 위해 캐시가 요구된다.
- **계층화(Layered System): REST API Server는 다중 계층으로 구성될 수 있다.**
- **Code on demand (optional)**
- **인터페이스 일관성: http 표준 프로토콜을 따르는 모든 플랫폼에서 사용이 가능, 특정 언어나 기술에 종속되지 않음.**

REST API 정의 - 위에 해당하는 REST의 특징을 기반으로 서비스 API를 구현한 것을 말한다.

REST API 특징 - REST API의 가장 큰 특징은 각 요청이 어떤 동작이나 정보를 위한 것인지를 그 요청의 모습 자체로 추론이 가능한 것

## RESTful

REST는 위 정의들을 구현하는 방식에 제약을 두지 않기 때문에 구체적인 가이드라인이 없다.**RESTful은 REST의 비공식적 구현 가이드**이다. 반드시 따라야 하는 법칙을 만들어서 공표한 것이 아니라 여러 개발자들이 비공식적으로 의견을 제시한 것들의 모음이다.

아래는 RESTful 중 가장 대표적이며 보편적인 규칙이 확고하게 정해진 RESTful[routing](https://www.a-mean-blog.com/ko/blog/%ED%86%A0%EB%A7%89%EA%B8%80/_/Route-Router)이다. 참고로 이 외의 RESTful 에는 header의 사용, return 구조, error code의 사용법 등이 있다.

  
| CRUD | HTTP verbs | Route |  
| -----————————— —- | --———---- | -----———— |  
| resource들의 목록을 표시 | GET | /resource |  
| resource 하나의 내용을 표시 | GET | /resource/:id |  
| resource 를 생성 | POST | /resource |  
| resource 를 수정 | PUT | /resource/:id |  
| resource 를 삭제 | DELETE | /resource/:id |  
  

- resource는 영어 복수형으로 적는다
- :id는 하나의 특정한resource를 나타낼 수 있는 고유의 값이다

## RESTful API 장점

**1. 정해진 규칙대로 routing 주소를 만들기 때문에 route 이름을 짓는 수고를 덜 수 있고, 통일성이 있다.**예를 들어 한 회사에 두개의 개발팀이 있다. 한 팀은 학생을 관리하는 API를 만들고, 다른 한팀은 교사를 관리하는 API를 만든다. 이때 두팀 모두 RESTful하게 API를 만들면 "students", "teachers"라는 resource 명을 제외한 나머지 API주소가 동일된다. 만약 두팀이 RESTful하지 않게 API주소를 만든다면, 새로운 학생, 교사를 추가하는 API 주소는 /CreateStudent, /NewTeacher, /CreateNewStudent, /NewTeacher 등 다양하게 될 수 있고, 나중에 양쪽 팀의 API를 동시에 사용하는 프로그램을 만드는 경우 이러한 비일관성은 불필요한 혼란을 불러올 수 있다.

**2. API의 확장이 쉽다.**학생 API에서 과목을 관리하는 API를 추가하는 경우, [POST] students/:id/classes, [DELETE] students/:id/classes/:id등과 같이 만들 수 있다. 비 RESTful의 경우, 이 기능을 가지는 route의 주소이름을 따로 지어줘야 하는데.. 이름짓는데 시간과 노력이 들어가며, 그렇게 정해진 이름 역시 1번의 문제를 고스란히 가진다.

통일성과 확장성이 RESTful API의 장점이다. 정해진 규칙에 따라 API 주소, request구조, return 구조를 만들기 때문에 개발팀이 바뀌거나 하는 경우에도 혼란을 줄일 수 있다.

### '[기타](https://onlycan17.tistory.com/category/%EA%B8%B0%ED%83%80)' 카테고리의 다른 글

| | [Xcode 단축키](https://onlycan17.tistory.com/26)(0)| 2023.09.16
| | [[Nextjs]네이버 문자 SMS 전송 API 포스팅](https://onlycan17.tistory.com/25)(0)| 2023.08.21
| | [List, Que,Stack, Map(Dictionary)](https://onlycan17.tistory.com/20)(0)| 2022.12.07
| | [Tdd 방법론](https://onlycan17.tistory.com/18)(0)| 2022.12.07
| | [암호화 기술](https://onlycan17.tistory.com/17)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/19)에 처음 게시(2022-12-07)된 글입니다.
