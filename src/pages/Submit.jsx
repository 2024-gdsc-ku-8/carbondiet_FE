import { useCallback, useState, useEffect } from "react";
import { data } from "../components/foodData";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ToChat from "../components/ToChat";

const FoodButton = styled.div`
  width: max-content;
  display: inline-block;
  margin: 0 10px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
`;

const SelectDiv = styled.div`
  height: 100px;
  align-items: center;
  display: flex;
  overflow-x: scroll;
  width: 60%;
  min-width: 450px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListDiv = styled.div`
  overflow-y: scroll;
  margin-top: 20px;
  height: 200px;
  width: 450px;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 15px;
`;

const SubmitButton = styled.button`
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

export default function Submit() {
  const [foods, setFoods] = useState([]);
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(0);
  const today = new Date();

  const initFood = async () => {
    data.then((v) => {
      setFoods(v);
    });
  };

  useEffect(() => {
    initFood();
  }, []);

  const addFood = useCallback((id) => {
    setSelected((prev) => {
      return [...prev, id];
    });
  }, []);

  const deleteFood = useCallback((id) => {
    setSelected((prev) => {
      return prev.filter((v) => v !== id);
    });
  }, []);

  const submitHandle = () => {
    let foodNames = "";
    let foodValue = 0;
    selected.forEach((id, idx) => {
      if (idx > 0) foodNames += ",";
      foodNames = foodNames + foods[id - 1].name;
      foodValue += Number(foods[id - 1].value);
    });
    setSelected([]);
    setSubmitted(foodValue);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SelectDiv>
        {foods.map(
          (food) =>
            !selected.includes(food.id) && (
              <FoodButton
                onClick={() => {
                  addFood(food.id);
                }}
              >
                <p style={{ fontSize: 20 }}>{food.name}</p>
              </FoodButton>
            )
        )}
      </SelectDiv>
      <p style={{ fontSize: 20, marginTop: "50px" }}>
        {today.getMonth() + 1 + "월 " + today.getDate() + "일의 식단"}
      </p>
      <ListDiv>
        {selected.map((id) => (
          <FoodButton
            onClick={() => {
              deleteFood(id);
            }}
          >
            <p style={{ fontSize: 20 }}>{foods[id - 1].name}</p>
          </FoodButton>
        ))}
        {submitted !== 0 && (
          <p
            style={{
              fontSize: 20,
              margin: "auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            저장되었습니다! 탄소배출량은 {submitted} gCO2e입니다.
          </p>
        )}
      </ListDiv>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {submitted === 0 && (
          <SubmitButton disabled={selected.length === 0} onClick={submitHandle}>
            <span style={{ color: "#fff", fontSize: 20 }}>저장하기</span>
          </SubmitButton>
        )}
        <Link to="/dietary" style={{ textDecoration: "none" }}>
          <SubmitButton>
            <span style={{ color: "#fff", fontSize: 20 }}>
              내 식단 확인하기
            </span>
          </SubmitButton>
        </Link>
      </div>
      <ToChat />
    </div>
  );
}
