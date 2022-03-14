/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
function MyPresentCard({ plan, buttonSet }) {
  const {
    title, travel_destination, travel_start, travel_end, memberList,
  } = plan;
  const { buttonTitle, handleClick } = buttonSet;

  return (
    <li className="p-2">
      <div className="rounded-lg border-solid border border-black p-4 relative">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="flex justify-between">
          <div>
            <div className="text-sm text-gray-400">{travel_destination}</div>
            <div className="text-sm text-gray-400">
              <span>{`${travel_start} - ${travel_end}`}</span>
            </div>
          </div>
          <div className="flex">
            {memberList.length > 0 && memberList.map((member, idx) => (
              <img
                key={idx}
                src={member.profileImg}
                alt="profile"
                className="inlint-block w-7 h-7 rounded-full"
              />
            ))}
          </div>
        </div>
        <button className="absolute right-4 top-4" type="button" onClick={() => handleClick(plan)}>{buttonTitle}</button>
      </div>
    </li>
  );
}

export default MyPresentCard;