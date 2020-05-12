import React from 'react';
import { ProfileState } from '../../contents/profile/reducers';

interface OwnProps {}
type HeaderProps = OwnProps & ProfileState;

export const GrobalHeader: React.SFC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="l-header">
      <p>{props.place}島</p>
    </header>
  );
};
