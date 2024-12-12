import images from "../../../assets/images/importImages";

export default function SearchInputFeild() {
  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-[19px]">
          <img src={images.search_icon} alt="검색 아이콘" className="w-5 h-5" />
        </span>
        <input
          className="block w-[439px] h-[48px] py-2 pr-3 bg-[#F3F2F3] border rounded-[30px] shadow-sm placeholder:italic 
            placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 
            focus:ring-sky-500 focus:ring-1 sm:text-sm mt-4"
          placeholder="Search for your great day..."
          type="text"
          name="search"
        />
      </label>
    </>
  );
}
