import Header from '../components/Header';

import { useSelector } from 'react-redux';

const Main = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Header />
      <p>메인 페이지</p>
      {isLoggedIn ? <p>로그인중</p> : <p>로그인전</p>}
    </div>
  );
}

export default Main;
