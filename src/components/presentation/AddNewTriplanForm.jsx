/* eslint-disable react/no-array-index-key */
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
    selectedUser,
  } = props;

  const commonStyle = 'flex flex-col mb-2';

  return (
    <form onSubmit={createTriplan}>
      <div className={commonStyle}>
        <label htmlFor="제목">제목</label>
        <input className="bg-gray-200 rounded" type="text" ref={titleRef} />
      </div>
      <div className={commonStyle}>
        <label htmlFor="여행지">여행지</label>
        <input className="bg-gray-200 rounded" type="text" ref={locationRef} />
      </div>
      <div className={commonStyle}>
        <label htmlFor="여행 기간">여행 기간</label>
        <Calendar start={startRef} end={endRef} />
      </div>
      <div className={commonStyle}>
        <label htmlFor="함께할 멤버 초대하기">함께할 멤버 초대하기</label>
        <input className="bg-gray-200 rounded" type="text" ref={inviteRef} onChange={findUser} />
      </div>
      {findedUser && (
      <div className="flex bg-white text-black rounded-full px-2 py-1 cursor-pointer" onClick={selectUserForInvite}>
        <img src={findedUser.profileImg} alt="profile" className="rounded-full" />
        <span>{findedUser.username}</span>
      </div>
      )}
      <ul className="flex mb-4">
        {selectedUser.map((user, idx) => (
          <li key={idx} className="flex bg-black text-white rounded-full px-2 py-1">
            <img src={user.profileImg} alt="profile" className="rounded-full" />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
      <Button onClick={createTriplan} type="main" propsClassName="px-8">트리플랜 생성</Button>
    </form>
  );
}

export default AddNewTriplanForm;
