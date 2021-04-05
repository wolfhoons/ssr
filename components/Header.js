import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href="/main"><a>메인</a></Link>
      <Link href="/"><a>로그인</a></Link>
      <Link href="/signup"><a>회원가입</a></Link>
    </>
  );
}

export default Header;
