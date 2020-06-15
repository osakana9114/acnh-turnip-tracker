# acnh-turnip-tracker

## usage

```
$ cd app
```

### Next.js

#### 初期設定

[app/.env.example](app/.env.example)を複製し、`app/.env`を設置

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

→[ディレクトリ詳細](document/directory.md)

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

## https で起動できるようにする

1. [サーバ証明書がない場合は作成](document/https.md)
1. app/.env の `HTTPS_KEY` と　`HTTPS_CERT` へ作成した key と cert へのパスを指定
1. Next.js を起動すると、設定が正しければ https で表示
