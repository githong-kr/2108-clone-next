import fetch from 'isomorphic-unfetch';

const name = ({ user, time }) => {
  const userName = user && user.name;
  return (
    <div>
      {userName}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'jerrynim' } }],
    fallback: true,
  };
}

export default name;
