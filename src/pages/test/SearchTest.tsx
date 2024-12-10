import { useEffect } from "react";
import { getSearchByUser } from "../../api/api";

export default function SearchTest() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSearchByUser("jade");
        return data;
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>SearchTest</div>
  )
}
