import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const profileActions = {
  updatePlace: actionCreator<string>('ACTIONS_UPDATE_PLACE'),
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
  updateComment: actionCreator<string>('ACTIONS_UPDATE_COMMENT'),
};
