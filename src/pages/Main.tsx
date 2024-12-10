import { useEffect } from "react";
import { deleteFollow } from "../api/api";

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await deleteFollow("jade");
        console.log("API 응답 데이터:", data);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    fetchData();
  }, []);
  return <div>Main</div>;
}
