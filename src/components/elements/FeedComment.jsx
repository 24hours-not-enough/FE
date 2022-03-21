function FeedComment({ comment }) {
  const { creator, content } = comment;

  return (
    <div className="flex items-center mb-[20px]">
      <div className="flex items-center mr-[12px]">
        <img
          src={creator.userProfileImage}
          alt={creator.userName}
          className="w-[30px] h-[30px] rounded-full mr-[10px]"
        />
        <span className="text-[14px] leading=[17px] font-[600]">{creator.userName}</span>
      </div>
      <div className="text-[14px] leading-[17px]">{content}</div>
    </div>
  );
}

export default FeedComment;
