# 33기 1차 프로젝트 1팀 남바완
![namba1_logo](https://user-images.githubusercontent.com/72453080/171790066-206e9591-15f3-4ba0-97be-413f21d13694.png)

[🍽️시연영상 보러가기](https://youtu.be/KlmscbOsnMc)

<br/>

## 🌼 프로젝트 소개 🌼


* 밀키트를 판매하는 커머스 사이트를 선정했습니다.
* 짧은 기간동안 개발에 집중할 수 있도록 디자인과 기획 일부를 [쿡킷 사이트](https://www.cjcookit.com/pc/main)를 참조하여 학습목적으로 만들었습니다.
* 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

<br/>

## 🌼 개발 인원 및 기간 🌼
**개발기간** : 2022/05/24~2022/06/04

<br/>

**개발인원 및 파트** : 
#### Frontend
- 김혜수 🐷 : Signup Page, Signin Page, Footer
- 박주영 🍋 : Review Page
- 천은별 🌟 : Menu Page
- 최현민 🐜 : Main Page, Nav

#### Backend
- 임한구 🎅🏻

<br/>

## 🌼 기술 🌼
**Front-End** : React.js 
<br/>
**Back-End** : Python, Django web framework, Bcrypt, MySQL, pyjwt
<br/>
**Common** : Git-Hub, slack, trello, AWS

<br/>

## 🌼 페이지별 구현 사항 🌼

#### Signup Page, Signin Page, Footer
||Signup Page|
|------|---|
|Description|-아이디(이메일 형식으로'@','.'포함)/비밀번호(숫자,영문,특수문자 1자 이상 총 8자 이상)<br>-두 가지 충족 시 버튼 활성화 기능 구현<br>-회원가입 클릭 시 회원가입 페이지로 이동|

||Signin Page|
|------|---|
|Description|-아이디(이메일 형식으로'@','.'포함)/비밀번호(숫자,영문,특수문자 1자 이상 총 8자 이상) 두 가지 충족 시 버튼 활성화 기능 구현<br>-휴대폰 번호,생년월일 입력 시 자동 하이픈 생성<br>-checkbox 전체동의 또는 (필수) 부분 선택<br>-위 내용 유효성 검사하여 조건 충족 시 로그인 버튼 활성화|

||Footer|
|------|---|
|Description|쿡킷 웹사이트에서 참고하여 일부 내용 수정 후 완성|

<br/>

#### Main Page, Nav
||Main Page|
|------|---|
|Description|- 메인, 리뷰 캐러셀 기능 구현 <br/> - Query Parameter를 사용해 사용자가 맛을 선택하면 맛에 해당하는 상품 렌더링 기능 구현 <br/> - fetch 함수로 백엔드에게 데이터 요청하여 상품 리스트를 구성 <br/> - Path Parameter를 이용해 메뉴 리스트에서 한 상품을 클릭시 해당 상품 상세 페이지로 이동 <br/> |
|담당자 repo|- https://github.com/cham-min/wecode-1st-project |

||Nav|
|------|---|
|Description|- map 함수를 사용하여 nav바 구성을 간결화|

<br/>

#### Menu Page
||Menu Page|
|------|---|
|Description|- fetch 함수를 사용하여 백엔드에게 데이터 요청 <br/> - Path Parameter를 이용해 메뉴 리스트에서 한 상품을 클릭시 해당 상품 상세 페이지로 이동  <br/> - Query Parameter를 사용해 현재 url 주소를 변경하여 카테고리 및 정렬, 검색 기능 구현 <br/> - 컴포넌트를 재사용하여 메뉴 리스트 구현 (map 한수 사용)|

<br/>

||Product Detail Page|
|------|---|
|Description|- 수량 및 가격 변경 기능 구현 <br/> - Grid 레이아웃으로 반응형 페이지로 변경|

<br/>

#### Review Page
||Review Page|
|------|---|
|Description|- 베스트 리뷰 캐러셀 기능 구현 <br/> - 리뷰 검색 기능 구현 <br/> - 리뷰쓰기 기능 구현 <br/> - 포토리뷰 모아보기 필터 기능 구현 <br/> - 리뷰 리스트 페이지네이션 구현|
|담당자 repo|https://github.com/parkjooyoung0608/33-1st-Namba1-frontend|

<br/>

## 🌼 프로젝트 진행 과정 🌼
||Trello|Daily Standup Meeting|
|------|---|---|
|협업 방식|칸반보드를 활용한 회의록 작성 및 진행상황 공유|매일 아침 30분동안 진행사항과 오늘 할 작업 내용 공유|
|IMG|![image](https://user-images.githubusercontent.com/72453080/172017656-5a83e3f5-34c4-44b8-b600-39ed7c6600d0.png)|![image](https://user-images.githubusercontent.com/72453080/172017691-c160d276-3004-4dbc-966b-d761d8c749b8.png)|



