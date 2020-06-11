import Link from 'next/link';
import { connect } from 'react-redux';
import Clock from '@/components/object/Clock';
import AddCount from '@/components/object/AddCount';
import StockChart from '@/components/object/StockChart';
import StockForm from '@/components/object/StockForm';

const Page = ({ title, linkTo, tick }) => (
  <div>
    <h1>(ウ){title}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <StockChart />
    <StockForm />
    <AddCount />
  </div>
);

export default connect(state => state)(Page);
