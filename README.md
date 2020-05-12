# index.js

몽구스 커넥션코드부분에서 다음 코드를 안써주면 에러가 날수있다.

<p>useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,</p>

---

<br />
<h1>config폴더</h1>
개발환경에따라서 mongoURI를 다르게가져오게끔 config 폴더안에 여러 파일을두었음.<br />
<br />
예) 히로쿠를 사용할경우, mongoURI를 히로쿠 사이트에 적고 히로쿠에서 mongoURI를 가져옴<br />
예2) 로컬환경에서는 그냥 mongoURI를 로컬에서 가져옴 <br />
<br />
.gitignore에 .dev를 적었기때문에 나중에 다운받아 사용할땐 config폴더에 dev.js를 생성후, mongoURI 경로를 적어주면됨<br />
(나는 mongo클라스터url을적어줬음)

---

# Bcrypt로 비밀번호 암호화하기

> 단방향 해시 함수로 데이터를 암호화하기위해 쓰인다.
> npm install bcrypt --save

> [정리자료](https://velog.io/@wndtlr1024/Bcrypt%EB%A1%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0)

---

# 로그인 기능

> [정리자료](https://velog.io/@wndtlr1024/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-with-jsonwebtoken)
