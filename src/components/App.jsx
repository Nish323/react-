import { useEffect, useState } from "react";
import { ColorfullMessage } from "./ColorfullMessage";

export const App = () => {
  console.log("App");
  const [num, setNum] = useState(0); //const [実際の値, 更新関数] = useState(初期値);
  const [isShowText, setIsShowText] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    //setNum((prev) => prev + 1);
    /*
    setNum(num + 1);
    setNum(num + 1);
    だとうまく動作しない。
    */
  };

  const onClickToggle = () => {
    setIsShowText(!isShowText);
  };

  //useEffectの利用はしっかり吟味しよう！
  useEffect(() => {
    if(num > 0){
      if(num % 3 === 0) {
        isShowText || setIsShowText(true);
      } else {
        isShowText && setIsShowText(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="green">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={ onClickToggle }>on/off</button>
      { isShowText && <p>表示or非表示</p> }
    </>
  );
};