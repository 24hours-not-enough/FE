import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gotOutFromPlanAxios } from '../../state/redux/plan/planThunk';
import { _userInfo } from '../../state/redux/user/userSelector';

function PlanEditOneTab({ selectedPlan, setIsEditMenu, deletePlan }) {
  const userInfo = useSelector(_userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { plan, planId, title } = selectedPlan;
  const isCreator = plan.creator.userId === userInfo.userId;

  const goToPlanEdit = () => {
    navigate(`/plan/update/${planId}`, { state: plan });
  };

  const handleDelete = () => {
    deletePlan({ planId });
    setIsEditMenu(false);
  };

  // 초대된 계획에서 나가기
  const goOutFromPlan = () => {
    dispatch(gotOutFromPlanAxios({ planId }));
    setIsEditMenu(false);
  };

  return (
    <div>
      <div className="absolute w-full h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10" />
      <section className="absolute bottom-0 left-0 z-20 bg-white w-full min-h-[240px] rounded-t-[30px] px-[30px] pt-[30px]">
        <h5 className="text-[18px] leading-[22px] font-[700] mb-[44px]">{title}</h5>
        <div className="flex flex-col items-start gap-y-[40px] ml-[43px]">
          {isCreator
            ? (
              <>
                <button
                  className="text-[16px] leading-[19px]"
                  type="button"
                  onClick={goToPlanEdit}
                >
                  기본 정보 수정하기
                </button>
                <button
                  className="text-[16px] leading-[19px] text-red-400"
                  type="button"
                  onClick={handleDelete}
                >
                  삭제하기
                </button>
              </>
            )
            : (
              <button type="button" onClick={goOutFromPlan} className="flex text-[18px] leading=[22px] text-[#F34A68]">
                <img src="/images/trashIcon_red.png" alt="나가기" className="w-[22px] h-[22px] mr-[22px]" />
                <span>나가기</span>
              </button>
            )}
        </div>
        <button
          type="button"
          onClick={() => setIsEditMenu(false)}
          className="absolute top-[30px] right-[30px]"
        >
          닫기
        </button>
      </section>
    </div>
  );
}

export default PlanEditOneTab;
