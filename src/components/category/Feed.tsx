import { useEffect, useState } from "react";

import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";
import { getChannelPostList } from "../../api/postApi";
import { useChannelStore } from "../../stores/channelStore";
import Pagenation from "../../components/main/utils/Pagenation";

type Sort = "최신순" | "인기순";

export default function Feed({ sort }: { sort: Sort }) {
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);
  const channelList = useChannelStore((state) => state.channelList);
  const [postList, setPostList] = useState<Course[]>([]);
  const [allPostList, setAllPostList] = useState<Map<string, Course>>(
    new Map()
  );
  const getPostList = async () => {
    let uniquePostList: Course[] = [];
    const ALL_CHANNEL_ID = "675e6ed26ada400ee6bec120";

    try {
      const allChannelPostList: Course[] = await getChannelPostList(
        ALL_CHANNEL_ID
      );

      // Map으로 변환
      const postMap = new Map(
        allChannelPostList.map((post) => {
          const titleData = JSON.parse(post.title) as Title;
          const key = JSON.stringify({
            title: titleData.courseTitle,
            // description: titleData.courseDescription,
          });
          return [key, post];
        })
      );

      setAllPostList(postMap); // Map 상태 업데이트

      // location 및 spot 필터링
      if (location.name === "전국" && spot.name === "전체") {
        uniquePostList = [...allChannelPostList];
      } else if (location.name === "전국") {
        const spotData = await getChannelPostList(spot.id);
        uniquePostList = uniquePostByTitle(spotData, postMap);
      } else if (spot.name === "전체") {
        const locationData = await getChannelPostList(location.id);
        uniquePostList = uniquePostByTitle(locationData, postMap);
      } else {
        const spotData = await getChannelPostList(spot.id);
        const locationData = await getChannelPostList(location.id);
        const locationMap = new Map(
          locationData.map((post: Course) => {
            return [post.title, post];
          }) // title을 키로 설정
        );
        const totalPost = spotData.filter((post: Course) =>
          locationMap.has(post.title)
        );
        uniquePostList = uniquePostByTitle(totalPost, postMap);
      }

      // 정렬
      uniquePostList.sort((postA, postB) => sortPages(postA, postB));
      setPostList(uniquePostList);
    } catch (error) {
      console.error(error);
      setPostList([]);
    }
  };

  const uniquePostByTitle = (
    arr: Course[],
    currentMap: Map<string, Course>
  ): Course[] => {
    const seenKeys = new Set<string>();
    const result: Course[] = [];
    arr.forEach((item) => {
      try {
        const titleData = JSON.parse(item.title) as Title;
        const key = JSON.stringify({
          title: titleData.courseTitle,
          // description: titleData.courseDescription,
        });
        console.log("item", key);
        if (!seenKeys.has(key)) {
          // currentMap에 있으면 반환
          if (currentMap.has(key)) {
            result.push(currentMap.get(key)!);
            seenKeys.add(key); // 해당 키를 seenKeys에 추가
          }
          // else {
          //   console.log("not listed Item", key);
          //   result.push(item);
          //   seenKeys.add(key);
          // }
        }
      } catch (error) {
        // 잘못된 데이터는 제외
        console.error("Invalid JSON in title:", item.title);
      }
    });
    return result;
  };

  useEffect(() => {
    setPages(postList.length);
  }, [postList]);

  // 포스트 정렬
  const sortPages = (postA: Course, postB: Course) => {
    if (sort === "인기순") return postB.likes.length - postA.likes.length;
    else {
      // 최신순
      const dateB = new Date(postB.createdAt).getTime();
      const dateA = new Date(postA.createdAt).getTime();
      return dateB - dateA;
    }
  };

  // 페이지 설정
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPostList, setCurrentPostList] = useState<Course[]>([]);

  const setPages = (postListLength: number) => {
    if (postListLength > 0) {
      const POSTS_PER_PAGE = 8;
      setTotalPages(Math.ceil(postListLength / POSTS_PER_PAGE));
    } else setTotalPages(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const startPage = (page - 1) * 8;
    setCurrentPostList([...postList.slice(startPage, startPage + 8)]);
    console.log("currentPage:", currentPage, "totalPages:", totalPages);
  };

  // 카테고리가 변경되는 경우
  // API 호출 및 페이지 변경
  useEffect(() => {
    if (channelList) {
      getPostList();
      setPages(postList.length);
      handlePageChange(1);
    }
  }, [location, spot, totalPages]);

  // 화면 렌더링이 변경되는 경우
  useEffect(() => {
    if (postList) {
      postList.sort((postA, postB) => {
        return sortPages(postA, postB);
      });
    }
    setCurrentPostList([
      ...postList.slice((currentPage - 1) * 8, currentPage * 8),
    ]);
  }, [sort, postList, currentPage]);

  // 렌더링 반환
  if (!postList) return <p>로딩중...</p>;
  else if (currentPostList.length === 0)
    return (
      <p className="mt-10 text-sm font-medium text-center text-primary-700 font-pretendard">
        아직 등록된 코스가 없어요 இ௰இ
      </p>
    );
  else
    return (
      <>
        <section className="category--glassbox mt-[10px] px-[30px] py-[30px] overflow-hidden relative">
          <article className="grid grid-cols-2 gap-5 w-full h-full auto-rows-[258px]">
            {currentPostList.map((post) => {
              if (post)
                return <AllCourseCardItem key={post._id} courseItem={post} />;
              // TODO: skeletonCard 추가
              else return <></>;
            })}
          </article>
        </section>
        <Pagenation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          marginStyle="mt-[0px] mb-[200px]"
        />
      </>
    );
}
