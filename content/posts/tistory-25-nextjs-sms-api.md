---
title: "[Nextjs]네이버 문자 SMS 전송 API 포스팅"
date: '2023-08-21'
tags:
  - etc
description: "개인적으로 네이버 api 문서는 좀 성의가 없는 것 같다. 설명이 부족하다기 보다, 하나의 기능을 개발자가 활용하기 위해 해야 될 절차에 대한 설명이 부족하기도 하고 제일 마음에 안드는 건 예제소스... 처음 네이버 api를 사용하면"
---

개인적으로 네이버 api 문서는 좀 성의가 없는 것 같다. 

설명이 부족하다기 보다, 하나의 기능을 개발자가 활용하기 위해 해야 될 절차에 대한 설명이 부족하기도 하고 

제일 마음에 안드는 건 예제소스...  처음 네이버 api를 사용하면 삽질을 안할래야 안할수가 없게 되어있다. 

한국에서 만든 api인데도 어째 외국 api보다 삽질을 더 많이 해야 되나 싶다....

먼저 api를 사용하기 위해 다음 사이트에서 계정을 만든다.

[https://www.ncloud.com/](https://www.ncloud.com/)

회원가입이 완료되면 콘솔에 진입한다.

![](/blog/tistory-25-nextjs-sms-api/1.png)

그러면 아래와 같은 화면이 뜬다. 뭐가 많아서 찾기 어렵지만 Service > Application > Simple & Easy Notification Service 를 차례로 찾아서 클릭한다.

![](/blog/tistory-25-nextjs-sms-api/2.png)

아래와 같은 화면이 뜨면 상단 왼쪽에 있는 프로젝트 생성하기를 클릭한다.  원하는 기능 입력을 적절히 입력 하면 프로젝트가 생성이 된다.

![](/blog/tistory-25-nextjs-sms-api/3.png)

프로젝트가 생성되면 아래와 같이 프로젝트 정보가 뜬다. 목록 정보 끝에 보면 서비스ID 항목에 열쇠 모양 아이콘이 있는데 api를 사용할때 쓸 중요정보다. 일단 여기 있다는 것만 기억하자. 

![](/blog/tistory-25-nextjs-sms-api/4.png)

이제 소스에서 api 를 적용시키기위해 가이드 문서를 확인해 보자 왼쪽 상단 세번째 버튼을 클릭하면 문서를 볼 수 있다. 

문서를 보면 api header 설정에 대한 글을 확인 할 수 있는데

| | Content-Type| Mandatory| 요청 Body Content Type을 application/json으로 지정 (POST)
| | x-ncp-apigw-timestamp| Mandatory| - 1970년 1월 1일 00:00:00 협정 세계시(UTC)부터의 경과 시간을 밀리초(Millisecond)로 나타냄  
- API Gateway 서버와 시간 차가 5분 이상 나는 경우 유효하지 않은 요청으로 간주
| | x-ncp-iam-access-key| Mandatory| 포털 또는 Sub Account에서 발급받은 Access Key ID
| | x-ncp-apigw-signature-v2| Mandatory| - 위 예제의 Body를 Access Key Id와 맵핑되는 SecretKey로 암호화한 서명  
- HMAC 암호화 알고리즘은 HmacSHA256 사용

다음과 같이 작성되어 있고 

POST [https://sens.apigw.ntruss.com/sms/v2/services/](https://sens.apigw.ntruss.com/sms/v2/services/){serviceId}/messages

```
Content-Type: application/json; charset=utf-8
x-ncp-apigw-timestamp: {Timestamp}
x-ncp-iam-access-key: {Sub Account Access Key}
x-ncp-apigw-signature-v2: {API Gateway Signature}
```

다음과 같이 설정하면 된다고 한다. 

자 차근차근 확인해 보자. x-ncp-apigw-timestamp 는 1970년 1월 1일 00:00:00 협정 세계시(UTC)부터의 경과 시간을 밀리초(Millisecond)로 나타냄 이라고 안내되어있다. 이게 무슨 뜻일까? 좀더 알기쉽게 설명하자면 협정 세계시(예를 들어 2023.08.21T14:21:45 와 같은 날짜양식)을 밀리초로 나타낸 것이다. 대략 3453600224 와 같이 숫자 나열을 작성하라는 뜻이리라.

말을 정말 어렵게 써놨다. 문서 작성한 사람이 공무원이나 문과 출신인가보다. 

코드 설명도 주석을 넣어 예제 입력을 추가 하면 좀 더 이해하기 쉬웠을텐데 대충{Timestamp} 라고 해놨다. 이런건 정말 해외 개발 문서를 좀 참고해서 친절하게 만들면 좋겠다. 

그런데  x-ncp-apigw-timestamp에 날짜를 쓰라는 건 알겠는데, 어떤 날짜를 쓰라는 건지는 말이 없다.  그런데 맨 마지막 한줄의 설명을 보면 API Gateway 서버와 시간 차가 5분 이상 나는 경우 유효하지 않은 요청으로 간주 라고 하는 것을 보아 현재 날짜시간을 기입하라는 내용으로 유추 할 수 있다. 몇번을 읽고 분석을 해야 된다. 갈등이나 생각할게 많은데 정말 토시하나 안빠트리고 문서의 축약된 의미를 되새김질 하도록 글을 작성하고 예제소스 또한 불친절하다.  네이버 관계자가 이 포스팅을 좀 읽고 반성했으면 좋겠다. 잘만들어 놓으면 뭐하나... 문서가 불친절한데... 

다음 입력값을 보자. 

x-ncp-iam-access-key : 포털 또는 Sub Account에서 발급받은 Access Key ID 

.... 액세스 키인 건 알겠다. 근데 저거 대체 어디에 있다는 건가? 안내가 없네?

서브 계정에서 발급받은 액세스키야 너 어딧니?

소스를 보니 {Sub Account Access Key} 라고만 되어있다. 환장할 노릇이다. 

콘솔에 그 많은 페이지들과 각 메뉴를 뒤져봤지만 비슷한 걸 찾을 수 없었다. 

그런데 엔클라우드 메인페이지에서 마이페이지 > 인증키 관리 에 가니 있다! 하아.....

![](/blog/tistory-25-nextjs-sms-api/5.png)

액세스 키와 시크릿키도 있다. 기억하자. 

네이버 api 처음쓰는 사람은 초반에 멘붕이 날까 안날까?

 이제 마지막으로 x-ncp-apigw-signature-v2 가 남았는데 이건 친절하게 바로 아래에 

링크를 따로 친절하게 남겨놨다.  
[NAVER Cloud Platform 인증키 및 Signature 생성 가이드](https://api.ncloud-docs.com/docs/common-ncpapi)

Nextjs 활용하다보니 javascript 소스를 참고해서 타입스크립트를 붙여서 작성했다. 뭐 그정도는 수정할 수 있으니 그렇다 치자....

```
/*
https://code.google.com/archive/p/crypto-js/
https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/crypto-js/CryptoJS%20v3.1.2.zip
*/

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
<script type="text/javascript" src="./CryptoJS/rollups/hmac-sha256.js"></script>
<script type="text/javascript" src="./CryptoJS/components/enc-base64.js"></script>

function makeSignature() {
	var space = " ";				// one space
	var newLine = "\n";				// new line
	var method = "GET";				// method
	var url = "/photos/puppy.jpg?query1=&query2";	// url (include query string)
	var timestamp = "{timestamp}";			// current timestamp (epoch)
	var accessKey = "{accessKey}";			// access key id (from portal or Sub Account)
	var secretKey = "{secretKey}";			// secret key (from portal or Sub Account)

	var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
	hmac.update(method);
	hmac.update(space);
	hmac.update(url);
	hmac.update(newLine);
	hmac.update(timestamp);
	hmac.update(newLine);
	hmac.update(accessKey);

	var hash = hmac.finalize();

	return hash.toString(CryptoJS.enc.Base64);
}
```

 문서를 보면 다음과 같이 작성이 되어 있는데.... 나를 정말 혼란스럽게 만든 건 저 망할 url 이다. 

예제 url이 아무상관없는 url인데다가 어떤게 들어가야 하는지 전혀 유추할 수도 없고 주석조차 도움이 안된다.... 

삽질 몇차례 후.... url 이 서비스 url 일 가능성이 높다고 보았는데, https://... 풀 url이 붙는지, 아닌지 또 고민 하다가 다음과 같이 변경하였더니 잘 된다... 

```
function makeSignature(p: { method: string; serviceId: string, timestamp: number, accessKey:string, secretKey:string }): string {
    console.log(p);
    const space: string = " ";   // one space
    const newLine: string = "\n";   // new line
    const method: string = p.method;   // method
    const url: string = `/sms/v2/services/${p.serviceId}/messages`;  // url (include query string)
    const timestamp: number = p.timestamp;     // current timestamp (epoch)
    const accessKey: string = p.accessKey;     // access key id (from portal or Sub Account)
    const secretKey: string = p.secretKey;     // secret key (from portal or Sub Account)

    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timestamp.toString());
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();

    return hash.toString(CryptoJS.enc.Base64);
}
```

[ https://sens.apigw.ntruss.com/sms/v2/services/](https://sens.apigw.ntruss.com/sms/v2/services/){serviceId}/messages 전체 url 에서 /sms /... 를 따로 작성하면 된다. 나머지 serviceId, secretKey는 위에서 기억하라 한 글을 참고해서 사용하면 된다. 

이제 모든 퍼즐이 완성 되었고 호출만 하면 된다. 

```
// import 생략
export const sendSms = async (options: SendSmsOptions) => {
    const {to, from, text} = options;
    // 네이버 클라우드 플랫폼 SMS API 요청 URL 및 헤더 설정
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${process.env.NEXT_PUBLIC_SMS_ID}/messages`; // 여기서 {serviceId} 부분을 실제 서비스 ID로 대체하세요.
    const timestamp = Date.now();
    const signature = makeSignature({
        method: 'POST',
        timestamp,
        serviceId: process.env.NEXT_PUBLIC_SMS_ID + '',
        accessKey: process.env.NEXT_PUBLIC_SMS_ACCESS_KEY + '',
        secretKey: process.env.NEXT_PUBLIC_SMS_SECRET + ''
    });
    
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': process.env.NEXT_PUBLIC_SMS_ACCESS_KEY + '',
        'x-ncp-apigw-signature-v2': signature,
    }
    // logDev(`text : ${text}`);
    // 요청 본문 설정
    const body = {
        type: 'SMS',
        contentType: 'COMM',
        countryCode: '82',
        from,
        content: text,
        messages: [{
            to,
            content: text
        }]
    };

    const response = await axios.post(url, body, {headers})
        .catch((error) => {
            console.log('-----------------------------------');
            console.log(error.response.data);
            console.log(error.response.data.status);
            console.log(error.response.data.errorMessage);
            console.log(error.response.data.errors);
            console.log('-----------------------------------');
        });
    return response;
};
```

마지막으로 발신자 번호를 하나 등록해놓고 테스트 하면 잘 될 것이다. 

분명 문서를 같은 한국사람이 만들었을텐데 이걸 보고 만들라는 건지. 꼭 문의를 해서 답을 찾으라고 하는 건지 알 수가 없다. 

최대한 쉬운 글 소스와 주석을 보면 바로 이해할 수 있는 글로 충분히 작성할 수 있을텐데, 외국 문서보다 더 짱구를 굴리며 한국말을 해독하고, 전혀 상관없는 예제소스의 url과 주석설명은 정말 암호해독급처럼 하드코어했다.  

네이버 api는 이제 다시는 안쓰겠다고 굳게 다짐하게 하시는 삽질의 시간이었고 발암같은 문서해독시간이었다.

이 글을 많은 사람들이 보고 헤매지 않기를 바라고, 또한 네이버 관계자가 본다면 처음 네이버 api를 사용하는 개발자의 입장을 좀 더 세심히 살펴주길 바란다. 

[저작자표시비영리동일조건(새창열림)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)

### '[기타](https://onlycan17.tistory.com/category/%EA%B8%B0%ED%83%80)' 카테고리의 다른 글

| | [Xcode 단축키](https://onlycan17.tistory.com/26)(0)| 2023.09.16
| | [List, Que,Stack, Map(Dictionary)](https://onlycan17.tistory.com/20)(0)| 2022.12.07
| | [Api / REST api/ RESTful api](https://onlycan17.tistory.com/19)(0)| 2022.12.07
| | [Tdd 방법론](https://onlycan17.tistory.com/18)(0)| 2022.12.07
| | [암호화 기술](https://onlycan17.tistory.com/17)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/25)에 처음 게시(2023-08-21)된 글입니다.
