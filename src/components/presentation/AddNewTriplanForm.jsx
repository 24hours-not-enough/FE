import Button from '../../elements/Button';

function AddNewTriplanForm(props) {
  const {
    titleRef, locationRef, findUser, createTriplan,
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
      <div>
        <label htmlFor="여행 기간">여행 기간</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="함께할 멤버 초대하기">함께할 멤버 초대하기</label>
        <input type="text" onChange={findUser} />
      </div>
      <Button title="트리플랜 생성" />
    </form>
  );
}

export default AddNewTriplanForm;
