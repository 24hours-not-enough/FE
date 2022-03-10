import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileForm from '../../../components/container/profileFrom/ProfileForm';
import Navbar from '../../../components/container/navbar/Navbar';

function GetUserInfo(props) {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ProfileForm code={location.state} />
    </>
  );
}

export default GetUserInfo;
