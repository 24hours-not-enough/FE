import useLayout from '../shared/useLayout';

function MobileView({ children }) {
  const { pc } = useLayout();

  if (pc) {
    return (
      <div className="flex justify-around items-center p-[30px] w-screen h-screen bg-black">
        <section className="max-w-[300px] flex flex-col content-between text-white">
          <div>
            <img src="/images/triplan_thumbnail.png" alt="트리플랜" />
            <p className="">
              여행을 둘러보고, 계획하고, 기록까지,
              여행을 위한 sns 트리플랜입니다.
              <br />
              <br />

              SNS로 가고 싶은곳 찾아보고, 어디였더라?
              <br />
              메모앱, 지도앱에 저장하고, 캡쳐하고, 친구들과 채팅앱 또는 만나서 여행 계획 세우고, 다시 SNS에 일상과 뒤섞인채 기록하고.
              <br />
              <br />

              이제 트리플랜 하나로 플랜부터 트립까지, 간편하게 여행하세요!

            </p>
          </div>
          <button type="button" className="bg-main rounded-[8px]">피드백 남기고 선물받기</button>
        </section>
        <div className="w-[430px] h-screen min-h-[740px] relative bg-main-background">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className="max-w-[430px] min-w-[320px] min-h-[640px] w-full h-full relative">
        {children}
      </div>
    </div>
  );
}

export default MobileView;
