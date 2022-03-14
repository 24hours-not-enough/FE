import Button from '../elements/button/Button';
import Calendar from '../elements/calendar/Calendar';

function AddNewTriplanForm(props) {
  const {
    titleRef,
    locationRef,
    startRef,
    endRef,
    inviteRef,
    findUser,
    createTriplan,
    findedUser,
    selectUserForInvite,
  } = props;

  return (
    <form onSubmit={createTriplan}>
      <div>
        <label htmlFor="제목">제목</label>
        <input type="text" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="여행지">여행지</label>
        <input type="text" ref={locationRef} />
      </div>
      <div className="flex">
        <label htmlFor="여행 기간">여행 기간</label>
        <Calendar start={startRef} end={endRef} />
      </div>
      <div>
        <label htmlFor="함께할 멤버 초대하기">함께할 멤버 초대하기</label>
        <input type="text" ref={inviteRef} onChange={findUser} />
      </div>
      {findedUser && (
      <div onClick={selectUserForInvite}>
        <img src={findedUser.profileImg} alt="profile" />
        <span>{findedUser.username}</span>
      </div>
      )}
      <Button onClick={createTriplan} type="main" propsClassName="px-8">트리플랜 생성</Button>
    </form>
  );
}

export default AddNewTriplanForm;
