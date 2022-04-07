import { useRef } from 'react';
import { defaultImg } from '../../shared/utils';
import FeedComment from '../elements/FeedComment';

function FeedContent({ feed, userInfo }) {
  const commentRef = useRef();
  const commentFormRef = useRef();
  const {
    feedId, creator, content, date, comments,
  } = feed;

  const addComment = (e) => {
    e.preventDefault();
    if (!userInfo) {
      alert('로그인 후 이용가능합니다. 로그인해주세요.');
      commentFormRef.current.reset();
      return;
    }
    const commentValue = commentRef.current.value;
    if (commentValue === '') {
      return;
    }
    // 코멘트 등록 통신
    console.log(`코멘트 등록: ${feedId}, ${commentValue}`);
    commentFormRef.current.reset();
  };

  return (
    <div className="absolute left-0 bottom-0 w-screen rounded-t-[20px] pt-[20px] px-[20px] h-[calc(100vh_-_56px_-_100vw_+_20px)] bg-white rounded-t-20px">
      <section className="flex items-center justify-between mb-[14px]">
        <div className="flex items-center">
          <img
            src={creator.userProfileImage}
            alt={creator.userName}
            onError={(e) => defaultImg(e)}
            className="w-[42px] h-[42px] rounded-full"
          />
          <span>{creator.userName}</span>
        </div>
        <span className="text-[12px] leading-[14px] text-[#A0A0A0]">{date}</span>
      </section>

      <div className="mb-[20px]">{content}</div>

      <section className="h-[calc(100vh_-_56px_-_100vw_+_20px_-_200px)] overflow-y-auto">
        {comments.map((comment) => <FeedComment key={comment.commentId} comment={comment} />)}
      </section>

      <section className="absolute bottom-0 left-0 flex items-center w-screen h-[80px] px-[20px] bg-white">
        {
          userInfo
          && (
          <img
            src={userInfo.userProfileImage}
            alt={userInfo.userName}
            onError={(e) => defaultImg(e)}
            className="w-[42px] h-[42px] rounded-full mr-[16px]"
          />
          )
        }
        <form
          ref={commentFormRef}
          onSubmit={addComment}
          className="flex flex-auto border-[1px] border-solid border-[#EDEDED] px-[18px] py-[12px] rounded-[16px]"
        >
          <input
            ref={commentRef}
            type="text"
            placeholder="댓글 달기"
            className="flex-auto"
          />
          <button type="submit">전송</button>
        </form>
      </section>
    </div>
  );
}

export default FeedContent;
