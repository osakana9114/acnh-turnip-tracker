import { useEffect } from 'react';
import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';

function UpdateStrage({ value, name, place }) {
  useEffect(() => {
    const payload = {
      stock: value,
      profile: {
        name,
        place,
      },
    };
    localStorage.setItem('acnh-turnip-tracker', JSON.stringify(payload));
  }, [value, name, place]);

  return null;
}

const mapStateToProps = (state: AllState) => ({
  value: state.stock.value,
  name: state.profile.name,
  place: state.profile.place,
});

export default connect(mapStateToProps, null)(UpdateStrage);
