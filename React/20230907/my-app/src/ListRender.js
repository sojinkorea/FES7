import "./ListRender.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

// function ListItem({ data }) {
//   return <li className={data.visited ? "visited" : ""}>{data.area}</li>;
// }

function ListRender() {
  const areas = list.map((item, index) => {
    return (
      <li key={index} className={item.visited ? "visited" : ""}>
        {item.area}
      </li>
    );
  });

  return (
    <ul className="list-area">
      {/* <ListItem data={list[0]} />
      <ListItem data={list[1]} />
      <ListItem data={list[2]} />
      <ListItem data={list[3]} /> */}
      {areas}
    </ul>
  );
}

export default ListRender;
