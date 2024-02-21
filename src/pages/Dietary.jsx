import styled from "styled-components";
import UseCalendar from "../components/UseCalander";
import { Link } from "react-router-dom";
import ToChat from "../components/ToChat";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Subheader = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;

const MoveButton = styled.div`
  background-color: #80c793;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 200px;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;

  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #00a66b;
  }
`;

export default function Dietary() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>Welcome to Your Dietary Page</Header>
        <UseCalendar />
        <Subheader>Stay Healthy with Proper Diet!</Subheader>
      </ContentWrapper>
      <MoveButton>
        <Link to="/submit" style={{ textDecoration: "none" }}>
          <span style={{ color: "#fff", fontSize: 20 }}>내 식단 입력하기</span>
        </Link>
      </MoveButton>
      <ToChat />
    </Wrapper>
  );
}
