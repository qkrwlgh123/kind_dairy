import styled from "styled-components";
import theme from "../../../styles/layout/themes";

const ButtonBox = styled.div<{ $fontColor?: string; $bgColor?: string }>`
  width: fit-content;
  padding: 10px;
  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : props.theme.buttonBgColor};
  cursor: pointer;
  border-radius: 17px;

  button {
    background: inherit;
    font-size: 15px;
    border: none;
    cursor: pointer;
    font-weight: ${(props) => (props.$fontColor ? 700 : 700)};
    color: ${(props) =>
      props.$fontColor ? props.$fontColor : theme.commonColor.white};
  }
`;

export default { ButtonBox };
