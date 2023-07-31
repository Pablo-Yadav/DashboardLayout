import React, { useState } from "react";

export default function Accordion_easy(props) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    return setVisible(!visible);
  }
  return (
    <>
      <div
        className="medium"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3vw",
          background: "#eee",
        }}
        onClick={() => handleClick()}
      >
        <div>{props.title}</div>
        {visible ? <p> &#9650;</p> : <p> &#9660;</p>}
      </div>
      {visible && <p>{props.content}</p>}
    </>
  );
}
