import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
          <meta name="apple-mobile-web-app-title" content="ウリとまめつぶ"></meta>
          <link rel="icon" type="image/png" sizes="32x32" href="/img/ico_32x32.png" />
          <link rel="icon" type="image/png" sizes="152x152" href="/img/ico_152x152.png" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
          <meta name="theme-color" content="#19c8b9" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
