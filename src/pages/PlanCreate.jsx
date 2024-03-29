import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
// import Button from '../components/elements/button/Button';
import Calendar from '../components/elements/calendar/Calendar';
import PlanApi from '../state/data/planApi';
import { createPlan, updatePlan } from '../state/redux/plan/planThunk';
import { _userInfo } from '../state/redux/user/userSelector';

function PlanCreate() {
  const loginUser = useSelector(_userInfo);
  const buttonRef = useRef();
  const formRef = useRef();
  const titleRef = useRef();
  const travelDestinationRef = useRef();
  const travelStartRef = useRef();
  const travelEndRef = useRef();
  const searchMemberRef = useRef();
  const [searchedUser, setSearchedUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isUpdatePage, setIsUpdatePage] = useState(false);

  const param = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const planApi = new PlanApi();

  useEffect(() => {
    if (!(param.planId || location.state)) {
      return;
    }
    if ((param && location.state) && Number(param.planId) === location.state.planId) {
      const {
        title, travelDestination, travelStart, travelEnd, members,
      } = location.state;

      titleRef.current.value = title;
      travelDestinationRef.current.value = travelDestination;
      travelStartRef.current.setSelected(new Date(travelStart));
      travelEndRef.current.setSelected(new Date(travelEnd));
      const memberList = members.filter((member) => member.userId !== loginUser.userId);
      setSelectedUser(memberList);
      setIsUpdatePage(true);
    } else {
      alert('계획 정보를 불러오지 못했습니다. 다시 시도해주세요.');
      navigate(-1, { replace: true });
    }
  }, [param, location]);

  // 닉네임으로 유저찾기
  const findedUser = (e) => {
    if (e.target.value !== '') {
      planApi.searchUser(e.target.value)
        .then((res) => {
          if (res.data.userId === loginUser.userId) {
            return;
          }
          setSearchedUser({
            userProfileImage: res.data.userProfileImg,
            userName: res.data.userName,
            userId: res.data.userId,
          });
        });
    }
  };
  const findByUsername = _.debounce(findedUser, 600);

  // create new triplan, update triplan
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const travelDestination = travelDestinationRef.current.value;
    const travelStart = travelStartRef.current.props.selected;
    const travelEnd = travelEndRef.current.props.selected;
    const memberList = selectedUser.map((user) => ({ nickName: user.userName }));

    if (title === '' || travelDestination === '' || travelStart === '' || travelEnd === '') {
      alert('입력해주세요');
      return;
    }

    const updatedPlan = {
      title,
      travelDestination,
      travelStart: new Date(travelStart).toISOString(),
      travelEnd: new Date(travelEnd).toISOString(),
      memberList,
    };

    isUpdatePage
      ? dispatch(updatePlan({ planId: param.planId, updatedPlan, navigate }))
      : dispatch(createPlan({ updatedPlan, navigate }));
  };

  const makeSubmitAction = () => {
    buttonRef.current.click();
  };

  // // 초대 링크 복사 버튼 클릭
  // const inviteByLink = () => {
  //   console.log('링크가 복사되었어요');
  //   console.log(param.planId);
  // };

  // 찾은 유저 초대목록에 추가하기
  const handleChooseUser = (userInfo) => {
    const updated = [...selectedUser, userInfo];
    setSelectedUser(updated);
    setSearchedUser(null);
    searchMemberRef.current.value = '';
  };

  // 초대목록에서 삭제하기
  const cancleInviteUser = (userInfo) => {
    const updated = selectedUser.filter((user) =>
      userInfo.userId !== user.userId);
    setSelectedUser(updated);
  };

  return (
    <>
      <Navbar title="새로운 트리플랜" back>
        <button type="button" onClick={makeSubmitAction}>{isUpdatePage ? '완료' : '만들기'}</button>
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
            onChange={findByUsername}
            className="bg-[#E7E6FE] rounded-[16px] text-[16px] leading-[19px] font-[600] px-[18px] py-[13px]"
            type="text"
          />
          {searchedUser && (
          <button
            type="button"
            onClick={() => handleChooseUser(searchedUser)}
            className="flex items-center bg-white w-fit rounded-[16px] p-[3px] mt-[12px]"
          >
            <img
              src={searchedUser.userProfileImage}
              alt={searchedUser.userName}
              className="w-[26px] h-[26px] rounded-full mr-[10px]"
            />
            <span className="text-black mr-[14px]">{searchedUser.userName}</span>
          </button>
          )}
        </div>

        <section className="flex gap-x-[16px]">
          {selectedUser.map((user) => (
            <div key={user.userId} className="flex items-center bg-black w-fit rounded-[16px] p-[3px]">
              <img
                src={user.userProfileImage}
                alt={user.userName}
                className="w-[26px] h-[26px] rounded-full mr-[10px]"
              />
              <span className="text-white mr-[14px]">{user.userName}</span>
              <button
                type="button"
                onClick={() => cancleInviteUser(user)}
                className="bg-white text-black rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </section>
        <button ref={buttonRef} type="submit" className="hidden">동작을위한버튼</button>
        {/* {isUpdatePage
          && <Button onClick={inviteByLink} propsClassName="w-full mt-[42px]">링크로 초대하기</Button>} */}
      </form>
    </>
  );
}

export default PlanCreate;
