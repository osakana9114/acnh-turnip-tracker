import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const layoutActions = {
  updateCurrent: actionCreator<string>('ACTIONS_UPDATE_CURRENT'),
};
