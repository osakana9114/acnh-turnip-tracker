import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile } from '@/store/profile/action';
import { AllState } from '@/store/index.ts';
// style
import styles from '@/pagestyle/profile.module.scss';

const Page = ({ title, username, place, updateProfile }) => {
  // submit
  async function submitForm(e) {
    e.preventDefault();
    const payload = {
      username: e.target.username.value,
      place: e.target.place.value,
    };
    const res = await updateProfile(payload);
    const complete = await Router.push('/');
  }

  return (
    <main className={`${styles['p-profile']} l-main`}>
      <p>{title}</p>
      <form onSubmit={submitForm}>
        <dl>
          <dt>自分の名前</dt>
          <dd>
            <input name="username" type="text" defaultValue={username} />
          </dd>
          <dt>島の名前</dt>
          <dd>
            <input name="place" type="text" defaultValue={place} />島
          </dd>
        </dl>
        <div>
          <button>保存</button>
        </div>
        <div>
          <Link href="/profile/form/">
            <button type="button">もどる</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

const mapStateToProps = (state: AllState) => ({
  username: state.profile.username,
  place: state.profile.place,
});

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: bindActionCreators(updateProfile, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
