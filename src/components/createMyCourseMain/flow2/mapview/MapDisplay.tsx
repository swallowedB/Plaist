import { useEffect, useRef, useState } from "react";
import SearchResultOfCreateMyItems from "./SearchResultOfCreateMyItems";
import images from "../../../../assets/images/importImages";

export default function MapDisplay({ goToTop }: { goToTop: () => void }) {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const infowindowRef = useRef<kakao.maps.InfoWindow | null>(null);
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  // 지도와 관련된 초기화 작업
  useEffect(() => {
    const mapContainer = document.getElementById("map");

    const mapOption = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    // 지도 생성
    mapRef.current = new window.kakao.maps.Map(mapContainer!, mapOption);

    // 인포윈도우 생성
    infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
  }, []);

  // 장소 검색 함수
  function searchPlaces() {
    if (!keyword.trim()) {
      alert("키워드를 입력해주세요!");
      return;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  }

  // 장소 검색 콜백 함수
  function placesSearchCB(data: any, status: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 중 오류가 발생했습니다.");
    }
  }
  //검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places: any) {
    setResult(places);
    const bounds = new kakao.maps.LatLngBounds();

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = addMarker(placePosition, i);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);
    }
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    mapRef.current?.setBounds(bounds);
  }

  // 마커 추가 함수
  function addMarker(position: kakao.maps.LatLng, idx: number) {
    if (!mapRef.current) return;

    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    );

    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(mapRef.current);
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    return marker;
  }

  // 마커 제거 함수
  function removeMarker() {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  }

  // 인포윈도우 표시 함수
  function displayInfowindow(marker: kakao.maps.Marker, title: string) {
    if (!infowindowRef.current || !mapRef.current) return;

    infowindowRef.current.setContent(
      `<div style="padding:5px;z-index:1;">${title}</div>`
    );
    infowindowRef.current.open(mapRef.current, marker);

    // 지도 중심을 해당 마커의 위치로 이동
    mapRef.current.setCenter(marker.getPosition());
  }

  const searchResults = result.map((place: Place, index) => {
    return (
      <SearchResultOfCreateMyItems
        key={Math.random()}
        placeName={place.place_name}
        category={place.category_name}
        contact={place.phone}
        location={place.address_name}
        isActive={selectedItemIndex === index}
        onSelect={() => {
          setSelectedItemIndex(index);
          goToTop();
          displayInfowindow(markers[index], place.place_name);
        }}
      />
    );
  });
  return (
    <>
      <div
        id="map"
        className=" w-[571px] h-[338px] mt-[38px] mb-[51px] shadow-default rounded-t-[20px]"
      ></div>
      <section className="w-full  rounded-t-[50px] bg-primary-100 flex flex-col items-center font-pretendard pt-[62px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchPlaces();
          }}
        >
          <div className={`w-[415px] h-[47px] relative`}>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              size={15}
              className={`
                w-[415px] h-[47px] px-6 py-3 font-pretendard bg-custom-input/70 shadow-default rounded-[30px] 
                outline-none focus:outline-none focus:bg-white transition-all placeholder:text-sm placeholder:text-custom-gray/70
                placeholder:font-medium
                `}
            />
            <button type="submit">
              <img
                src={images.search_icon}
                alt="검색 아이콘"
                className="absolute top-[13px] left-[373px]"
              />
            </button>
          </div>
        </form>

        <section className="w-[416px] flex flex-col items-center gap-[19px] mt-[39px] mb-[79px]">
          {searchResults}
        </section>
        {/* 버튼 */}
        {/* <CreateMyCourseFlowButton
          to="/create-course/flow2-select-course"
          isCompleteThisPage={true}
        >
          다음
        </CreateMyCourseFlowButton> */}
      </section>
    </>
  );
}
// 상단 라운드만 20
