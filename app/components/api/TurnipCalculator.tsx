import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { calculateStock } from '@/store/stock/action';
import { AllState } from '@/store/index.ts';

function TurnipCalculator({ value }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        // 値
        const str: string = value.join('-').replace(/null/g, '').replace(/\-+$/g, '');
        // リクエスト
        try {
          const res = await fetch(`/api/turnip-calculator/?f=${str}`);
          // const res = await fetch(`https://api.ac-turnip.com/data/?f=${str}`);
          const chartData = await res.json();
          const minPattern: number[] = [value[0] || 90];
          const maxPattern: number[] = [value[0] || 110];
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
  }, [value]);

  return null;
}

const mapStateToProps = (state: AllState) => ({
  value: state.stock.value,
});

export default connect(mapStateToProps, null)(TurnipCalculator);
