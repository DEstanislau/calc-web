import React, { useState } from "react";

import api from "../../services/api";

import {
  Container,
  Header,
  Body,
  ContainerTime,
  Column,
  Title,
  DTPicker,
  ContainerButton,
  ButtonSubmit,
  Result,
} from "./styles";

const Home = () => {
  const [initial_time, setInitialTime] = useState(new Date());
  const [final_time, setFinalTime] = useState(new Date());
  const [time, setTime] = useState({});

  async function handleSubmit() {
    const response = await api.post("calc", {
      initial_time,
      final_time,
    });

    setTime(response.data);
  }

  return (
    <Container>
      <Header>
        <h1> Calcule agora as horas diurnas e noturnas trabalhadas! </h1>
      </Header>
      <Body>
        <ContainerTime>
          <Column>
            <Title> Horário Inicial</Title>
            <DTPicker onChange={setInitialTime} value={initial_time} />
          </Column>
          <Column>
            <Title> Horário Final</Title>
            <DTPicker onChange={setFinalTime} value={final_time} />
          </Column>
        </ContainerTime>
        <ContainerButton>
          <ButtonSubmit onClick={handleSubmit}>Calcular</ButtonSubmit>
        </ContainerButton>
      </Body>

      <Result>
        <Column>
          <Title>Horas Diurnas</Title>
          <Title>Horas Noturnas</Title>
        </Column>

        <Column>
          <h2>{time.daytimeHours?.length ? time.daytimeHours?.length : 0} </h2>
          <h2>{time.nightHours?.length ? time.nightHours?.length : 0} </h2>
        </Column>
      </Result>
    </Container>
  );
};

export default Home;
