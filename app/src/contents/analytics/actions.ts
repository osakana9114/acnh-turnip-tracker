import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const analyticsActions = {
  addTrading: actionCreator<Object>('ACTIONS_ADD_TRADING'),
  updateTrading: actionCreator<Object>('ACTIONS_UPDATE_TRADING'),
  addPrice: actionCreator<Object>('ACTIONS_ADD_PLICE'),
  updatePrice: actionCreator<Object>('ACTIONS_UPDATE_PLICE'),
};
