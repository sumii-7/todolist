import React, { useState } from "react";
import "./App.css";

function App() {
  const [todaylist, setTodaylist] = useState([
    {
      id: new Date().getTime(),
      title: "리액트 공부하기",
      contents: "리액트의 기초를 공부합니다.",
      isDone: false,
    },
    {
      id: new Date().getTime() + 1,
      title: "자바스크립트 공부하기",
      contents: "자바스크립트의 기초를 공부합니다.",
      isDone: true,
    },
  ]);

  // input state
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addList = () => {
    if (title == "" || contents == "") {
      alert("빈칸을 입력해주세요!");
      return;
    }

    const newList = {
      id: new Date().getTime(),
      title: title,
      contents: contents,
      isDone: false,
    };

    setTodaylist([...todaylist, newList]);
    setTitle("");
    setContents("");
  };

  const deleteList = (id) => {
    const deletedList = todaylist.filter(function (list) {
      return list.id != id;
    });
    setTodaylist(deletedList);
  };

  const toggleIsDone = (id) => {
    const newTodaylist = todaylist.map((list) =>
      list.id === id ? { ...list, isDone: !list.isDone } : list
    );
    setTodaylist(newTodaylist);
  };

  return (
    <div id="wrap">
      <div id="title">
        <h1>My Todo List</h1>
      </div>

      <div id="navi">
        <div className="input">
          제목:
          <input
            type="text"
            className="inputDesign"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input">
          내용:
          <input
            type="text"
            className="inputDesign"
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </div>
        <button className="plusList" onClick={addList}>
          추가하기
        </button>
      </div>

      <section id="contentWrap">
        <Todolist
          isDone={false}
          todaylist={todaylist}
          deleteList={deleteList}
          toggleIsDone={toggleIsDone}
        >
          Working...🔥
        </Todolist>

        <Todolist
          isDone={true}
          todaylist={todaylist}
          deleteList={deleteList}
          toggleIsDone={toggleIsDone}
        >
          Done...🤩
        </Todolist>
      </section>
    </div>
  );
}

export default App;

const List = ({ list, deleteList, toggleIsDone }) => {
  const TopWrapStyle = {
    width: "300px",
    height: "200px",
    border: "3px solid #182963",
    backgroundColor: "#fff",
    borderRadius: "20px",
    paddingLeft: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };
  const { title, contents, id, isDone } = list;

  return (
    <div style={TopWrapStyle}>
      <h3 className="listTitle">{title}</h3>
      <p>{contents}</p>
      <div>
        <button className="delete" onClick={() => deleteList(id)}>
          삭제하기
        </button>
        <button className="toggleButton" onClick={() => toggleIsDone(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

const Todolist = ({
  todaylist,
  deleteList,
  toggleIsDone,
  isDone,
  children,
}) => {
  const contentGap = {
    display: "flex",
    gap: "12px",
  };

  return (
    <>
      <h2>{children}</h2>
      <div className="box">
        <div style={contentGap}>
          {todaylist
            .filter((todaylist) => todaylist.isDone === isDone)
            .map(function (list) {
              return (
                <List
                  key={list.id}
                  list={list}
                  deleteList={deleteList}
                  toggleIsDone={toggleIsDone}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
