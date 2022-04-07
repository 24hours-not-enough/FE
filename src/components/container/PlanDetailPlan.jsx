import Button from '../elements/button/Button';

const PLAN = 'plan';
const EDIT = 'edit';
const SCHEDULE = 'schedule';
const ADD = 'add';
const UPDATE = 'update';

function PlanDetailPlan({
  viewState,
  toggleMapViewState,
  toggleEditState,
  toggleTabState,
  calendars,
  handleAddCalendar,
  editCalendarDetail,
  deleteCalendarDetail,
  deleteCalendarDay,
}) {
  return (
    <>
      <div className="flex justify-between mb-[20px]">
        <button type="button" onClick={toggleMapViewState} className="w-[40px] h-[40px] bg-[#E7E6FE] rounded-[14px]">
          <img src="/images/mapIcon.png" alt="지도" className="w-[18px] h-[18px] mx-auto" />
        </button>
        <button type="button" className="text-main" onClick={toggleEditState}>
          {viewState === PLAN ? '편집' : '완료'}
        </button>
      </div>

      <section className="flex flex-col gap-y-[16px] pb-[20px]">
        {calendars.map((calendar) => {
          const { calendarId, days, calendarDetails } = calendar;
          return (
            <article key={calendarId} className="bg-white rounded-[16px] p-[16px]">
              <h6 className="text-[15px] leading-[18px] font-[700] mb-[42px] flex items-center">
                <span>{days}</span>
                {viewState === EDIT
              && (
              <button
                type="button"
                className="mr-[22px] text-[8px] p-[3px] ml-[5px] bg-main text-white rounded-full"
                onClick={() => deleteCalendarDay({ calendarId })}
              >
                삭제
              </button>
              )}
              </h6>
              <section className="flex flex-col items-start gap-y-[28px] mb-[16px]">
                {calendarDetails.map((calendarDetail) => {
                  const {
                    calendarDetailsId, locationMemo, locationName, sort,
                  } = calendarDetail;
                  return (
                    <div key={calendarDetailsId}>
                      <div className="flex h-[40px] min-w-[150px] w-fit">
                        {viewState === EDIT
                          ? (
                            <button type="button" className="w-[22px] h-[22px] mr-[22px]" onClick={() => deleteCalendarDetail({ calendarId, calendarDetailsId })}>
                              <img src="/images/planDeleteIcon.png" alt="삭제" />
                            </button>
                          )
                          : (
                            <div className="bg-black text-white rounded-full w-[22px] h-[22px] text-center text-[13px] leading-[20px] text-[600] mr-[22px]">
                              {sort + 1}
                            </div>
                          )}
                        <div className="flex flex-col gap-y-[6px] w-[80vw] h-[40px]" onClick={() => editCalendarDetail({ calendarId, calendarDetail })}>
                          <span className="text-[14px] leading-[17px]">{locationName}</span>
                          <span className="text-[12px] leading-[14px] text-[#A0A0A0]">{locationMemo}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
              {viewState === EDIT && (
              <button
                type="button"
                className="flex text-main"
                onClick={() => toggleTabState({ state: SCHEDULE, mode: ADD, calendar })}
              >
                <div className="bg-[#E7E6FE] w-[34px] h-[34px] rounded-full mr-[16px] flex justify-center items-center">
                  <img src="/images/plusIcon.png" alt="일정 추가" className="w-[8px] h-[8px]" />
                </div>
                일정 추가하기
              </button>
              )}
            </article>
          );
        })}

        {viewState === EDIT && (
        <Button
          type="decline"
          propsClassName="w-full mb-[90px]"
          onClick={handleAddCalendar}
        >
          <img src="/images/plusIcon.png" alt="일차 추가" />
        </Button>
        )}
      </section>
    </>
  );
}

export default PlanDetailPlan;
