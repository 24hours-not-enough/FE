import useLayout from '../shared/useLayout';

function MobileView({ children }) {
  const { pc } = useLayout();

  if (pc) {
    return (
      <div className="flex justify-around items-center p-[30px] w-screen h-screen bg-black">
        <section className="max-w-[300px] flex flex-col content-between text-white">
          <div>
            <img src="/images/mobileview.png" alt="트리플랜 소개" />
          </div>
          {/* <button type="button" className="bg-main rounded-[8px]">피드백 남기고 선물받기</button> */}
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
