import CryptoJS from "crypto-js";
import Cookies from "js-cookie"; // js-cookie 라이브러리 임포트

const cryptoKey = import.meta.env.CRYPTO_KEY || ""; // 암호화, 복호화 key

export function setCookie(key: string, token: string) {
  if (key.trim() === "" || token.trim() === "") return false;

  // 암호화
  const encryptedToken = CryptoJS.AES.encrypt(token, cryptoKey).toString();
  Cookies.set(key, encryptedToken);

  return true;
}
