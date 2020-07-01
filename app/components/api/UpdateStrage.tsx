import { useEffect } from 'react';
import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';
import { bindActionCreators } from 'redux';
import { updateProfile } from '@/store/profile/action';
import { updateStock } from '@/store/stock/action';

function UpdateStrage({ value, username, place, updateStock, updateProfile }) {
  useEffect(() => {
    // 初期値のチェック
    const isInit = !value && !username && !place;

    if (isInit) {
      // 読み込み直後はlocalStrageの値をstateに反映
      const strage = localStorage.getItem('acnh-turnip-tracker');
      const props = strage ? JSON.parse(strage) : undefined;
      if (props) {
        let profile: {
          username: string;
          place: string;
        };
        updateStock(props.stock || []);
        if (props.profile) {
          profile = props.profile;
        } else {
          profile = {
            username: '?',
            place: '?',
          };
        }
        updateProfile(profile);
      }
    } else {
      // state更新時はlocalStrageへ更新を書き込み
      const payload: {
        stock?: number[];
        profile?: {
          username?: string;
          place?: string;
        };
      } = {
        stock: value,
        profile: {
          username,
          place,
        },
      };

      localStorage.setItem('acnh-turnip-tracker', JSON.stringify(payload));
    }
  }, [value, username, place]);

  return null;
}

const mapStateToProps = (state: AllState) => ({
  value: state.stock.value,
  username: state.profile.username,
  place: state.profile.place,
});

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: bindActionCreators(updateProfile, dispatch),
    updateStock: bindActionCreators(updateStock, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStrage);
