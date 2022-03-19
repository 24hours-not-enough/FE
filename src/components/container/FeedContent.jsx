import { useRef } from 'react';
import { dataFeed } from '../../mock/main';
import Button from '../elements/button/Button';

function FeedContent() {
  const commentRef = useRef(null);
  const formRef = useRef(null);

  const sendComment = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;

    if (comment === '') return;
    console.log(`코멘트: ${comment}`);
    formRef.current.reset();
  };

  return (
    <div className="
        bg-white
        rounded-t-[20px]
        w-screen
        p-[20px]
        absolute
        bottom-0
        left-0
        "
    >
      <div className="flex items-center justify-between mb-[14px]">
        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url('${dataFeed.writer.profileImg}')` }}
            className="
            w-[42px]
            h-[42px]
            rounded-full
            mr-[10px]
            bg-contain
            bg-center
            bg-no-repeat
          "
          />
          <span className="font-[600]">{dataFeed.writer.username}</span>
        </div>
        <span className="text-[12px] leading-[14px] text-[#A0A0A0]">{dataFeed.date}</span>
      </div>

      <div className="mb-[40px]">{dataFeed.content}</div>

      <section className="flex flex-col mb-[20px] h-[160px] overflow-y-auto scrollbar-hide">
        {dataFeed.comments.map((comment) => (
          <div key={comment.id} className="flex items-center mb-[20px]">
            <div className="flex mr-[12px]">
              <div
                style={{ backgroundImage: `url('${comment.profileImg}')` }}
                className="w-[30px] h-[30px] rounded-full bg-contain bg-center bg-no-repeat mr-[10px]"
              />
              <span className="text-[14px] leading=[17px] font-[600] w-max">{comment.username}</span>
            </div>
            <div className="text-[14px] leading-[17px]">{comment.content}</div>
          </div>
        ))}
      </section>

      <form
        onSubmit={sendComment}
        ref={formRef}
        className="
        w-screen h-[80px] flex items-center bg-white
        absolute bottom-0 left-0 p-[20px]
        before:content-[''] before:border-solid before:border-[1px]
      "
      >
        <div
        // style={{backgroundImage: `url('${로그인한 사용자 프로필 사진}')`}}
          className="w-[42px] h-[42px] rounded-full bg-gray-200 mr-[16px]"
        />
        <div className="flex flex-auto border-solid border-[1px] border-[#EDEDED] rounded-[16px]">
          <input
            ref={commentRef}
            type="text"
            placeholder="댓글 달기"
            className="text-[14px] leading-[17px] px-[18px] py-[12px]"
          />
          <Button>보내기</Button>
        </div>
      </form>
    </div>
  );
}

export default FeedContent;
