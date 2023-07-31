import * as React from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function First()
{
  const navigate = useNavigate();
  const context = React.useContext(MyContext);
  const [data, setData] = React.useState({});

  function handleChange(e,arg)
  {
    let temp = data;
    temp[arg] = e.target.value;
    setData(temp);
  }

  function handleClick(arg1,arg2,arg3)
  {
    let temp = context.data;
    temp[arg1] = data[arg1];
    temp[arg2] = data[arg2];
    temp[arg3] = data[arg3];
    context.setData(temp);
    navigate("/second");
    console.log(context.data);
  }

  return (
    <>
    <label htmlFor="name">
      Name: 
      <input type="text" name="name" defaultValue={context?.data?.name} value={data?.name} onChange={(e) => handleChange(e,"name")}/>
    </label>
    <br />
    <label htmlFor="email">
      Email: 
      <input type="text" name="email" defaultValue={context?.data?.email} value={data?.email} onChange={(e) => handleChange(e,"email")}/>
    </label>
    <br />
    <label htmlFor="number">
      Contact Number: 
      <input type="text" name="number" defaultValue={context?.data?.number} value={data?.number} onChange={(e) => handleChange(e,"number")}/>
    </label>
    <br />
    <button onClick={() => handleClick("name","email","number")}>Next</button>
    </>
  )
}