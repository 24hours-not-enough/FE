function AddNewTriplanForm(props) {
  const {
    titleRef, locationRef, startRef, endRef, findUser, createTriplan,
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
        <input type="text" ref={startRef} placeholder="언제부터" />
        <input type="text" ref={endRef} placeholder="언제까지" />
      </div>
      <div>
        <label htmlFor="함께할 멤버 초대하기">함께할 멤버 초대하기</label>
        <input type="text" onChange={findUser} />
      </div>
      <button type="submit">트리플랜 생성</button>
    </form>
  );
}

export default AddNewTriplanForm;
