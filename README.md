# <p align="center">항해99 실전프로젝트, TriPlan [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhaesoo9410&count_bg=%23EB8B10&title_bg=%23684327&icon=&icon_color=%23E7E7E7&title=VISIT&edge_flat=false)](https://github.com/24hours-not-enough) </p> 
<h4 align="center">📆 2022.03.04 ~ 2022.04.08</h4>
<br>
<br>

## 📌 팀원 소개

|[Frontend] 김선주|[Backend] 손성진|[Backend] 김효신|[Backend] 김윤민|
|:----:|:-----:|:----:|:----:|
|<img src="https://avatars.githubusercontent.com/u/66668478?v=4" alt="avatar" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/48196352?v=4" alt="avatar" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/96279734?v=4" alt="avatar" height="150px" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/66665210?v=4" alt="avatar" height="150px" width="150px" /> |
|[sunny-yo](https://github.com/sunny-yo)|[ssj9398](https://github.com/ssj9398)|[Shinnybest](https://github.com/Shinnybest)|[JerryAllMighty](https://github.com/JerryAllMighty)|

<br>

---

<h3><b>🎫 프로젝트 소개 🎫</b></h3>

### ✈ 여행의 시작부터 끝까지, triPlan

- "여행과 계획을 한 번에" <br>
- 함께하는 여행, 계획과 기록도 한 번에 같이 !
<br><br> 

<h3><b>🎞 프로젝트 시연영상 🎞</b></h3>

<!-- [![Video Label]()]() -->

<br>

---

<br>

<h3><b>서비스 아키텍처(프론트엔드)</b></h3>
<br>

<img src="https://user-images.githubusercontent.com/66668478/162549628-6c4e8327-370a-449c-94a7-760843b5dd56.png" alt="프론트엔드 아키텍처" />

<br>

---

<br>
<h3 align="center"><b>🛠 기술 스택 및 라이브러리 🛠</b></h3>
설명 적기
<ul>
    <li>React</li>
    <li>Redux</li>
    <li>tailwindCSS, postCSS</li>
    <li>react-redux, redux-logger</li>
    <li>react-router-dom</li>
    <li>axios</li>
    <li>lodash</li>
    <li>moment</li>
    <li>sockjs-client, stompjs</li>
    <li>react-copy-to-clipboard</li>
    <li>react-datepicker</li>
    <li>eslint, prettier</li>
</ul>
</br>

---
<br><br>

<h3 align="center"><b>✏ Trouble Shooting ✏</b></h3>
<br>
<details>
    <summary>
        <b>리덕스 스토어 모듈 재구성 : 페이지 이동마다 작은 단위로 나뉘어진 각기 다른 get api로 데이터를 불러오는 구조 (리덕스 스토어 모듈 구성에 통일성 부족, 많은 수의 get api) </b>
    </summary>
    <br>해결 : 프로젝트 특성에 맞게 리덕스 스토어 모듈 구성, 하나의 모듈에 필요한 데이터를 하나의 get api로 수정

</details>
