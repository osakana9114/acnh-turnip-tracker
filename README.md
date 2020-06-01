# acnh-turnip-tracker

## usage

```
$ cd app
```

### Next.js

#### 初期設定

Next.js

```
app$ npm ci
```

amplify

```
app$ amplify init
```

#### 起動

```
app$ npm run dev
```

### amplify 反映

```
app$ amplify push
```

## directory

2020/06/01

```
├── app
│ ├── amplify                    amplify関連
│ │ ├── #current-cloud-backend
│ │ ├── backend
│ │ └── team-provider-info.json $amplify init で必要
│ ├── components                インクルードして使うパーツ
│ │ ├── header.tsx
│ │ └── navigation.tsx
│ ├── next-env.d.ts
│ ├── next.config.js            Next.jsのカスタム設定
│ ├── package-lock.json
│ ├── package.json
│ ├── pages                     ルーティングするテンプレート
│ │ ├── todo                    デフォルトのamplifyAPIサンプル
│ │ │ └── [id].tsx              〃
│ │ ├── example_todo.tsx        〃
│ │ ├── index_bk.tsx            Next.jsのデフォルトIndexのバックアップ
│ │ ├── \_document.tsx          htmlのテンプレート
│ │ ├── \_app.tsx               body内のテンプレート
│ │ ├── index.tsx               最初に表示されるページ
│ │ ├── profile.tsx
│ │ ├── ranking.tsx
│ │ └── trading.tsx
│ ├── public                    静的データ
│ │ ├── favicon.ico
│ │ ├── ico_ranking.svg
│ │ └── vercel.svg
│ ├── schema.graphql            graphql関連、コマンド実行時に生成される
│ ├── src                       API関連、コマンド実行時に生成される
│ │ ├── API.ts
│ │ ├── aws-exports.js
│ │ └── graphql
│ ├── style                     スタイルシート
│ │ ├── \_variable.scss         mixinやfunction、変数のみinclude
│ │ ├── base
│ │ ├── layout
│ │ ├── module                  ページ固有のローカルスコープスタイル置き場
│ │ ├── object
│ │ └── style.scss
│ └── tsconfig.json             コマンド実行時に生成される
└── package.json
```
