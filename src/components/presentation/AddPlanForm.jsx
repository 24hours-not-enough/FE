/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-key */
import {
  memo, useState, useRef,
} from 'react';
import FeedDetailList from './FeedDetailList';

function AddPlanForm({
  feedInfo,
  handleAddFeedDetailLoc,
  handleFocusFeedNumber,
}) {
  const testRef = useRef();
  const [divNumber, setDivNumber] = useState();
  const [text, setText] = useState([]);

  const onChange = (e) => {
    setText(text[divNumber] = {
      place: e.target.value,
      image: '',
      comment: '',
    });
  };

  return feedInfo.map(({ feedDetailLoc, title }, index) => (
    <div
      ref={testRef}
      className="bg-white h-full p-5 pb-5 my-4 rounded-xl"
    >
      <div className="border-b pb-3 mb-5">
        <h1 className="font-bold">{title}</h1>
      </div>
      {feedDetailLoc.map((item, num) => (
        <FeedDetailList
          onChange={onChange}
          onClick={handleFocusFeedNumber}
          key={item}
          index={num}
        />
      ))}
      <button onClick={handleAddFeedDetailLoc({ index })} type="button" className="relative -top-3 left-5 text-main">
        장소 추가하기
      </button>
    </div>
  ));
}

export default memo(AddPlanForm);
