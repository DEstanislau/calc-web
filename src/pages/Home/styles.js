import styled from "styled-components";
import { lighten } from "polished";

import DateTimePicker from "react-datetime-picker";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonSubmit = styled.button`
  margin: 10px;
  height: 44px;
  width: 300px;
  background: ${lighten(0.1, "#002f55")};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: #002f55;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const DTPicker = styled(DateTimePicker)`
  margin-top: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Title = styled.h2`
  margin: 0 20px;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
