import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const dateActions = {
  updateToday: actionCreator<Date>('ACTIONS_UPDATE_TODAY'),
};
