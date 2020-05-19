import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head />
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
