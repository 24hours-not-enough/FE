function PlanDetailMap2({ toggleMapViewState, calendars }) {
  return (
    <>
      <div className="flex justify-between mb-[20px]">
        <button type="button" onClick={toggleMapViewState} className="w-[40px] h-[40px] bg-[#E7E6FE] rounded-[14px]">
          {/* <img src="/images/mapIcon.png" alt="글" className="w-[18px] h-[18px] mx-auto" /> */}
          글
        </button>
      </div>
      <div>지도</div>
    </>
  );
}

export default PlanDetailMap2;
