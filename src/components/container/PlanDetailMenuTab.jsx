import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePlanAxios } from '../../state/redux/plan/planThunk';
import { _userInfo } from '../../state/redux/user/userSelector';

function PlanDetailMenuTab({ setOnMenuTab, plan }) {
  const userInfo = useSelector(_userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(userInfo);
  console.log(plan.creator.userId);
  const isCreator = Number(userInfo.userId) === plan.creator.userId;

  const goToPlanEdit = () => {
    navigate(`/plan/update/${plan.planId}`, { state: plan });
  };

  // modal 창 띄우는 걸로 수정해야 함
  const deletePlan = () => {
    dispatch(deletePlanAxios({ planId: plan.planId, navigate, isInDetail: true }));
  };

  return (
    <>
      <div
        onClick={() => setOnMenuTab(false)}
        className="absolute w-screen h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10"
      />
      <section className="
        absolute bottom-0 left-0 z-20 bg-white w-screen rounded-t-[30px]
        px-[30px] pt-[50px] pb-[70px] flex flex-col items-start gap-y-[53px]"
      >
        {isCreator
          ? (
            <>
              <button type="button">링크로 초대하기</button>
              <button type="button" onClick={goToPlanEdit}>기본 정보 수정하기</button>
              <button type="button" onClick={deletePlan}>삭제하기</button>
            </>
          )
          : <button type="button">나가기</button>}
      </section>
    </>
  );
}

export default PlanDetailMenuTab;
