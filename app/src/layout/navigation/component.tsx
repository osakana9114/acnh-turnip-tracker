import React from 'react';
import { LayoutState } from '../reducers';
import { LayoutActions } from './container';

interface OwnProps {}
type NavigationProps = OwnProps & LayoutActions & LayoutState;

export const GrobalNavigation: React.SFC<NavigationProps> = (props: NavigationProps) => {
  return (
    <nav className="l-navigation">
      {props.contents.map((name, index) => (
        <button
          type="button"
          key={index}
          value={name}
          aria-current={name === props.currentContent ? 'page' : undefined}
          onClick={e => props.updateCurrent(e.currentTarget.value)}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};
