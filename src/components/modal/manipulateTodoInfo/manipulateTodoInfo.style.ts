import styled from "styled-components";

const BottonModalTitle = styled.div`
  margin: 15px 0 30px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const TodoFuncButton = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 5px;
  padding: 15px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BottomModalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-top: 30px;
  div {
    cursor: pointer;
  }
`;

export default {
  BottonModalTitle,
  ButtonsContainer,
  TodoFuncButton,
  BottomModalListContainer,
};
