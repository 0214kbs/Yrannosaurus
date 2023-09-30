import React, { useEffect } from 'react';
import {
  StyledPerformanceContainer,
  StyledNavContainer,
  StyledNav,
  StyeldPerformanceContent,
  StyledCarouselContainer,
  StyledPerformanceInfo,
  StyledText,
  StyledBoxContainer,
  StyledBox,
  StyledGoPerformanceContainer,
  StyledGoPerformance,
} from './Performacne.styled';
import PerformanceCarousel from '../performancecarousel';
import { useTodayFestivalListHook } from '../../../../hooks/festival/useTodayFestivalListHook';
import { useMediaQuery } from 'react-responsive';
const Performance = () => {
  const { todayFestivalList, getTodayFestivalList } = useTodayFestivalListHook();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  useEffect(() => {
    getTodayFestivalList(formattedDate);
  }, []);

  useEffect(() => {
    console.log(todayFestivalList);
  }, [todayFestivalList]);

  return (
    <StyledPerformanceContainer>
      <StyledNavContainer>
        <StyledNav>엑스포 공연 안내</StyledNav>
      </StyledNavContainer>
      <StyeldPerformanceContent>
        <StyledCarouselContainer>
          <PerformanceCarousel></PerformanceCarousel>
        </StyledCarouselContainer>
        <StyledPerformanceInfo>
          <StyledText>오늘의 공연</StyledText>
          <StyledBoxContainer>
            <StyledBox>퍼레이드</StyledBox>
            <StyledBox>마술</StyledBox>
            <StyledBox>주제공연</StyledBox>
            <StyledBox>퍼레이드</StyledBox>
            <StyledBox>마술</StyledBox>
            <StyledBox>주제공연</StyledBox>
          </StyledBoxContainer>
          <StyledGoPerformanceContainer>
            <StyledGoPerformance>공연정보 더보기 ➜</StyledGoPerformance>
          </StyledGoPerformanceContainer>
        </StyledPerformanceInfo>
      </StyeldPerformanceContent>
    </StyledPerformanceContainer>
  );
};

export default Performance;
