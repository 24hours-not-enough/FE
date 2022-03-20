import MyPageUserInfo from '../presentation/MyPageUserInfo';
import TriPlanImages from '../presentation/TriPlanImages';

function MyPageMain({ handleRouter }) {
  return (
    <>
      <MyPageUserInfo handleRouter={handleRouter} />
      <div
        className="w-16 h-16 bg-black ml-5 mt-10 rounded-full"
        role="button"
        tabIndex={0}
        onClick={handleRouter('/mypage/plan')}
      >
        <img alt="+이미지" />
      </div>
      <TriPlanImages />
    </>
  );
}

export default MyPageMain;
