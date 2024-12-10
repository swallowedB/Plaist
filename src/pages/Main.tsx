import MainBestCourse from "../components/main/MainBestCourse";
import MainTitle from "../components/main/MainTitle";
import TestCard from "../components/main/TestCard";

export default function Main() {
  return (
    <div className="flex flex-col justify-between">
      <MainTitle />
      <MainBestCourse />
      <TestCard />
    </div>
  );
}
