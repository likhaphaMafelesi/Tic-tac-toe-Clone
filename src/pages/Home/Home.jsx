import React, { useContext } from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

function Home() {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx(); // Trigger click sound effect
          navigate("/game-on");
        }}
        onMouseEnter={hoverSfx}
      >
        Play Now
      </Button>
    </Container>
  );
}

export default Home;
