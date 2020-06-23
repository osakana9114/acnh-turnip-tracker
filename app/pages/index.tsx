import React, { useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '@/store/stock/action';

// store
import { wrapper } from '../store/';

// components
import Stock from '@/components/page/Stock';

// interface
interface Props {
  updateStock: any;
}

const Page: NextPage<Props> = ({ updateStock }) => {
  useEffect(() => {
    const strage = localStorage.getItem('acnh-turnip-tracker');
    const json = JSON.parse(strage);
    const payload = json.stock;
    if (payload) updateStock(payload);
  }, []);

  return <Analytics title="カブ価の推移など" />;
};

const mapDispatchToProps = dispatch => {
  return {
    updateStock: bindActionCreators(updateStock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Page);
