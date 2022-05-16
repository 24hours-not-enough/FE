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
<br />

## 🏠 서비스 아키텍처(프론트엔드)
<br />
<p>
<img src="https://user-images.githubusercontent.com/66668478/168338815-1d73e839-a27d-4ee9-b544-e2bb75eb2065.png" alt="프론트엔드 아키텍처" width="30%" />
<img src="https://user-images.githubusercontent.com/66668478/168338804-415b8f76-9289-47b4-b6c7-08af65b7bb32.png" alt="프론트엔드 아키텍처" width="65%" />
</p>

<br />
<br />

## 🎨 페이지 및 기능

#### 메인
> - 위치 검색
>   - 검색한 장소 내 여행 계획에 추가하기
>   - 검색한 장소 북마크하기

#### 로그인
> - 소셜 로그인 : 카카오, 구글
> - 첫 로그인 시 프로필, 닉네임 입력

#### 계획
> - 여행 계획 생성하기
>   - 친구 초대하기(debounce를 사용한 유저 검색 기능 사용)
> - 예정된 계획, 기간이 지난 계획, 삭제된 계획(휴지통)의 컴포넌트 구분
> - 계획 상세 -> 3가지 뷰 : 계획, 지도, 채팅
>   - 날짜별 계획 생성 : 위치, 메모 저장 가능
>   - 계획에 저장된 위치를 순서에 따라 동선을 확인할 수 있도록 숫자와 점선으로 표기된 지도
>   - 웹소켓을 사용해 같은 계획을 공유하고 있는 유저와 채팅 (stompjs, sockjs-client 라이브러리 사용)

#### 마이페이지
> - 프로필, 닉네임 수정
> - 북마크한 장소들 지도에서 확인 및 클릭 시 내 계획에 추가하는 기능
> - 로그아웃, 회원탈퇴

<br />
<br />

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

<br />
<br />

## ✏ Trouble Shooting ✏
<ul>
    <li>
    <p><b>리덕스 스토어 모듈 재구성</b><p>
    -> 문제 : 페이지 이동마다 작은 단위로 나뉘어진 각기 다른 get api로 데이터를 불러오는 구조 (리덕스 스토어 모듈 구성에 통일성 부족, 많은 수의 get api) <br />
    -> 해결 : 프로젝트 특성에 맞게 리덕스 스토어 모듈 구성, 하나의 모듈에 필요한 데이터를 하나의 get api로 수정
    </li>
    <li>
    <p><b>계획 중복 수정 방지를 위한 api 통신 추가</b><p>
    -> 문제 : 계획을 공유하고 있는 유저가 동시에 계획을 수정할 때 마지막에 수정한 정보가 저장이 되는 문제<br />
    -> 해결 : 수정 버튼, 완료 버튼을 눌렀을 때 수정 여부를 DB에 저장하고 확인할 수 있는 api 통신을 추가
    </li>
</ul>

<br />
<br />

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
