export default function TagDisplay({ tags }: { tags: string[] }) {
  return (
    <ul
      className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[12px] overflow-auto"
      style={{ maxWidth: "100%" }}
    >
      {tags.map((tag, index) => (
        <li
          key={index}
          className="w-[72px] h-[34px] text-[14px] rounded-[30px] border-2 border-primary-600 font-pretendard text-center flex items-center justify-center"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
