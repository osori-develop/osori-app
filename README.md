# 오소리 앱
충북학사 서/동서울관 앱

# 개발 스택
React-Native

# 파일 구조
```
├── asset
│   ├── image
│   │   ├── icons
│   │   └── logo
│   │       └── logo.png
│   └── lottie
├── container
│   ├── home-tab
│   │   └── HomeMainContainer.tsx
│   ├── index.ts
│   └── my-tab
│       └── MyMainContainer.tsx
├── navigation // 
│   ├── HomeStackNavigation.tsx
│   ├── Main.tsx
│   ├── MyStackNavigation.tsx
│   ├── TabNavigation.tsx
│   └── index.ts
├── pages 
│   ├── home-tab
│   │   └── HomeMain.tsx
│   ├── index.ts
│   └── my-tab
│       └── MyMain.tsx
├── presenter 
│   ├── home-tab
│   │   └── HomeMainPresenter.tsx
│   ├── index.ts
│   └── my-tab
│       └── MyMainPresenter.tsx
├── types
│   └── images.d.ts
└── util
```
+ `assets` : png, jpg, lottie 등 이미지 에셋
+ `container` : hooks를 호출하고 부르는 비즈니스 로직 담당
+ `navigation` : 라우팅 담당
+ `pages` : container를 호출하는 최상위 페이지
+ `presenter` : 비즈니스 로직이 아닌 디자인과 뷰 담당

# 구현 예정 기능 (최우선)
<img width="711" alt="image" src="https://user-images.githubusercontent.com/68817095/180480463-43a34eba-eb87-4e51-8a26-2ad9f6a495cb.png">

+ 스플래시 화면
+ 로그인 화면
+ 식사 안내
+ 게시판
