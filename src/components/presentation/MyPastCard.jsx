/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
function MyPastCard({ plan }) {
  const {
    title, travel_destination, travel_start, travel_end,
  } = plan;

  return (
    <li className="p-2 w-1/2">
      <div className="rounded-lg border-solid border border-black p-4 relative">
        <h3 className="text-sm font-bold mb-4">{title}</h3>
        <div className="text-sm text-gray-400">{travel_destination}</div>
        <div className="text-sm text-gray-400">
          <span>{travel_start}</span>
          <span>-</span>
          <span>{travel_end}</span>
        </div>
      </div>
    </li>
  );
}

export default MyPastCard;
