import App, { Container } from 'next/app';
import Router from 'next/router';
import GlobalHeader from '../components/header';
import GlobalNavi from '../components/navigation';
import styles from '../style/layout/page.module.scss';
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
      <div className={`${styles['l-page']}`}>
        <GlobalHeader />
        <Component {...pageProps} />
        <GlobalNavi />
      </div>
    );
  }
}
