import SearchResultOfCreateMyItems from "./SearchResultOfCreateMyItems";
import SearchBar from "../../../utills/SearchBar";
import CreateMyCourseFlowButton from "../../CreateMyCourseFlowButton";
import { useState } from "react";

export default function SearchResultOfCreateMy() {
  //   let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   let options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //     level: 3, //지도의 레벨(확대, 축소 정도)
  //   };

  //   let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  const [isCompleteThisPage, setIsCompleteThisPage] = useState();
  return (
    <section className="w-full h-[710px] rounded-t-[50px] bg-primary-100 flex flex-col items-center font-pretendard pt-[62px]">
      {/* 지도 api 검색 로직 */}
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."
      ></script> */}

      <SearchBar placeholder="추가할 코스를 선택해주세요" />
      <section className="w-[416px] flex flex-col items-center gap-[19px] mt-[39px] mb-[79px]">
        <SearchResultOfCreateMyItems
          placeName="명랑핫도그 이태원 1호점"
          category="음식점"
          contact="031-232-2342"
          location="서울 용산구 이태원동..."
        />
        <SearchResultOfCreateMyItems
          placeName="명랑핫도그 이태원 1호점"
          category="음식점"
          contact="031-232-2342"
          location="서울 용산구 이태원동..."
        />
        <SearchResultOfCreateMyItems
          placeName="명랑핫도그 이태원 1호점"
          category="음식점"
          contact="031-232-2342"
          location="서울 용산구 이태원동..."
        />
        <SearchResultOfCreateMyItems
          placeName="명랑핫도그 이태원 1호점"
          category="음식점"
          contact="031-232-2342"
          location="서울 용산구 이태원동..."
        />
      </section>
      {/* 버튼 */}
      <CreateMyCourseFlowButton
        to="/create-course/flow2-select-course"
        isCompleteThisPage={true}
      >
        다음
      </CreateMyCourseFlowButton>
    </section>
  );
}
