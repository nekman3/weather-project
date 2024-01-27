const iconUrl = "http://openweathermap.org/img/wn/";
import dayjs from "dayjs";

export const mapIconFromUrl = (icon) => {
  return `${iconUrl}${icon}@2x.png`;
};

export const isMobile = () => {
  return screen.width < 768;
};

export const formatCalendarDate = (index) => {
  return dayjs().add(index, "day").format("DD/MM");
};
