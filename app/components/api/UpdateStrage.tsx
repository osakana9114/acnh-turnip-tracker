import { useEffect } from 'react';
import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';

function UpdateStrage({ value, username, place }) {
  useEffect(() => {
    const payload = {
      stock: value,
      profile: {
        username,
        place,
      },
    };
    console.log(payload);
    localStorage.setItem('acnh-turnip-tracker', JSON.stringify(payload));
  }, [value, username, place]);

  return null;
}

const mapStateToProps = (state: AllState) => ({
  value: state.stock.value,
  username: state.profile.username,
  place: state.profile.place,
});

export default connect(mapStateToProps, null)(UpdateStrage);
