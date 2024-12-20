import { useMemo } from "react";
import images from "../../assets/images/importImages";

export const useConvertIcon = (locationCategory: string) => {
  const icon = useMemo(() => {
    switch (true) {
      case locationCategory.includes("카페"):
        return images.location_cafe_icon;
      case locationCategory.includes("음식점"):
        return images.location_restaurant_icon;
      case locationCategory.includes("숙박"):
        return images.location_accommodation_icon;
      case locationCategory.includes("관광명소"):
        return images.location_tourist_attraction_icon;
      case locationCategory.includes("문화거리"):
        return images.location_cultural_facility_icon;
      case locationCategory.includes("주차장"):
        return images.location_parking_lot_icon;
      case locationCategory.includes("편의점"):
        return images.location_convenience_store_icon;
      default:
        return images.location_logo_icon;
    }
  }, [locationCategory]);

  return icon;
};
