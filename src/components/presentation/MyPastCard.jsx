/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
function MyPastCard({
  plan, goToUpdate, handleDelete, isEdit,
}) {
  const {
    title, travel_destination, travel_start, travel_end,
  } = plan;

  return (
    <li className="p-2 w-1/2">
      <div onClick={() => goToUpdate(plan)} className="rounded-lg border-solid border border-black p-4 relative">
        <h3 className="text-sm font-bold mb-4">{title}</h3>
        <div className="text-sm text-gray-400">{travel_destination}</div>
        <div className="text-sm text-gray-400">
          <span>{`${travel_start} - ${travel_end}`}</span>
        </div>
        {isEdit && <button className="absolute right-4 top-4" type="button" onClick={() => handleDelete(plan)}>삭제</button>}
      </div>
    </li>
  );
}

export default MyPastCard;
