import styled from "styled-components";

const ContentBox = styled.div<{ color: string }>`
  font-size: 10.5px;
  background-color: ${(props) => props.color};
  padding: 1px 3px;
  border-radius: 8px;
  color: ${(props) => props.theme.fontColor};
`;

export default { ContentBox };
