import React from 'react';
import { ProfileState } from '../reducers';
import { ProfileUpdate } from './container';

interface OwnProps {}
type ProfileProps = OwnProps & ProfileState & ProfileUpdate;

export const UpdateTemplate: React.SFC<ProfileProps> = (props: ProfileProps) => {
  return (
    <div className="p-profile">
      <form action="">
        <div>
          <input
            type="text"
            value={props.place}
            onChange={e => props.updatePlace(e.currentTarget.value)}
          />
          島
        </div>
        <div>
          <input
            type="text"
            value={props.name}
            onChange={e => props.updateName(e.currentTarget.value)}
          />
        </div>
        <div>
          <textarea
            defaultValue={props.comment}
            onChange={e => props.updateComment(e.currentTarget.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
