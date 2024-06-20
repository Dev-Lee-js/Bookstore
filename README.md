<div align="center">
 <img src="https://raw.githubusercontent.com/Dev-Lee-js/Bookstore/main/fe/src/assets/images/logo.png"/>
  <h1>도서 판매 사이트</h1>  
</div>

## 💡 프로젝트 소개

도서 판매 사이트를 제작했습니다.

## 🎬 프로젝트 진행상황

### ✔︎ 진행기간 : 2024.2.19 ~ 3.08

## 🛠 사용한 기술 스택

### BackEnd

- bcrypt
- express-mysql-session
- express-session
- express-validator
- mysql2
- nodemon

### FrontEnd

- faker-js/faker
- react-slick
- slick-carousel
- Axios
- tanstack Query
- msw
- react-hook-form
- zustand
- styled-components

## 🛠 주요 기능

### ✔︎ 로그인/회원가입/비밀번호 초기화

- 로그인시 서버에서 session ID를 발급해주고 클라이언트는 쿠키에 session ID를 저장합니다.
- 이후 인증이 필요한 요청마다 쿠키를 헤더에 담아서 보냅니다.
- 회원가입시 bcrypt를 이용해서 사용자 비밀번호를 암호화 했습니다.
- react-hook-form를 이용해서 form 데이터 유효성 검사를 진행했습니다.
- 비밀번호 초기화 기능을 구현했습니다.

#### 로그인

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/543345d7-f9e3-4830-b9e8-901933900831">

#### 회원가입

  <img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/b09c0703-8916-4835-9762-b99048cccbc8">

#### 비밀번호 초기화

  <img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/6ebdb011-9603-4f5f-85f0-8b7652f3d44a">

### ✔︎ 메인 페이지

- slick-carousel, react-slick를 이용해서 슬라이드 기능을 구현했습니다.
- 드롭다운 메뉴 기능을 구현했습니다.

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/c3dc6593-b97f-48a0-85ee-0743ed106877">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/671fc7f5-8bbc-4c80-a6f1-c98026d8ff58">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/8557d257-ad23-4783-a791-3ad388c56ea9">

### ✔︎ 도서 목록 페이지

- tanstack/react-query에 useInfiniteQuery와 intersection observer API를 사용해서 무한 스크롤을 구현했습니다.
- 도서목록을 리스트 형식 또는 그리드 형식으로 볼 수 있게 스위칭 기능을 구현했습니다.
- 카테고리별로 필터링 기능을 구현했습니다.

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/ff53f7eb-f0f9-484f-bc81-2dea4d688f61">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/e98fb46d-4f2b-4e1a-92c6-06d1512a8cda">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/c4ab1724-b7ff-49b9-9f0d-73a97a0bcde7">

### ✔︎ 도서 상세 페이지

- 리뷰 작성 기능을 구현했습니다.
- 좋아요 기능을 구현했습니다. 좋아요가 완료되면 토스트 메세지가 나오도록 구현했습니다.
- 장바구니 담기 기능을 구현했습니다.

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/7502898f-61f4-47a4-beb8-2550116f9750">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/ccac6d84-194c-440d-9225-e30e122cc322">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/49ed4e30-c178-43e5-a278-f209ebfed87c">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/024e2ec1-28d1-4110-904b-75f31a1e0ba1">

### ✔︎ 장바구니 페이지

- 장바구니에 담겨 있는 도서 삭제 기능을 구현했습니다.
- 구매하고 싶은 도서만 체크하면 그에 따라 총 수량, 총 금액이 표현됩니다.

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/7d1fde6f-fe40-4b9b-9f7a-14960fdadc74">

### ✔︎ 주문하기 페이지

- Daum에서 무료로 제공해주는 우편번호 API를 이용해서 주소찾기 기능을 구현했습니다.
- 결제를 진행하면 주문 내역으로 이동됩니다.

<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/2187efb3-4faa-466a-843d-8a6240e78682">
<img width="300" src="https://github.com/Dev-Lee-js/Bookstore/assets/84204779/ce8d0ff6-4140-4f9b-917e-49300c092c6d">
