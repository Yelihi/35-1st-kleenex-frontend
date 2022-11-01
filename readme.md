<div align="center">
  <img src="public/images/readme/테라로사 슬라이드.gif" width="100%"/>
</div>
  <br/>

<h1 align="center"> Kleenex </h1>
<h3 align="center"> 커피 원두 커머스 사이트 TERAROSA를 모티브한 1차 팀프로젝트 </h3> 
<br />

- 팀 명 : 크리넥스(kleenex)
- 팀 원: [최원익(PM)](https://github.com/Yelihi), [김영수](https://github.com/youngsoon12), [오창훈](https://github.com/och-changhoon), [김도연](https://github.com/kdylsky), [안상현](https://github.com/AhnSang0915)
  <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
<h2 id="프로젝트소개"> :book: 프로젝트 소개</h2>

<p align="justify"> 
 다양한 세계의 커피 원두 및 식품 커머스 사이트 <b>TERAROSA</b>를 모티브로 진행된 1차 팀프로젝트 입니다. 커머스 사이트로서 가장 기본적이고 핵심적인 서비스를 제공하고 있었고, 단순 카페 체인점이 아닌 소비자의 니즈에 맞는 원두를 제작및 수입 판매하는 사이트라는 점에 있어서 흥미를 가지게 되어 모티브 사이트로 선정하였습니다.
 <br />
 커머스 사이트의 특징에 맞게, 결제 전 단계까지 구현하였으며 <b>로그인 -> 메인페이지 -> 검색 -> 상품리스트 -> 상세페이지 -> 장바구니</b> 순으로 이어집니다. React 를 제외한 외부 라이브러리는 사용하지 않았으며, 기존 테라로사 사이트에 없는 검색 기능을 추가하여 사용자가 조금 더 손쉽게 상품결제에 도달할 수 있도록 설계하였습니다. 
</p>
<img src="public/images/readme/순서도.png" width="100%" />
  <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
<h2 id="팀원 소개"> :dart: 개발 기간 및 팀원</h2>

- 개발기간 : 2022/7/18 ~ 2022/7/29
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- Front : 최원익, 김영수, 오창훈
- Back : 김도연, 안상현
 <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
<h2 id="사용 기술"> :fork_and_knife: Skills</h2>

- Front-end: ![이미지1](https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=react&logoColor=white) ![이미지2](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white) ![이미지3](https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=react&logoColor=white) ![이미지4](https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white) ![이미지5](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white)

- Back-end: ![이미지1](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white) ![이미지2](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white) ![이미지4](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
 <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="구현목표"> :floppy_disk: 구현 목표</h2>

> **필수 구현**

- 테라로사 메인 페이지 및 검색기능
- 회원가입 및 로그인 페이지
- 메인페이지 이미지 슬라이드
- 상품목록 페이지
- 개별 상품 상세 페이지
- 장바구니 페이지
 <br />

 ![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<h2 id="데이터모델링"> :floppy_disk: Data Modeling</h2>

![모델링](https://little-polish-7ff.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff93266b2-aae6-4f18-bf0e-122f973bcc1e%2FUntitled.png?table=block&id=38ccb56b-e01b-4772-8420-dfc7b6ddbc3d&spaceId=3603a399-ae9e-47d0-9870-7786d6f3f89b&width=2000&userId=&cache=v2)
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="담당하였던part"> :large_blue_diamond: 담당하였던 Part</h2>

### **Main.js**

<img src="public/images/readme/테라로사 슬라이드.gif" width="100%" />
<br>
<h3 id="main"> :scroll: Description</h3>

> **Opacity 를 활용한 슬라이드 구현**

<p align="justify"> 
 슬라이드를 구현할 때, 위 이미지와 같이 화면상에서 사진이 이동하는것이 아니라 다음사진이 사라졌다가 다시 나타나듯이 표현하고자 하였습니다. 클래스 'active' 를 적용할 시 사진이 나타나고, 나머지 사진은 opacity = 0 이 되어, 화면에 등장하지 않는 로직을 작성하려 하였습니다. 사진은 자동으로 슬라이드가 되고, 사용자가 임의로 슬라이드를 진행시킬 수 있습니다. 
 <br />
 초기 state 상태를 객체로 저장하고, useEffect 의 의존성 배열에 상태값을 넣어서 슬라이드를 구현하였습니다. 하지만 이렇게 하면 추후 슬라이드 사진이 증가하거나 감소할때 수정하는것이 어려워진다는 것을 깨닫고, 방법을 아래처럼 변경하였습니다.
</p>
```js
  const [imgId, setImgId] = useState(1);

  const showPrevImage = () => {
    imgId === 1 ? setImgId(IMAGE_DATA.length) : setImgId(prevId => prevId - 1);
  };

  const showNextImage = () => {
    imgId === IMAGE_DATA.length ? setImgId(1) : setImgId(prevId => prevId + 1);
  };

  useEffect(() => {
    const cycleImage = () => {
      imgId === IMAGE_DATA.length
        ? setImgId(1)
        : setImgId(prevId => prevId + 1);
    };

    const autoSlide = setInterval(cycleImage, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [imgId]);
``
<p align="justify"> 
 사진 데이터에 각각의 id 값을 부여합니다. 이후 state 를 id 와 같은 숫자로 지정한뒤, 현 state 와 id 의 일치여부에 따라 클래스 active 를 적용시킵니다.
 <br> 이렇게 구현하게 되면, 만일 사진이 추가된다 한들, 기존 데이터에 추가로 사진을 넣어주기만 하면 됩니다.
</p>
```js
function Slide({ id, url, subTitle, Title1, Title2, imgId }) {
  return (
    <div className="slide">
      <div className={`mainSliderImage ${imgId === id ? 'active' : ''}`}>
        <img src={url} alt="slide1" className="image" />
        <div className="mainSliderText">
```
<br>
![더 자세한 내용은 블로그참조](https://rock7246.tistory.com/8?category=990492)



### **Detail**

### **SignUp**

![signup](https://user-images.githubusercontent.com/105600985/182024817-97ec7b3b-3a3c-4fca-8ec0-404bedc54040.gif)



### **Login**
![팀_크리넥스_시연_영상_AdobeExpress](https://user-images.githubusercontent.com/105952597/182052000-08b521b0-df2a-40c2-9b6c-54340d53f924.gif)
너무 작다 큰일났따!

### **Cart**
