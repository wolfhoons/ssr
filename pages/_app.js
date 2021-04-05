import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyles';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <title>리액트 ERP</title>
    </Head>
      <GlobalStyle />
      <Component />
    </>
  )
}

export default wrapper.withRedux(withReduxSaga(App));
