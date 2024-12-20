export default function CourseBadge({ target }: { target: string[] }) {
  return (
    <>
      {(target || []).map((item, idx) => {
        return (
          <span
            key={idx}
            className={`flex justify-center items-center border-[2px] 
              border-primary-500 border-solid rounded-[30px] h-[28px]
              w-[58px] text-[13px] leading-[10px] text-primary-600 font-medium`}
          >
            {item}
          </span>
        );
      })}
    </>
  );
}
