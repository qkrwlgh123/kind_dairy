import theme from "../styles/layout/themes";

export const getFontColor = (index: number) => {
  switch (index) {
    case 0:
      return theme.objectFontColor.first;
    case 1:
      return theme.objectFontColor.second;
    case 2:
      return theme.objectFontColor.third;
    case 3:
      return theme.objectFontColor.fourth;
    case 4:
      return theme.objectFontColor.fifth;
  }
};
