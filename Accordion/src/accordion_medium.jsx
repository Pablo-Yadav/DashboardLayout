import react, { useState } from "react";
export default function Accordion({ items }) {
  const [Activeindex, setActiveIndex] = useState();

  function handleClick(index) {
    // console.log("hjn",index)
    return setActiveIndex(index === Activeindex ? -1 : index);
  }
  return (
    <>
      {items?.map((item, index) => (
        <div
          className="outer"
          style={{
            display: "flex",
            alignItems: "center",
            
            backgroundColor: "#eee",
          }}
          key={item.title}
        >
          <div style={{display:"flex", alignItems:"center", gap:"3vw"}} className="button" onClick={() => handleClick(index)}>
            <div >{item.title} </div>
            {index === Activeindex ? <p> &#9650;</p> : <p> &#9660;</p>}
          </div>
          {index === Activeindex && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
}
