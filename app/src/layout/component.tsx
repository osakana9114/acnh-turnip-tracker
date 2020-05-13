import React from 'react';
import { LayoutState } from './reducers';
import Header from './header/container';
import Navigation from './navigation/container';
import Profile from '../contents/profile/index';
import Analytics from '../contents/analytics/index';
import Research from '../contents/research/index';
import './style.scss';

interface OwnProps {}
type LayoutProps = OwnProps & LayoutState;

export const Layout: React.SFC<LayoutProps> = (props: LayoutProps) => {
  return (
    <div className="l-default">
      <Header />
      <main className="l-body" data-current={props.currentContent}>
        <Profile />
        <Analytics />
        <Research />
      </main>
      <Navigation />
    </div>
  );
};
