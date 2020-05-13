# 이슈

### 1. client와 server의 PORT 번호가 달라서 에러 발생 (CORS)

- client port번호는 3000, server의 port번호는 5000으로 서로 포트번호가 다르다.

☞ [`Proxy`](https://velog.io/@wndtlr1024/proxy%EC%84%A4%EC%A0%95)로 해결

> npm i http-proxy-middleware --save

# Server

### index.js

몽구스 커넥션코드부분에서 다음 코드를 안써주면 에러가 날수있다.

```js
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
```

<br />
<h1>config폴더</h1>
개발환경에따라서 mongoURI를 다르게가져오게끔 config 폴더안에 여러 파일을두었음.<br />
<br />
예) 히로쿠를 사용할경우, mongoURI를 히로쿠 사이트에 적고 히로쿠에서 mongoURI를 가져옴<br />
예2) 로컬환경에서는 그냥 mongoURI를 로컬에서 가져옴 <br />
<br />
.gitignore에 .dev를 적었기때문에 나중에 다운받아 사용할땐 config폴더에 dev.js를 생성후, mongoURI 경로를 적어주면됨<br />
(나는 mongo클라스터url을적어줬음)

### Bcrypt로 비밀번호 암호화하기

> 단방향 해시 함수로 데이터를 암호화하기위해 쓰인다.
> npm install bcrypt --save

> [정리자료](https://velog.io/@wndtlr1024/Bcrypt%EB%A1%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0)

### 로그인 기능

> [정리자료](https://velog.io/@wndtlr1024/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-with-jsonwebtoken)

### 로그아웃

특정 유저의 DB에있는 토큰을 지워주면 클라이언트에서 가져온 토큰과 DB에있는 토큰을 검증하는 부분에서 검증 실패가일어나 로그인이 풀려버리기때문에 토큰을 지워줌으로써 로그아웃 기능을 구현한다.

<br />

# Client

### Create-React-App

> npx create-react-app . <br />

. 을 붙여주는 이유는 "client폴더 안에다가 react 설치를 하겠다." 라는 이유에서 붙여줌<br/>
npx로 설치해줌으로써 항상 최신 버전을 사용할 수 있고, Disk Space를 낭비하지 않을수 있다.

원래는 npm i -g create-react-app 이렇게 global 디렉터리에 다운받았으나, 이제는 npx를 이용하여 다운받지않고 사용이 가능하다. (Disk Space 낭비방지)

> -g 를 안붙이면 로컬로 다운받아지는데, node_modules폴더안에 다운받아짐. <br />
> -g는 컴퓨터 자체에 다운받아짐(경로는 운영체제마다 다름)

### Concurrently

> 한번에 프론트와 백엔드서버를 킬수 있게 해줌<br />
> cd .. npm i concurrently --save `client에서 말고 그 상위폴더로(root디렉토리) 가서 설치`

<br />
root디렉토리의 package.json에서 scripts에 다음을 추가해준다. <br />

> "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\"" <br />

`"npm run start --prefix client\` 설명 : 그냥 npm run start를 해주면 루트 디렉토리가 실행됨 (scripts의start가 겹쳐서) <br /> --prefix client를 붙여줄경우 client의 package.json에있는 "start"가 실행됨

### 리덕스

> npm i redux react-redux redux-promise redux-thunk

- redux-thunk, redux-promise
  - 리덕스를 조금 더 잘 쓸수있게 도와주는 미들웨어다.
  - 리덕스는 {type:SUCCESS, age:12} 처럼 객체만을 받을수있는데, function이나 promise같은 형식은 받을수없다. 이를 받을수 있게 도와줌

### 로그인 페이지
