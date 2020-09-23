import React from "react";

export default function Home(props) {
  console.warn("props", props.data);
  return (
    <div>
      <center>
        <h1>Welcome Home Admin</h1>
        <h3>clicks {props.data.length}</h3>
        <button onClick={() => props.addCountHandler({ price: 100 })}>
          ADD Count
        </button>
      </center>
    </div>
  );
}
