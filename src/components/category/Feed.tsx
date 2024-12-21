import { useEffect, useState } from "react";
import { useChannelStore } from "../../stores/channelStore";
import { getChannelPostList } from "../../api/postApi";
import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";
import Pagenation from "../../components/main/utils/Pagenation";

type Sort = "최신순" | "인기순";

export default function Feed({ sort }: { sort: Sort }) {
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);
  const channelList = useChannelStore((state) => state.channelList);
  const [postList, setPostList] = useState<Course[]>([]);

  const getPostList = async () => {
    let allPostList: Course[] = [];
    let uniquePostList: Course[] = [];

    // location filtering
    // TODO : Use Memo
    if (location.name === "전국" && spot.name === "전체") {
      try {
        const ALL_CHANNEL_ID = "675e6ed26ada400ee6bec120";
        const Data = await getChannelPostList(ALL_CHANNEL_ID);
        allPostList = [...Data.flat()];
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

    uniquePostList.sort((postA, postB) => {
      return sortPages(postA, postB);
    });

    setPostList(uniquePostList);
    setPages(uniquePostList.length);
  };

  // 중복 id 제거
  const uniquePostById = (arr: Course[]) => {
    const idMap = new Map();
    arr.forEach((item) => {
      idMap.set(item._id, item);
    });
    return Array.from(idMap.values());
  };

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
      const POSTS_PER_PAGE = 10;
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

  //카테고리가 변경되는 경우
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
