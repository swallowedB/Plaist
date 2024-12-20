export default function CourseBadge({ target }: { target: string[] }) {
  return (
    <>
      {(target || []).map((item, idx) => {
        return (
          <span
            key={idx}
            className="px-[18px] border-[2px] border-primary-500 border-solid rounded-[30px] h-7 flex items-center"
          >
            {item}
          </span>
        );
      })}
    </>
  );
}
