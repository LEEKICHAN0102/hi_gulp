# hi_gulp
- ## [gulp](https://gulpjs.com/docs/en/getting-started/quick-start) 에 대해 학습한 내용을 정리한 레포입니다.

<br />
<br />

### What is Gulp?

- Gulp는 JavaScript 기반의 태스크 러너로, 반복적인 작업(파일 압축, 자바스크립트 파일 번들링, CSS 전처리기 실행, 이미지 최적화 등) 자동화를 위해 사용합니다.

```
1. 자동화된 빌드 시스템: 파일을 감시하고, 변경되면 자동으로 컴파일, 리로드, 최적화 작업을 실행.
2. CSS 전처리기: Sass, Less 등의 전처리기를 사용해 CSS 파일을 자동으로 컴파일.
3. 파일 번들링 및 최적화: JavaScript, CSS, 이미지 파일 등을 압축하여 파일 크기를 줄임.
4. 라이브 리로드: 파일 변경 시 브라우저를 자동으로 새로고침.
5. 플러그인 생태계: 다양한 Gulp 플러그인을 통해 기능을 확장할 수 있음.
```

<br />
<br />

### Why Gulp?

- 웹 개발 시 빌드 작업을 자동화하기 위한 도구가 필요했습니다. Gulp는 이러한 반복 작업을 간단하고 직관적으로 자동화할 수 있어 사용하였습니다.(gulpfile.js에 빌드 작업을 정의하고, gulp 명령어로 쉽게 실행이 가능!)

<br />

### Recently Gulp?

- 최근에는 Webpack이나 Parcel과 같은 모던 번들러들이 대세가 되었고, 특히 React, Next.js 등의 프레임워크에서는 이러한 번들러가 내장되어 있습니다.(CRA 프로젝트 생성 시 자동 설정 or Vite)
- 따라서 Gulp 같은 별도의 도구를 사용할 필요가 줄어들었습니다. Webpack은 파일 의존성 관리, 코드 스플리팅, 트리 쉐이킹과 같은 복잡한 빌드 작업을 자동으로 처리해줍니다.

<br />
<br />

### What is difference of gulp & Webpack?

|               | **Webpack** | **Gulp** |
| ------------- | ----------- | -------- |
| **주된 목적** | **모듈 번들링**: 여러 모듈을 하나의 파일로 묶어 배포 가능하게 함 | **작업 자동화**: 파일 처리, 압축, 최적화 등 반복 작업을 자동화 |
| **주로 사용하는 작업** | 자바스크립트 코드 번들링, 코드 스플리팅, 최신 JS 문법 변환 | CSS 전처리, 이미지 최적화, 라이브 리로드, 파일 변경 감시 |
| **사용 방식** | 모듈 시스템을 기반으로 파일 의존성을 관리하고 번들 파일을 생성 | Task를 정의하고 이를 실행하여 특정 작업을 수행 |
| **번들링 대상** | 자바스크립트, CSS, 이미지, 기타 파일 | 파일을 처리하거나 빌드 작업을 자동화하지만 번들링 역할은 아님 |
| **내장된 기능** | 코드 스플리팅, 트리 쉐이킹, 모듈 시스템을 기반으로 하는 파일 의존성 관리 | 기본적인 파일 처리 외에 복잡한 의존성 관리는 없음 |
| **주된 장점** | 복잡한 웹 애플리케이션의 모듈 관리와 성능 최적화 | 작업을 자동화하여 개발 프로세스의 효율성을 높임 |

