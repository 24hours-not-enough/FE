import { useRef } from 'react';
import Navbar from '../components/container/Navbar';
import Calendar from '../components/elements/calendar/Calendar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';

function PlanCreate() {
  const buttonRef = useRef();
  const formRef = useRef();
  const titleRef = useRef();
  const travelDestinationRef = useRef();
  const travelStartRef = useRef();
  const travelEndRef = useRef();
  const searchMemberRef = useRef();

  // create new triplan
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const travelDestination = travelDestinationRef.current.value;
    const travelStart = travelStartRef.current.props.selected;
    const travelEnd = travelEndRef.current.props.selected;

    if (title === '' || travelDestination === '' || travelStart === '' || travelEnd === '') {
      alert('입력해주세요');
      return;
    }

    const updatedPlan = {
      title,
      travelDestination,
      travelStart: new Date(travelStart).toISOString(),
      travelEnd: new Date(travelEnd).toISOString(),
    };

    console.log(updatedPlan);
    // dispatch하고 /plan으로 이동
  };

  const makeSubmitAction = () => {
    buttonRef.current.click();
  };

  return (
    <LayoutWrapper>
      <Navbar title="새로운 트리플랜" back>
        <button type="button" onClick={makeSubmitAction}>만들기</button>
      </Navbar>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-[12px] mx-[20px] mt-[30px]"
      >
        <div className="flex flex-col">
          <label
            htmlFor="제목"
            className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[4px]"
          >
            제목
          </label>
          <input
            ref={titleRef}
            className="bg-[#E7E6FE] rounded-[16px] text-[16px] leading-[19px] font-[600] px-[18px] py-[13px]"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="여행지"
            className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[4px]"
          >
            여행지
          </label>
          <input
            ref={travelDestinationRef}
            className="bg-[#E7E6FE] rounded-[16px] text-[16px] leading-[19px] font-[600] px-[18px] py-[13px]"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="여행 기간"
            className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[4px]"
          >
            여행 기간
          </label>
          <Calendar travelStartRef={travelStartRef} travelEndRef={travelEndRef} />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="함께할 멤버 초대하기"
            className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[4px]"
          >
            함께할 멤버 초대하기
          </label>
          <input
            ref={searchMemberRef}
            className="bg-[#E7E6FE] rounded-[16px] text-[16px] leading-[19px] font-[600] px-[18px] py-[13px]"
            type="text"
          />
        </div>
        <button ref={buttonRef} type="submit" className="hidden">동작을위한버튼</button>
      </form>
    </LayoutWrapper>
  );
}

export default PlanCreate;
