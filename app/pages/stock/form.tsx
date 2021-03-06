import { NextPage } from 'next';
import { connect } from 'react-redux';

// component
import Form from '@/components/page/Stock/Form';

const Page: NextPage = () => {
  return <Form title="カブ価を編集するフォーム" />;
};

export default connect(null, null)(Page);
