import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { _userInfo } from '../../state/redux/user/userSelector';
import Modal from '../elements/Modal';

function PlanDetailMenuTab({ setOnMenuTab, plan }) {
  const userInfo = useSelector(_userInfo);
  const navigate = useNavigate();

  const isCreator = Number(userInfo.userId) === plan.creator.userId;

  const goToPlanEdit = () => {
    navigate(`/plan/update/${plan.planId}`, { state: plan });
  };

  // modal 창 띄우는 걸로 수정해야 함
  const deletePlan = () => {
    // // 삭제하는 api 연결
    console.log(`plan 삭제: ${plan.planId}`);
    // // 성공하면 plan페이지로 이동
    navigate('/plan');
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