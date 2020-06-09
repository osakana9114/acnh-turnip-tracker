import App, { Container } from 'next/app';
import GlobalHeader from '@/components/layout/header';
import GlobalNavi from '@/components/layout/navigation';
import styles from '@/layout/page.module.scss';
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
