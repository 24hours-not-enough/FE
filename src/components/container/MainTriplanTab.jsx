import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _plan from '../../state/redux/plan/planSelector';
import Button from '../elements/button/Button';
import MainTriplanDateButton from '../elements/MainTriplanDateButton';
import PlanApi from '../../state/data/planApi';
import { getPlans } from '../../state/redux/plan/planThunk';

const planApi = new PlanApi();

function MainTriplanTab({ selectedPlace, setIsTriplanTab }) {
  const plan = useSelector(_plan);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  // Button type에 비활성화일 때 상태 추가하기
  const buttonStyle = selected ? 'main' : 'decline';

  const handleSelect = (data) => {
    if (selected && selected.planId === data.planId && selected.calendarId === data.planId) {
      setSelected(null);
    } else {
      setSelected(data);
    }
  };

  // 트리플랜에 장소 담기 - dispatch 작성하기
  const handlePlaceToTriplan = async () => {
    if (!selected) {
      return;
    }
    await planApi.placeToTriplan({
      planId: selected.planId,
      calendarId: selected.calendarId,
      placeData: {
        location: selectedPlace[0].locationName,
        latitude: Number(selectedPlace[0].latitude),
        longitude: Number(selectedPlace[0].longitude),
      },
    });

    dispatch(getPlans());

    setIsTriplanTab(false);
    setSelected(null);
  };

  return (
    <section className="absolute bottom-0 left-0 z-10 bg-white w-full rounded-t-[30px] px-[30px] pt-[30px]">
      <h5 className="text-[18px] font-[600] leading-[22px] mb-[40px]">내 트리플랜에 담기</h5>
      <section className="h-[160px] overflow-auto scrollbar-hide mb-[36px]">
        {plan.map((triplan) => (
          <section key={triplan.planId} className="mb-[36px]">
            <h6 className="text-[14px] leading-[16.8px] mb-[8px]">{triplan.title}</h6>
            <div className="flex flex-wrap gap-x-[15px]">
              {triplan.calendars.map((calendar) => (
                <MainTriplanDateButton
                  key={calendar.calendarId}
                  calendar={calendar}
                  selected={selected}
                  triplan={triplan}
                  handleSelect={handleSelect}
                />
              ))}
            </div>
          </section>
        ))}
      </section>
      <Button onClick={handlePlaceToTriplan} propsClassName="w-full mb-[38px]" type={buttonStyle}>담기</Button>
    </section>
  );
}

export default MainTriplanTab;
