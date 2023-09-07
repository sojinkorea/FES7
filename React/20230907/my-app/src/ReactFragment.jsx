import React from "react";

const array = [1, 2, 3, 4, 5];

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function itemList() {
  const list = items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </React.Fragment>
    );
  });

  return <dl>{list}</dl>;
}

function ReactFragment() {
  const newArray = array.map((item) => {
    return (
      <React.Fragment key={item}>
        <dt>숫자</dt>
        <dd>{item}</dd>
      </React.Fragment>
    );
  });

  return (
    // <React.Fragment>
    //   <h1>hello</h1>
    //   <h2>소진</h2>
    // </React.Fragment>
    <>
      <h1>hello</h1>
      <h2>소진</h2>
      <dl>{newArray}</dl>
    </>
  );
}

// export default ReactFragment;
export default itemList;
