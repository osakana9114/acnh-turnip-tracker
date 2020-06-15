# directory

2020/06/15 版 ディレクトリ解説

```
/app
├── /amplify
├── /components
├── /pages
├── /public
├── /src
├── /store
├── /style
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── schema.graphql
├── server.ts
└── tsconfig.json
```

## amplify

amplify 関連のデータが格納されている。  
`team-provider-info.json`を置き  
`$ amplify init`で初期設定すると、その他のデータが生成される。

```
/amplify
├── /#current-cloud-backend
│   ├── /api
│   │   └── exampletodo
│   ├── /hosting
│   │   └── amplifyhosting
│   ├── amplify-meta.json
│   └── backend-config.json
├── /backend
│   ├── amplify-meta.json
│   ├── /api
│   │   └── exampletodo
│   ├── /awscloudformation
│   │   └── nested-cloudformation-stack.yml
│   ├── backend-config.json
│   └── /hosting
│       └── amplifyhosting
└── team-provider-info.json
```

## components

`/pages/`から呼び出すパーツを切り分けたもの。

```
 /components
 ├── api
 │   └── TurnipCalculator.tsx
 ├── layout
 │   ├── header.tsx
 │   └── navigation.tsx
 ├── object
 │   ├── StockChart.tsx
 │   └── StockForm.tsx
 └── page
     ├── Analytics.tsx
     ├── Profile.tsx
     ├── Ranking.tsx
     └── Trading.tsx
```

- `api` ... Store の変更をトリガーとしてデータ取得するコンポーネント。View を持たない。
- `layout` ... 共通 UI のコンポーネント。
- `object` ... ページ内で使用するコンポーネント。`/app/components/page`の各コンポーネントから呼び出される。
- `page` ... ページのベースとなるコンポーネント。`/app/pages/`の各コンポーネントと 1 対になる。

## pages

Next 規定のディレクトリ。
ここに置いた`js`,`jsx`,`ts`,`tsx`が、  
 置いた階層どおりルーティングされた`React Component`として書き出される。

```
/pages
├── _app.tsx
├── _document.tsx
├── index.tsx
├── profile.tsx
├── ranking.tsx
└── trading.tsx
```

Next.js 規定のテンプレートをカスタマイズするため、  
`_app.tsx`、`_document.tsx`を設置している。

- `_app.tsx` ...`<body>`内部。
- `_document.tsx` ...`<body>`外側。`<html>`や`<head>`など。

## public

画像素材やプラグインなどの  
起動時にそのまま設置される静的データ。

```
/public
├── /img
│   ├── ico_152x152.png
│   └── ico_32x32.png
├── favicon.ico
├── manifest.json
├── sw.js
├── sw.js.map
├── workbox-（乱数）.js
└── workbox-（乱数）.js.map
```

`sw.js`や`workbox-xx.js`の PWA 系データは  
Next の起動時に、PWA サポートパッケージ`next-pwa`により自動生成される。

## src

amplify の API 関連のデータ。  
API を`init`で設定していると、Next 起動時に自動生成される。

```
/src
├── /graphql
│   ├── mutations.ts
│   ├── queries.ts
│   ├── schema.json
│   └── subscriptions.ts
├── API.ts
└── aws-exports.js
```

## store

データを一時格納するグローバルなインスタンス。

```
/store
├── /stock
│   ├── action.ts
│   └── reducer.ts
├── /xxx
│   ├── action.ts
│   └── reducer.ts
└── index.ts
```

- `index.ts` ... store 全体をまとめている親。
- `/xxx/action.ts`,`/xxx/reducer.ts` ... それぞれの action と reducer を設置。

## style

スタイルシートのデータを格納している。

```
/style
├── base
│   ├── _breakpoint.scss
│   ├── _color.scss
│   ├── function
│   │   └── _rem.scss
│   └── mixin
│       ├── _fit.scss
│       └── _rect.scss
├── layout
│   ├── header.module.scss
│   ├── navigation.module.scss
│   └── page.module.scss
├── object
├── page
│   ├── analytics.module.scss
│   ├── profile.module.scss
│   ├── ranking.module.scss
│   └── trading.module.scss
├── _variable.scss
└── style.scss
```

グローバルスタイルの `style.scss`、インポート用の`/base`配下や`_variable.scss`は、拡張子 `.scss`  
その他、ローカルスコープを適用させるスタイル指定ファイルは、拡張子 `.module.scss`

- `style.scss` ... ブラウザ設定リセットなどのグローバルスタイル。
- `_variable.scss` ... `/base`の中身を全てまとめている。これを import すると共通設定やユーティリティが利用できるようになるファイル。
- `/base` ... 共通の変数,`mixin`,`function`など実体のない設定データ。
- `/layout` ... 共通 UI のスタイル。
- `/object` ... コンポーネントパーツごとのスタイル。
- `/page` ... そのページでしか使わないスタイル。
