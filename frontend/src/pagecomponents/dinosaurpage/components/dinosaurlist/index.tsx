import React from 'react';
import DinosaurCard from '../dinosarucard';
import { StyledDinosaurListPage, StyledDinosaurListTitle, StyledDinosaurListContainer } from './Dinosaurlist.styled';

const DinosaurListComponent = () => {
  return (
    <StyledDinosaurListPage>
      <StyledDinosaurListTitle>
        <h1>이런 공룡들이 있어요!</h1>
      </StyledDinosaurListTitle>
      <StyledDinosaurListContainer>
        <DinosaurCard />
      </StyledDinosaurListContainer>
    </StyledDinosaurListPage>
  );
};

export default DinosaurListComponent;
