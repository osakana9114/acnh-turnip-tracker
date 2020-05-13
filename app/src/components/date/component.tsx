import React from 'react';
import { DateState } from './reducers';

interface OwnProps {}
type DateProps = OwnProps & DateState;

export const ObjectToday: React.SFC<DateProps> = (props: DateProps) => {
  return (
    <div className="o-today">
      <p>{props.today}</p>
    </div>
  );
};
