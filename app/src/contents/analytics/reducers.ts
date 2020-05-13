import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { analyticsActions } from './actions';

// 型指定
// 売買
export interface TradingState {
  id: string;
  create: Date;
  update: Date;
  price: number;
  count: number;
  place: string;
}
// カブ価
export interface PriceState {
  id: string;
  create: Date;
  update: Date;
  price: number;
}
export interface AnalyticsState {
  trading: TradingState[];
  price: PriceState[];
}

// 初期値
const initTradingState: TradingState = {
  id: '00000000',
  create: new Date(),
  update: new Date(),
  price: 100,
  count: 10,
  place: '',
};
const initPriceState: PriceState = {
  id: '00000000',
  create: new Date(),
  update: new Date(),
  price: 100,
};
const initState: AnalyticsState = {
  trading: [initTradingState],
  price: [initPriceState],
};

export const analyticsReducer = reducerWithInitialState(initState)
  .case(analyticsActions.addTrading, (state, trading) => Object.assign({}, state, { trading }))
  .case(analyticsActions.updateTrading, (state, trading) => Object.assign({}, state, { trading }));
