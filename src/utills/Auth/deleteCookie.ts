import Cookies from "js-cookie"; // js-cookie 라이브러리 임포트
export function deleteCookie(key: string) {
  Cookies.remove(key);
}
