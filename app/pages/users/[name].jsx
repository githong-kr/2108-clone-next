import fetch from 'isomorphic-unfetch';
import css from 'styled-jsx/css';
import formatDistance from 'date-fns/formatDistance';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const name = ({ user, repos }) => {
  if (!user || !repos) {
    return null;
  }
  return (
    <>
      <div className="user-contents-wrapper">
        <Profile user={user} />
        <Repositories user={user} repos={repos} />
        <style jsx>{style}</style>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;
  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`, {
      method: 'GET',
      headers: {
        Authorization: `${process.env.GITHUB_TOKEN}`,
      },
    });
    if (userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=update&page=${page}&per_page=10`,
      {
        method: 'GET',
        headers: {
          Authorization: `${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }

    return { props: { user, repos } };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return { props: {} };
  }
};

export default name;
