import React from 'react';
import { NextPage } from 'next';

import { connect } from 'react-redux';

// components
import Profile from '@/components/page/Profile/';

const Page: NextPage = () => <Profile title="プロフィール" />;

export default connect(null, null)(Page);
