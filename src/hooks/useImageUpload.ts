import { useState } from "react";

export default function useImageUpload() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        // 이미지 용량 체크 (3MB 제한)
        if (file.size > 3 * 1024 * 1024) {
          // 3MB = 3 * 1024 * 1024 bytes
          alert("파일 크기가 너무 큽니다. 3MB 이하의 파일을 선택해주세요.");
          return;
        } else {
          setErrorMessage(null); // 용량 부합 시 에러 메시지 초기화
        }

        setSelectedImage(file); // 파일 데이터를 상태에 저장

        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          setImagePreview(base64String); // 이미지 미리보기 설정
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  };

  return { imagePreview, selectedImage, handleImageUpload, errorMessage };
}
