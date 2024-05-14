import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const changeTitle = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="wrap">
      <div id="title">
        <h1>My Todo List</h1>
      </div>

      <div id="navi">
        제목
        <input type="text" onChange={changeTitle} value={text} />
        내용
        <input type="text" />
        <button>추가하기</button>
      </div>

      <h2>Working..</h2>
      <div id="topWrap">
        <div className="topContents">
          <h3>{text}</h3>
          <p>내용 input value값 받아오기</p>
          <button className="start">시작하기</button>
          <button className="finish">완료</button>
        </div>
      </div>

      <h2>Done..</h2>
      <div id="bottomWrap">
        <div className="topContents">
          <h3>제목 input value값 받아오기</h3>
          <p>내용 input value값 받아오기</p>
          <button className="start">삭제하기</button>
          <button className="finish">취소</button>
        </div>
      </div>
    </div>
  );
}

export default App;
