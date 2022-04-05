import { useNavigate } from 'react-router-dom';

function PlanEditOneTab({ selectedPlan, setIsEditMenu, deletePlan }) {
  const navigate = useNavigate();

  const { plan, planId, title } = selectedPlan;

  const goToPlanEdit = () => {
    navigate(`/plan/update/${planId}`, { state: plan });
  };

  const handleDelete = () => {
    deletePlan({ planId });
    setIsEditMenu(false);
  };

  return (
    <div>
      <div className="absolute w-screen h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10" />
      <section className="absolute bottom-0 left-0 z-20 bg-white w-screen min-h-[240px] rounded-t-[30px] px-[30px] pt-[30px]">
        <h5 className="text-[18px] leading-[22px] font-[700] mb-[44px]">{title}</h5>
        <div className="flex flex-col items-start gap-y-[40px] ml-[43px]">
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
