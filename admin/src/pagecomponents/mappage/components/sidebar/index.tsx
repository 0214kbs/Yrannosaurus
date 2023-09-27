import { useCategoryStore } from '../../../../stores/useCategoryStore';
import Enrollplace from '../enrollplace';
import EnrollShow from '../enrollshow';
import { StyledSidebar, StyledTitle } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();

  return (
    <StyledSidebar {...props}>
      {selectcat === '1' && props.use === 'update' && <StyledTitle> 장소 수정하기</StyledTitle>}
      {selectcat === '1' && props.use === 'enroll' && <StyledTitle> 장소 등록하기</StyledTitle>}
      {selectcat === '2' && <StyledTitle>공연 등록/수정하기</StyledTitle>}
      {selectcat === '3' && <StyledTitle>코스 등록/수정하기</StyledTitle>}
      {selectcat === '1' && <Enrollplace place={props.place} use={props.use} />}
      {selectcat === '2' && <EnrollShow place={props.place} festivals={props.festivals} />}
    </StyledSidebar>
  );
};

export default Sidebar;
