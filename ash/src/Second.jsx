import * as React from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function Second()
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
    navigate("/third")
    console.log(context.data);
  }

  return (
    <>
    <label htmlFor="address">
      Address: 
      <input type="text" name="address" defaultValue={context?.data?.address} value={data?.address} onChange={(e) => handleChange(e,"address")}/>
    </label>
    <br />
    <label htmlFor="house">
      HouseNo: 
      <input type="text" name="house" defaultValue={context?.data?.house} value={data?.house} onChange={(e) => handleChange(e,"house")}/>
    </label>
    <br />
    <label htmlFor="altnumber">
      Alt Contact Number: 
      <input type="text" name="altnumber" defaultValue={context?.data?.altnumber} value={data?.altnumber} onChange={(e) => handleChange(e,"altnumber")}/>
    </label>
    <br />
    <button onClick={() => {navigate("/first")}}>Previous</button>
    <button onClick={() => handleClick("address","house","altnumber")}>Next</button>
    </>
  )
}