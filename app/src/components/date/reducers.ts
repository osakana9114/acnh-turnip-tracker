import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { dateActions } from './actions';

const now = new Date();

function dateText(date: Date) {
  const weekText: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth();
  const nowDate = date.getDate();
  const nowWeek = date.getDay();
  const nowTime = date.getHours() < 12 ? '午前' : '午後';
  return `${nowYear}年${nowMonth}月${nowDate}日(${weekText[nowWeek]}) ${nowTime}`;
}

// 型指定
export interface DateState {
  today: string;
}

// 初期値
const initState: DateState = {
  today: dateText(now),
};

export const dateReducer = reducerWithInitialState(initState).case(
  dateActions.updateToday,
  (state, today) => Object.assign({}, state, { today })
);
