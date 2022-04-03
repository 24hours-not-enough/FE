import BottomTab from '../elements/bottomTab';

function PlanDetailMenuTab2({
  setTabState,
}) {
  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <div
        className="absolute w-screen h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10"
      />
      <section className="
        absolute bottom-0 left-0 z-20 bg-white w-screen rounded-t-[30px]
        px-[30px] pt-[50px] pb-[70px] flex flex-col items-start gap-y-[53px]"
      >
        {/* {isCreator
          ? (
            <>
              <button type="button">링크로 초대하기</button>
              <button type="button" onClick={goToPlanEdit}>기본 정보 수정하기</button>
              <button type="button" onClick={deletePlan}>삭제하기</button>
            </>
          )
          : <button type="button">나가기</button>} */}
      </section>
    </BottomTab>
  );
}

export default PlanDetailMenuTab2;
