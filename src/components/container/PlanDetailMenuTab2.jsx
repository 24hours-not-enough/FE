import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gotOutFromPlanAxios, togglePlanDeleteState } from '../../state/redux/plan/planThunk';
import { _userInfo } from '../../state/redux/user/userSelector';

import BottomTab from '../elements/bottomTab';

const buttonDefaultClass = 'flex text-[18px] leading-[22px] font-[600]';
const iconDefaultClass = 'w-[22px] h-[22px] mr-[22px]';

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

  // 초대된 계획에서 나가기
  const goOutFromPlan = () => {
    dispatch(gotOutFromPlanAxios({ planId, navigate, isInDetail: true }));
    setTabState(null);
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <div
        className="absolute w-full h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10"
      />
      <section className="
        absolute bottom-0 left-0 z-20 bg-white w-full rounded-t-[30px]
        px-[30px] pt-[50px] pb-[70px] flex flex-col items-start gap-y-[53px]"
      >
        {isCreator
          ? (
            <>
              <button type="button" onClick={openInviteModal} className={buttonDefaultClass}>
                <img src="/images/linkInviteIcon.png" alt="링크로 초대" className={iconDefaultClass} />
                <span>링크로 초대하기</span>
              </button>
              <button type="button" onClick={goToPlanEdit} className={buttonDefaultClass}>
                <img src="/images/edit_pencilIcon.png" alt="계획 수정" className={iconDefaultClass} />
                <span>기본 정보 수정하기</span>

              </button>
              <button type="button" onClick={deletePlan} className={`${buttonDefaultClass} text-[#F34A68] `}>
                <img src="/images/trashIcon_red.png" alt="계획 삭제" className={iconDefaultClass} />
                <span>삭제하기</span>

              </button>
            </>
          )
          : (
            <button type="button" onClick={goOutFromPlan} className={`${buttonDefaultClass} text-[#F34A68] `}>
              <img src="/images/trashIcon_red.png" alt="나가기" className={iconDefaultClass} />
              <span>나가기</span>
            </button>
          )}
      </section>
    </BottomTab>
  );
}

export default PlanDetailMenuTab2;
