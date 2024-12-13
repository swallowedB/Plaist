export default function SearchResultOfCreateMyItems({
  placeName,
  category,
  contact,
  location,
}) {
  return (
    <div
      id="searched-items--createcourse"
      className="w-[416px] h-[70px] rounded-[15px] shadow-default bg-white"
    >
      <div className="text-custom-black leading-5 flex flex-row justify-between ml-[21px] mr-[26px] mt-[15px] mb-[5px]">
        <p className="font-semiBold">{placeName}</p>
        <p>{category}</p>
      </div>
      <div className="text-custom-gray flex flex-row justify-between ml-[21px] mr-[21px] mb-[10px]">
        <p>{contact}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
