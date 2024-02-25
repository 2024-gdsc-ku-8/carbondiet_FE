import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;

  bottom: 40px;
  right: 40px;
  justify-content: center;
  align-items: center;
`;

const ChatButton = styled.button`
  background-color: #00a66b;
  border: none;

  height: 60px;
  width: 60px;
  padding-bottom: 5px;

  border-radius: 100%;
  cursor: pointer;
`;

export default function ToChat() {
  const [hover, setHover] = useState(false);

  return (
    <Container>
      {hover && (
        <p style={{ fontSize: 20, color: "black", marginRight: "10px" }}>
          Ai에게 식단 상담받기
        </p>
      )}
      <Link to="/chat">
        <ChatButton
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p style={{ fontSize: 20, color: "white", margin: "0" }}>...</p>
        </ChatButton>
      </Link>
    </Container>
  );
}
