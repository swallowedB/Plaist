interface ICourseCardItemProps {
  title: string;
  rating: number;
  location: string;
  imageUrl: string;
  contentId: string;
  contact: string;
}

// 중복되는 부분 추후 리펙토리 필요
interface ICourseLocationCardItemProps {
  title: string;
  rating: number;
  location: string;
  imageUrl: string;
  contentId: string;
  contact: string;
  category: string;
}
