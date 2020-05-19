import App, { Container } from 'next/app';
import Router from 'next/router';
import Link from 'next/link';
import '../style/style.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <header>ヘッダー</header>
        <Component {...pageProps} />
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className="u-link">index</a>
              </Link>
            </li>
            <li>
              <Link href="/analytics">
                <a className="u-link">analytics</a>
              </Link>
            </li>
            <li>
              <Link href="/research">
                <a className="u-link">research</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a className="u-link">profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
