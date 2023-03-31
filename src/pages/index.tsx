import React from 'react';
import styled from '@emotion/styled';

const MainPage = () => {
  console.log('Test');
  return (
    <>
      <Title>메인 페이지입니다.</Title>
      <p>로그아웃</p>
      <p>로그인 :</p>
    </>
  );
};

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
export default MainPage;
