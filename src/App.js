import React, { useState } from "react";
import "./styles.css";

const InputCheckBox = () => {
  //状態管理変数がオブジェクトってはじめてじゃね？
  const [checkedValues, setCheckedValues] = useState({
    マウス: false,
    モニター: false,
    キーボード: false
  });

  //イベントリスナー配下
  const handleChange = (e) => {
    //チェックされたプロパティが更新されcheckedValuesが更新
    //なんで{}？と思ったけどそっくりそのまま引き渡された値に更新するから、
    //オブジェクトであることとしてかっこで括ってんだわこれ
    //なぜブラケット記法？　変数内の文字列にアクセスしたい場合keyくくるけど
    //eオブジェクトも変数だからってこと？　key名をそのまま借りてる感じ？
    //状態管理変数にはそのまま"値": booleanが入る
    //そのため、return文の中にあるchecked属性で参照し、チェックの管理ができる
    setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });
  };

  //このコンポーネントは状態管理変数をひとつずつ取り出す
  //keyとvalueを同時に受け取るため、変数と仮引数を配列にするためentriesを使っている
  //preがアキュムレーターで、繰り返し処理の最後に返ってくる値をそのまま返り値として引き渡す
  //
  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      //取り出したpropsのvalueがtrueだった場合keyをpush
      value && pre.push(key);

      return pre;
    },
    //初期値は空の配列
    []
  );

  return (
    <div className="App">
      <p>
        現在選択されている値:<b>{stateOfCheckedValues.join("、")}</b>
      </p>

      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={handleChange}
          checked={checkedValues["マウス"]}
        />
        マウス
      </label>

      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={handleChange}
          checked={checkedValues["モニター"]}
        />
        モニター
      </label>

      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={handleChange}
          checked={checkedValues["キーボード"]}
        />
        キーボード
      </label>
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
