import { connect } from 'react-redux';
import Link from 'next/link';
import { AllState } from '@/store/index.ts';
// style
import styles from '@/pagestyle/profile.module.scss';

const Page = ({ title, username, place }) => (
  <main className={`${styles['p-profile']} l-main`}>
    <p>{title}</p>
    <dl>
      <dt>自分の名前</dt>
      <dd>{username}</dd>
      <dt>島の名前</dt>
      <dd>{place}島</dd>
    </dl>
    <div>
      <Link href="/profile/form/">
        <button type="button">編集</button>
      </Link>
    </div>
  </main>
);
const mapStateToProps = (state: AllState) => ({
  username: state.profile.username,
  place: state.profile.place,
});

export default connect(mapStateToProps, null)(Page);
