import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    
    const body = {
      id: id,
      password: password,
    };
    console.log(body);
    setLoginDone(true);
  }, [id, password]);
  
  return (
    <>
      <Head>
        <title>로그인 | 리액트 ERP</title>
      </Head>
      <form onSubmit={onSubmit}>
        <div>
          <label>아이디</label>
          <input type="id" value={id} onChange={onChangeId} />
          <label>패스워드</label>
          <input type="password" value={password} onChange={onChangePassword} />
          <label>패스워드 확인</label>
          <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          <button type="submit">회원가입</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
