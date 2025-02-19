import { useState } from "react";
import { ColorfullMessage } from "./ColorfullMessage";

export const App = () => {
  const [num, setNum] = useState(0); //const [実際の値, 更新関数] = useState(初期値);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="green">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};