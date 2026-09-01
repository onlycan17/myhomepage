---
title: "파이썬 설치 (2) 장고 api 서버 세팅 / mongodb 연동"
date: '2023-07-11'
tags:
  - python
description: "글 쓰는게 너무 귀찮다... 그런데 삽질한 건 기록에 남기는 게 좋겠다고 생각해서 또 올린다. 장고 설치 후 api 세팅까지는 금세 따라 한다. 간단한 Django REST API를 만드는 방법에 대해 안내드리겠습니다. 이 예제에서는"
---

글 쓰는게 너무 귀찮다... 그런데 삽질한 건 기록에 남기는 게 좋겠다고 생각해서 또 올린다. 

장고 설치 후 api 세팅까지는 금세 따라 한다.

간단한 Django REST API를 만드는 방법에 대해 안내드리겠습니다. 이 예제에서는 "Hello, World!" 메시지를 반환하는 API를 만들어 보겠습니다.

먼저, Django와 Django REST Framework를 설치해야 합니다. 가상 환경이 활성화된 상태에서 아래의 명령을 실행합니다:
bashCopy codepip install django pip install djangorestframework

1. **프로젝트 및 앱 생성**bashCopy codedjango-admin startproject helloworldapi cd helloworldapi django-admin startapp hello
2. **View 생성**pythonCopy codefrom rest_framework.response import Response from rest_framework.views import APIView classHelloWorldView(APIView): defget(self, request): return Response({"message": "Hello, World!"})
이 View는 GET 요청을 받으면 {"message": "Hello, World!"}라는 JSON 응답을 반환합니다.
3. hello/views.py 파일에 API view를 작성합니다:
4. **URL 설정**pythonCopy codefrom django.urls import path from .views import HelloWorldView urlpatterns = [ path('hello/', HelloWorldView.as_view()), ]
그리고 helloworldapi/urls.py에서 hello 앱의 URL을 포함시킵니다:
5. pythonCopy codefrom django.contrib import admin from django.urls import path, include urlpatterns = [ path('admin/', admin.site.urls), path('api/', include('hello.urls')), ]
6. hello/urls.py 파일을 생성하고 아래와 같이 작성합니다:

이제 Django 서버를 실행시키면, /api/hello/ 엔드포인트에서 "Hello, World!" 메시지를 반환하는 RESTful API를 사용할 수 있습니다:
bashCopy codepython manage.py runserver

웹 브라우저나 API 테스팅 도구 (예: Postman)를 이용해 http://localhost:8000/api/hello/ 주소에 GET 요청을 보내면, "Hello, World!" 메시지를 확인할 수 있습니다.

여기서 빠진게 있다. 

```
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

이 설정까지 해줘야 웹에서 정상적으로 출력된다. postman에서 찍을때는 없어도 상관없이 나오긴 한다.

그다음 db 연동을 하는 데 mongo db 를 사용할 예정이라 그에 해당 되는 세팅 방법을 검색했다. 

MongoDB Atlas는 MongoDB의 클라우드 호스팅 서비스로, Djongo를 이용하여 Django와 MongoDB Atlas를 연결할 수 있습니다. 아래에 MongoDB Atlas와 Django를 연동하는 방법을 소개해 드리겠습니다.  
  
먼저 Djongo 패키지를 설치합니다:  
  
```shell  
pip install djongo  
```  
  
`settings.py` 파일에서 DATABASES 설정을 다음과 같이 변경합니다:  
  
```python  
DATABASES = {  
    'default': {  
        'ENGINE': 'djongo',  
        'ENFORCE_SCHEMA': False,  
        'NAME': 'your-db-name',  
        'CLIENT': {  
            'host': 'your-mongodb-connection-string',  
            'username': 'your-mongodb-username',  
            'password': 'your-mongodb-password',  
            'authMechanism': 'SCRAM-SHA-1',  
        }  
    }  
}  
```  
  
여기서 'your-db-name'은 MongoDB Atlas에서 사용할 데이터베이스 이름입니다.  
  
'your-mongodb-connection-string'은 MongoDB Atlas 클러스터에서 제공하는 연결 문자열입니다. 이 문자열은 MongoDB Atlas 대시보드의 "Connect" 옵션에서 찾을 수 있습니다.  
  
'your-mongodb-username'와 'your-mongodb-password'는 MongoDB Atlas에서 설정한 사용자 이름과 비밀번호입니다.  
  
'authMechanism'은 MongoDB에서 사용하는 인증 메커니즘을 설정하며, 일반적으로 'SCRAM-SHA-1'을 사용합니다.  
  
이렇게 설정을 마친 후에는 Django를 평소와 같이 사용할 수 있습니다. Django의 모델 변경 사항을 MongoDB Atlas 데이터베이스에 적용하려면 다음 명령을 실행하십시오:  
  
```shell  
python manage.py makemigrations  
python manage.py migrate  
```  
  
참고로, MongoDB는 SQL과는 다른 NoSQL 데이터베이스이므로 Django의 일부 기능이 정확히 작동하지 않을 수 있습니다. 예를 들어, 복잡한 JOIN 작업이나 다대다 관계는 예상대로 처리되지 않을 수 있습니다. 이 점을 염두에 두고 Django와 MongoDB를 함께 사용하시기 바랍니다.

그런데 다음과 같이 하면 계속 에러가 난다. djongo 라이브러리는 제대로 인식한 것 같은데 이런 메세지가 뜬다. 

django.core.exceptions.ImproperlyConfigured: 'djongo' isn't an available database backend or couldn't be imported. Check the above exception. To use one of the built-in backends, use 'django.db.backends.XXX', where XXX is one of: 'mysql', 'oracle', 'postgresql', 'sqlite3'

chatgpt에 검색하고 삽질을 해도 알 수가 없다. 역시 gpt는 만능이 아니다... 

파이썬은 좀 더 응답률이 좋다고 하길래 기대했더니... 문법만 좋았던거냐... 칙쇼... 

나는 옛날로 돌아가 구글링을 하고 스택오버플로우에 비슷한 물음이 있는지 뒤졌더니... 찾았다. 

pytz 라는 라이브러리가 필요하다. 서로 종속성에 물려있다는 것 같다. 

설치를 하고 

```
pip install pytz
```

다시 로딩하니 된다. 

기본적인 장고 설정은 이제 끝났다. 
[저작자표시비영리동일조건(새창열림)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)

### '[파이썬](https://onlycan17.tistory.com/category/%ED%8C%8C%EC%9D%B4%EC%8D%AC)' 카테고리의 다른 글

| | [파이썬 분투기 (1) 파이썬 설치 / 장고 설치](https://onlycan17.tistory.com/23)(0)| 2023.07.11

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/24)에 처음 게시(2023-07-11)된 글입니다.
