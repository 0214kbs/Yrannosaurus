import React, { useState } from 'react';
import GosungKakaoMapComponent from '../../components/kakaomap';
import GosungSideBar from '../../components/sidebar';
import { StyledGosungPage } from './Gosung.styled';
import GosungSideList from './components/sidelist';
import GosungCloseButton from '../../components/closebutton';
import GosungCategory from './components/category';

const GosungComponent: React.FC = () => {
  const [showSideList, setShowSideList] = useState(true);

  const handleButtonClick = () => {
    setShowSideList(!showSideList);
  };

  return (
    <StyledGosungPage>
      <GosungSideBar />
      {showSideList && <GosungSideList />}
      <GosungCloseButton onClick={handleButtonClick} />
      <GosungKakaoMapComponent />
    </StyledGosungPage>
  );
};

export default GosungComponent;