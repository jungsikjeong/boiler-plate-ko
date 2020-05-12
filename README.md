<h1>index.js</h1> 몽구스 커넥션코드부분에서 다음 코드를 안써주면 에러가 날수있다.

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
