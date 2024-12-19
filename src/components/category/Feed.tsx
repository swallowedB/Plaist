import { useChannelStore } from "../../stores/channelStore";
import { useState } from "react";
import { getChannelPostList } from "../../api/postApi";
import { useEffect } from "react";
import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";

// TODO 처음 진입시 컨텐츠 보이도록
export default function Feed() {
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);
  const channelList = useChannelStore((state) => state.channelList);
  const [postList, setPostList] = useState<Course[]>([]);

  const getPostList = async () => {
    let allPostList: Course[] = [];
    let uniquePostList: Course[] = [];

    // location filtering
    if (location.name === "전국" && spot.name === "전체") {
      try {
        const locationData = await Promise.all(
          channelList.location.map(
            async (ch) => await getChannelPostList(ch._id)
          )
        );
        allPostList.push(...locationData.flat());
        const spotData = await Promise.all(
          channelList.spot.map(async (ch) => await getChannelPostList(ch._id))
        );
        allPostList.push(...spotData.flat());
        uniquePostList = uniquePostById(allPostList);
      } catch (error) {
        console.error(error);
      }
    } else if (location.name === "전국") {
      try {
        const spotData = await getChannelPostList(spot.id);
        allPostList.push(...spotData.flat());
        uniquePostList = uniquePostById(allPostList);
      } catch (error) {
        console.log(error);
      }
    } else if (spot.name === "전체") {
      try {
        const locationData = await getChannelPostList(location.id);
        allPostList.push(...locationData.flat());
        uniquePostList = uniquePostById(allPostList);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const locationData = await Promise.all(
          channelList.location.map(
            async (ch) => await getChannelPostList(ch._id)
          )
        );
        const spotData = await Promise.all(
          channelList.spot.map(async (ch) => await getChannelPostList(ch._id))
        );

        const locationPostSet = new Set(locationData);
        allPostList = spotData.filter((post) => locationPostSet.has(post));
        uniquePostList = uniquePostById(allPostList);
      } catch (error) {
        console.log(error);
      }
    }

    uniquePostList.sort(
      (postA, postB) => postB.likes.length - postA.likes.length
    );

    setPostList(uniquePostList);
    console.log(channelList);
  };

  // 중복 id 제거
  const uniquePostById = (arr: Course[]) => {
    const idMap = new Map();
    arr.forEach((item) => {
      const title: TitleType = JSON.parse(item.title);
      idMap.set(title.id, item);
    });
    return Array.from(idMap.values());
  };

  // channelList, location 또는 spot이 변경될 때 게시물 리스트 업데이트
  useEffect(() => {
    if (channelList) {
      getPostList();
    }
  }, [channelList, location, spot]);

  if (!postList) return <p>로딩중...</p>;
  if (postList.length === 0)
    return <p className="font-pretendard text-white">게시물이 없습니다.</p>;
  return (
    <section className="grid grid-cols-2 gap-5 w-full h-full auto-rows-[258px]">
      {postList.map((post) => {
        if (post) return <AllCourseCardItem key={post._id} courseItem={post} />;
        // TODO: skeletonCard 추가
        else return <></>;
      })}
    </section>
  );
}
