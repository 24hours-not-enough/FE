/* eslint-disable react/no-array-index-key */
import FeedContent from '../../components/container/FeedContent';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import { dataFeed } from '../../mock/main';

function Feed() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col">
        <Navbar />
        <div
        // style={{width=`${dataFeed.feedImg.length}00vw`}}
          className="flex relative h-[calc(100vw)] min-w-[360px] min-h-[360px] bg-gray-300 overflow-x-auto scrollbar-hide"
        >
          {dataFeed.feedImg.map((img, idx) =>
            <img key={idx} src={img} alt="피드" className="w-screen" />)}
          {dataFeed.feedImg.map((_, idx) =>
            <span key={idx} className="absolute bottom-[30px] left-[50vw] z-20">점</span>)}
        </div>
        <FeedContent />
      </div>
    </LayoutWrapper>
  );
}

export default Feed;
