import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { calculateStock } from '@/store/stock/action';
import { AllState } from '@/store/index.ts';

function TurnipCalculator({ price }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        // 値
        const str: string = price.join('-').replace(/null/g, '').replace(/\-+$/g, '');
        // リクエスト
        try {
          // カブ価予測API が ローカルIPでCROSになるので、fetchにmode設定。
          const res = await fetch(`/api/turnip-calculator/?f=${str}`);
          // const res = await fetch(`https://api.ac-turnip.com/data/?f=${str}`);
          const chartData = await res.json();
          const minPattern: number[] = [price[0] || 90];
          const maxPattern: number[] = [price[0] || 110];
          chartData.minMaxPattern.map(val => {
            minPattern.push(val[0]);
            maxPattern.push(val[1]);
          });
          dispatch(
            calculateStock({
              minPattern,
              maxPattern,
              minWeekValue: chartData.minWeekValue,
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    })();
    return () => {
      unmounted = true;
    };
  }, [price]);

  return null;
}

const mapStateToProps = (state: AllState) => ({
  price: state.stock.price,
});

export default connect(mapStateToProps, null)(TurnipCalculator);
