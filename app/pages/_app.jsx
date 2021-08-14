import Header from '../components/Header';
import Font from '../components/Font';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Font />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: IM_Hyemin-Bold;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
