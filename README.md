# <p align="center">항해99 실전프로젝트, TriPlan [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhaesoo9410&count_bg=%23EB8B10&title_bg=%23684327&icon=&icon_color=%23E7E7E7&title=VISIT&edge_flat=false)](https://github.com/24hours-not-enough) </p> 
<h4 align="center">📆 2022.03.04 ~ 2022.04.08</h4>
<p align="center"><img src="https://user-images.githubusercontent.com/66668478/168336777-24c13562-38da-4bae-9666-386b64415861.png" width="50%" height="auto" /></p>
<br />

## 🎫 서비스 소개 🎫

#### ✈ 여행의 시작부터 끝까지, triPlan
triplan(트리플랜)은 함께 여행 계획을 짜고, 공유할 수 있는 서비스입니다. <br/>
내가 만든 여행 계획에 친구를 초대하고, 채팅을 통해 함께 계획을 만들어갈 수 있습니다. <br/>
가고 싶은 장소를 내 계획에 추가할 수 있고, 북마크를 해두고 지도를 통해 확인할 수 있습니다.

### [triPlan 둘러보기](https://triplan.co.kr)

<br />

## 서비스 아키텍처(프론트엔드)
<p>
<img src="https://user-images.githubusercontent.com/66668478/168338815-1d73e839-a27d-4ee9-b544-e2bb75eb2065.png" alt="프론트엔드 아키텍처" width="30%" />
<img src="https://user-images.githubusercontent.com/66668478/168338804-415b8f76-9289-47b4-b6c7-08af65b7bb32.png" alt="프론트엔드 아키텍처" width="65%" />
</p>

<br>

## 🛠 기술 스택 및 라이브러리 🛠
<ul>
    <li>React</li>
    <li>Redux (redux-toolkit, react-redux)</li>
    <li>tailwindCSS, postCSS</li>
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

## ✏ Trouble Shooting ✏
<details>
    <summary>
        <b>리덕스 스토어 모듈 재구성 : 페이지 이동마다 작은 단위로 나뉘어진 각기 다른 get api로 데이터를 불러오는 구조 (리덕스 스토어 모듈 구성에 통일성 부족, 많은 수의 get api) </b>
    </summary>
    <br>해결 : 프로젝트 특성에 맞게 리덕스 스토어 모듈 구성, 하나의 모듈에 필요한 데이터를 하나의 get api로 수정

</details>

<br>

## 📌 팀원 소개
- <b>FrontEnd</b>
    - 김선주(팀장) https://github.com/sunny-yo
    - 원동환 https://github.com/endol007
- <b>BackEnd</b>
    - 손성진(부팀장) https://github.com/ssj9398
    - 김윤민 https://github.com/JerryAllMighty
    - 김효신 https://github.com/Shinnybest
- <b>Designer</b>
    - 정혜민
