# bms-fe

뻐네너 매니징 시스템의 프론트레포입니다.  
그나저나 저희 로고 참 커엽죠?

# 기술스택

- React
- zustand 상태관리
- Typescript
- vite
- Storybook
- Axios
- Tanstack-Query 캐싱, 비동기등 ..
- Tanstack-Router 라우팅
- zod 유효성검사
- Eslint

# pnpm 으로 리액트앱 구축

빠르고 버그없음

```bash
> npm i -g pnpm
> 9.5.0
> pnpm create vite
> ✔ Project name: … .
> ✔ Current directory is not empty. Please choose how to proceed: › Ignore files and continue
> ✔ Select a framework: › React
> ✔ Select a variant: › TypeScript + SWC
> pnpm i
> pnpm dev
```

# 스토리북 구축

[참고-공홈](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react)

```bash
> npx storybook@latest init
> pnpm storybook
```
