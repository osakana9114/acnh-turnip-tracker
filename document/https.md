# mkcert で証明書を作成する

macOS での動作を確認しています。

homebrew から[mkcert](https://github.com/FiloSottile/mkcert)をインストールします。

```
brew install mkcert
```

Firefox の場合は nss もインストールします。

```
brew install nss
```

ローカルに認証局を作成します。

```
mkcert -install
```

証明書を作成します。
「システム環境設定」の「ネットワーク」を開き、「詳細」ボタンをクリックします。「TCP/IP」のタブの「IPv4 アドレス:」をコピーして、以下のように実行します。

```
mkcert <IPアドレス>
```

`/Users/<ユーザー名>/<IPアドレス>-key.pem`と`/Users/<ユーザー名>/<IPアドレス>.pem`が生成されます。

`/app/.env`の`HTTPS_KEY`と`HTTPS_CERT`に証明書へのパスを設定すれば完了です。
