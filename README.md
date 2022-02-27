# Title

<h3>MBTI 궁합 테스트</h3>
    >본인과 상대의 이름, 생년월일, 성별, 혈액형, MBTI를 입력하면 둘의 궁합이 얼마나 잘 맞는지 테스트 할 수 있는 사이트   
    >결과는 별자리, mbti, 혈액형, 12간지 총4가지로 나온다   </br>
<h4>배포: https://www.chemistry-test.co.kr
 
## 🛠기술 스택🛠
💠React.js</br>
💠Post-css</br>
💠React-Router</br>
💠yarn</br>
💠axios</br>
💠Aws amplify</br>

## 🛠Install🛠

```
npx create-react-app [폴더명]
npm install -g yarn
yarn add axios
yarn add react-router-dom
react-copy-to-clipboard
yarn add @fortawesome/fontawesome-free
```

## 🖱Usage🖱

```
yarn start
```

## 📚API📚

<strong>REST API</strong>

◾ GET: 참여인원  
◾ POST: 나와 상대의 궁합 결과

## 📜화면 구성📜

◾ Main page - 첫 시작 화면 -> ◾ Meinfo page - 본인 정보 -> ◾ Youinfo page - 상대 정보 -> ◾ Result page - 궁합 결과
</br>
![5](https://user-images.githubusercontent.com/76987275/152200277-07cf1ff6-7102-48a8-ab2e-06f70a13e58e.PNG)
</br>

## 💨데이터의 흐름💨

📑Meinfo page 에서 정보 입력 후 App.js 에서 관리하는 dataFile()함수의 인자로 me 정보를 id값과 함께 넘겨준다. App.js에서는 받아온 값으로 state 정보를 수정함.
정보 입력후 다음으로 버튼을 누르면 Youinfo page로 라우팅 처리 됨.
</br>
</br>
📑Youinfo page 또한 meinfo와 같은 방식으로 데이터를 넘겨준다. 대신, App.js는 같은 함수를 재활용해서 정보를 받아오기 때문에 me일때와 you때 각각 해당하는 Obj에 정보를 넣어줄 수 있도록 조건문을 써줌.
</br>

```
 const dataFile = (user, id) => {
        setUserData((userData) => {
            const newObj = { ...userData };
            if (id === "me") {
                newObj.me = user;
                return newObj;
            } else if (id === "you") {
                newObj.you = user;
                return newObj;
            }
        });
    };
```

</br>
📑Result page 가 로드 될 때 결과가 화면에 보여지도록 useEffect 내부에서 함수가 실행 되도록 작성함. 
</br>

```
const [result, setResult] = useState();
const [loading, setLoading] = useState(false);
    useEffect(() => {
        dataResultApi(userData, setResult, setLoading);
    }, []);
```

</br>

함수 인자로 App.js에서 관리하는 state(userData) = me, you 의 정보, post결과값을 담아줄 setResult, 로딩스피너를 위한 setLoading을 보내줌.
</br>
</br>
</br>

## 💽api관리 js💽

```
async testResult(userData, setResult, setLoading) {
try {
setLoading(true);
const response = await axios.post(`${baseURL}/judgment`, {
me: userData.me,
you: userData.you,
});
setTimeout(() => {
setLoading(false);
setResult(response.data.result);
}, 2000);
} catch (err) {
console.log("err", err);
}}}

```

</br>
바로 데이터를 불러와서 화면에 출력해 주니까 빈 화면이 그대로 나왔다가 결과 값이 출력되는 문제가 생겨서 로딩스피너를 만들어서 2초 후에 결과값이 화면에 나오도록 함.
</br>
</br>

## 🔏보안🔏

폴더의 최상위 위치에 .env로 환경변수 값을 만들어서 API의 baseurl값을 저장.
.env값을 github에 push해줄 때 같이 올라가면 안되는 보안파일이기 때문에 gitignore에 추가해줌.
</br>
</br>

## ✨AWS amplify 배포✨

🔔배포시 주의 할점! env는 ignore되었기 때문에 이대로 배포를 진행하면 api호출에 실패하기 떄문에
amplify배포 환경 설정에서 환경변수를 따로 설정해 줘야함. 환경변수 설정 방법은 블로그에 포스팅 되어있음.
</br>
</br>
🔽</br>
https://codnjs779.tistory.com/30
