import img from "../../../../assets/images/tryImg.png"
import images from "../../../../assets/images/importImages"

export default function MycourseCardItem() {
  return (
    <div>
      <div className={`
        w-[177px] h-[194px] rounded-2xl bg-white shadow-blue
        flex flex-col items-center p-2
        `}>
        {/* 썸네일 이미지 */}
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }} 
          className="w-[158px] h-[125px] " />
        
        {/* card texts */}
        
        {/* 제목 및 좋아요 수 */}
        <div>
          <p>"✨2025 새해 모임"</p>
          {/* 좋아요 수 */}
          <div>
            <img src={images.like_filled_icon} alt="" />
            <p>4.7k</p>
          </div>
        </div>

      </div>
    </div>
  )
}
