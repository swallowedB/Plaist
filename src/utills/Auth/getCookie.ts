import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
const cryptoKey = import.meta.env.CRYPTO_KEY || ""; // 암호화, 복호화 key

export function getCookie(key: string) {
  if (key.trim() === "") return "";

  const encryptedToken = Cookies.get(key);

  // 복호화
  const bytes = CryptoJS.AES.decrypt(encryptedToken || "", cryptoKey);
  const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedToken;
}
