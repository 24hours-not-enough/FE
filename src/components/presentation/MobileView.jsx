import useLayout from '../../shared/useLayout';

function MobileView({ children }) {
  const { pc } = useLayout();

  if (pc) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <div className="w-full h-full max-w-[1024px] flex justify-center items-center">
          <section className="flex-1">
            <img src="/images/mobileview.png" alt="트리플랜" className="p-8" />
          </section>

          <div className="flex-1 bg-main-background w-[480px] min-w-[480px] h-full max-h-[850px] min-h-[650px] mx-8 relative pt-14">
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen min-w-[280px] min-h-[650px] bg-black">
      <div className="w-full h-full max-w-[480px] max-h-[850px] bg-main-background relative pt-14">
        {children}
      </div>
    </div>
  );
}

export default MobileView;
