import { ColorfullMessage } from "./ColorfullMessage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="green">元気です！</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};