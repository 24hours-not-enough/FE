import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { togglePlanDeleteState } from '../../state/redux/plan/planThunk';
import { _userInfo } from '../../state/redux/user/userSelector';

import BottomTab from '../elements/bottomTab';
import ModalContainer from '../elements/modalContainer/ModalContainer';

function PlanDetailMenuTab2({
  tabState,
  setTabState,
}) {
  const userInfo = useSelector(_userInfo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { planId, creator } = tabState.calendar;
  const isCreator = Number(userInfo.userId) === creator.userId;

  // 계획 수정
  const goToPlanEdit = () => {
    navigate(`/plan/update/${planId}`, { state: tabState.calendar });
  };

  // 계획 삭제(휴지통으로 이동)
  const deletePlan = () => {
    dispatch(togglePlanDeleteState({ planId, navigate, isInDetail: true }));
  };

  // 링크로 초대하기 탭 열기
  const openInviteModal = () => {
    setTabState({ state: 'share', plan: { ...tabState.calendar } });
  };

  return (
    <>
      <BottomTab closeTab={() => setTabState(null)}>
        <div
          className="absolute w-screen h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10"
        />
        <section className="
        absolute bottom-0 left-0 z-20 bg-white w-screen rounded-t-[30px]
        px-[30px] pt-[50px] pb-[70px] flex flex-col items-start gap-y-[53px]"
        >
          {isCreator
            ? (
              <>
                <button type="button" onClick={openInviteModal}>링크로 초대하기</button>
                <button type="button" onClick={goToPlanEdit}>기본 정보 수정하기</button>
                <button type="button" onClick={deletePlan}>삭제하기</button>
              </>
            )
            : <button type="button">나가기</button>}
        </section>
      </BottomTab>
      <ModalContainer>모달창</ModalContainer>
    </>
  );
}

export default PlanDetailMenuTab2;
