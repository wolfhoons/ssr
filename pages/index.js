import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const Index = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);

  
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    
    console.log(id, password);

    dispatch(loginAction({id, password}));
  }, [id, password]);
  
  useEffect(() => {
    if(isLoggedIn) {
      Router.push('/main');
    }
  }, [isLoggedIn]);

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
          <button type="submit">로그인</button>
        </div>
      </form>
    </>
  );
}

export default Index;

// pages => about => index.js
// localhost:3000/about/index

// [name].js 동적 라우팅

