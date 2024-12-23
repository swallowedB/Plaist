import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { NavigateFunction } from "react-router-dom";
import { useNotificationStore } from "../../stores/notificationStore";

const cryptoKey = import.meta.env.CRYPTO_KEY || "";

export function setCookie(
  key: string,
  token: string,
  navigate?: NavigateFunction
) {
  if (key.trim() === "" || token.trim() === "") return false;

  const creationTime = Date.now();
  const dataToEncrypt = JSON.stringify({ token, creationTime });
  const encryptedData = CryptoJS.AES.encrypt(
    dataToEncrypt,
    cryptoKey
  ).toString();

  Cookies.set(key, encryptedData, { expires: 60 / 1440 }); // 1시간

  if (navigate) {
    startExpirationCheck(key, 60, navigate);
  }

  return true;
}

export function startExpirationCheck(
  key: string,
  expirationMinutes: number,
  navigate: NavigateFunction
) {
  const checkInterval = setInterval(() => {
    const encryptedData = Cookies.get(key);
    if (!encryptedData) {
      clearInterval(checkInterval);
      return;
    }

    const decryptedData = JSON.parse(
      CryptoJS.AES.decrypt(encryptedData, cryptoKey).toString(CryptoJS.enc.Utf8)
    );
    const creationTime = decryptedData.creationTime;
    const currentTime = Date.now();
    const elapsedMinutes = (currentTime - creationTime) / 60000;
    const remainingMinutes = expirationMinutes - elapsedMinutes;

    if (remainingMinutes <= 5) {
      clearInterval(checkInterval);
      showExpirationModal(key, remainingMinutes, navigate);
    }
  }, 60000); // 1분마다 체크
}

function showExpirationModal(
  key: string,
  remainingMinutes: number,
  navigate: NavigateFunction
) {
  const modalContainer = document.createElement("div");
  modalContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 53, 123, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const modal = document.createElement("div");
  modal.style.cssText = `
    width: 334px;
    height: 187px;
    background-color: white;
    border-radius: 22px;
  `;
  modal.innerHTML = `
  <div style="height: 126px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <p>
      세션이 <span style="color: #245288;">약 ${Math.round(
        remainingMinutes
      )}분 후</span>에
      만료되어
    </p>
    <p>
      자동으로 <span style="color: #245288;">로그아웃</span> 됩니다.
    </p>
  </div>

  <div style="height: 61px; display: flex; border-top: 1px solid #245288;">
    <button
      id="extendSession"
      style="border-right: 1px solid #245288; flex-grow: 1; color: #245288;"
    >
      연장하기
    </button>
    <button
      id="closeModal"
      style="border-left: 1px solid #245288; flex-grow: 1;"
    >
      닫기
    </button>
  </div>
`;

  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  const autoLogoutTimer = setTimeout(() => {
    const stopNotification = useNotificationStore(
      (state) => state.stopNotification
    );
    modalContainer.remove();
    Cookies.remove(key);
    stopNotification();
    navigate("/login");
  }, remainingMinutes * 60000);

  // 이벤트 위임 사용
  modalContainer.addEventListener("click", (event) => {
    const target = event.target as HTMLElement; // target을 HTMLElement로 단언

    if (target.id === "extendSession") {
      clearTimeout(autoLogoutTimer);
      extendSession(key, navigate);
      modalContainer.remove();
    } else if (target.id === "closeModal") {
      clearTimeout(autoLogoutTimer);
      modalContainer.remove();
      Cookies.remove(key);
      navigate("/login");
    }
  });
}

function extendSession(key: string, navigate: NavigateFunction) {
  const encryptedData = Cookies.get(key);
  if (encryptedData) {
    const decryptedData = JSON.parse(
      CryptoJS.AES.decrypt(encryptedData, cryptoKey).toString(CryptoJS.enc.Utf8)
    );
    const token = decryptedData.token;
    setCookie(key, token, navigate); // 세션 재설정
  }
}
