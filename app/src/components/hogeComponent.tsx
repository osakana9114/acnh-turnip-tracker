import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
  return (
    <div>
      <div className="field">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={props.name}
          onChange={e => props.updateName(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={props.email}
          onChange={e => props.updateEmail(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};
