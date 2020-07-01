import { NextPage } from 'next';
import { connect } from 'react-redux';

// component
import Form from '@/components/page/Profile/Form';

const Page: NextPage = () => {
  return <Form title="プロフィールを編集するフォーム" />;
};

export default connect(null, null)(Page);
