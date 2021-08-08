import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const userName = user && user.name;
  return <div>{userName}</div>;
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return { props: {} };
  }
};

export default name;
