import css from 'styled-jsx/css';

const FontCss = css`
  @font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const Font = () => {
  return (
    <>
      <style jsx>{FontCss}</style>
    </>
  );
};

export default Font;
