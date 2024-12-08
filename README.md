### ✅ 브랜치 사용 방법
- main은 최종 배포용 브랜치 이므로 모든 개발 작업은 이슈 발행 후 dev 브랜치 하위의 feat 브랜치를 각각 생성해 진행부탁드립니다.
- 개발 진행시 반드시 dev 브랜치가 아닌 본인이 생성한 feat 브랜치에서 작업 중인지 자주 확인 부탁드립니다. 깃 충돌이 발생하는 가장 큰 원인입니다.
---

### ✅ Issue & PR
- 이슈 생성시 이슈 템플릿에 맞춰 본인이 작업할 내용을 간단히 기록해 주세요. 팀원간의 진행 상황 파악과 버그 발생시 코드 파악을 원할히 하기 위한 장치입니다.
- PR 진행시 모든 멤버들에게 PR 사실을 알려 주세요. merge는 2명 이상의 승인을 받아야 가능합니다. (PR 역시 main 브랜치가 아닌 dev 브랜치로 해주셔야 해요!)
---

### ✅ 충돌 방지 & 대응 방법
- dev 브랜치로 새로운 변경사항이 merge 되었을 때 마찬가지로 모든 팀원에게 공유해 주세요.
- 새로운 merge가 발생하면 모든 팀원은 작업중이던 자신의 로컬 브랜치를 최신 상태로 업데이트 해야 합니다. 그렇지 않으면 충돌이 발생할 수 있어요.
- 새로운 변경사항을 pull 했을 때 본인의 작업 내용과 충돌이 발생한다면, 변경된 코드를 작성한 팀원과 상황을 공유하고 충돌을 해결합니다.
---

```
Plaist
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.tsx
│  ├─ api
│  │  ├─ api.ts
│  │  └─ axios.ts
│  ├─ css
│  │  ├─ index.css
│  │  └─ tailwind.css
│  ├─ layoutes
│  │  └─ RootLayout.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Category.tsx
│  │  ├─ CreateCourse.tsx
│  │  ├─ Main.tsx
│  │  └─ MyPage.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
