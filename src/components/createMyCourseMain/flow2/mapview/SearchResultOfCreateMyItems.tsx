export default function SearchResultOfCreateMyItems({
  placeName,
  category,
  contact,
  location,
  isActive,
  onSelect,
}: {
  placeName: string;
  category: string;
  contact: string;
  location: string;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={() => {
        onSelect();
      }}
      id="searched-items--createcourse"
      className={`w-[416px] h-[70px] rounded-[15px] shadow-default bg-white
        ${isActive ? "border-2 border-solid border-[#3B89E2]" : ""}`}
    >
      <div className="text-custom-black leading-5 flex flex-row justify-between ml-[21px] mr-[26px] mt-[15px] mb-[5px]">
        <p className="overflow-hidden max-w-48 font-semiBold text-ellipsis whitespace-nowrap">
          {placeName}
        </p>
        <p className="overflow-hidden max-w-48 text-ellipsis whitespace-nowrap">
          {category}
        </p>
      </div>
      <div className="text-custom-gray flex flex-row justify-between ml-[21px] mr-[21px] mb-[10px]">
        <p>{contact}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
