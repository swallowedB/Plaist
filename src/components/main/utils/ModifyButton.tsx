export default function ModifyButton({
  onClicked,
  children,
}: {
  onClicked: () => void;
  children: string;
}) {
  return (
    <>
      <button
        onClick={onClicked}
        className={`bg-[#ffffff] w-[50px] h-[24px] rounded-[30px] text-primary-600 hover:text-custom-gray hover:bg-[#EFEFEF]`}
      >
        {children}
      </button>
    </>
  );
}
