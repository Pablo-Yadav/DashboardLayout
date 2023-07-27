import { useState, useContext, useEffect } from "react";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

import EducationComponent from "../EducationComponent/educationComponent";
import RemoveButton from "../RemoveButton/removeButton";
import { MyContext } from "../Mycontext/MyContext";

let initialComponent = {
  "university-name": "",
  degree: "",
  specialization: "",
  "start-date": "",
  "end-date": "",
};

export default function EduForm() {
  let [educationComponent, setEducationComponent] = useState([
    initialComponent,
  ]);
  let context = useContext(MyContext);
  console.log("Education is ", educationComponent);
  console.log("Context is", context);
  let navigate = useNavigate();

  useEffect(() => {
    setEducationComponent(context.formD[1]);
    
  }, []);


  function handleAddClick() {
    let temp = [...educationComponent];
    temp.push(initialComponent);
    setEducationComponent(temp);
  }

  function handleRemove(index) {
    let newArray = [...educationComponent];
    //  newArray=newArray.filter(item=>newArray.indexOf(item)!==index);
    newArray.splice(index, 1);

    // let newComp= educationComponent.filter(item=>educationComponent.indexOf(item)!==index)
    setEducationComponent(newArray);
  }

  function handlePrevClick() {
    let newArray = [...educationComponent];
    let contextArray = [...context.formD];
    let contextObj = { ...contextArray[0] };
    context.setFormD([contextObj, newArray]);
    navigate("/form");
  }

  function handleChange(e, index, key) {
    let updateDetails = [...educationComponent];

    let newObject = updateDetails[index];

    if (key !== "start-date" && key !== "end-date") {
      newObject = { ...newObject, [key]: e.target.value };
    } else {
        // let month=e["$M"] + 1;
        // let day=e["$D"];
        // let year=e["$y"];
        // let dateString="";
        // if(month<10){
        //     dateString+=`0${month}/`;
        //     if(day<10){
        //      dateString+=`0${day}/`;
        //     }else{
        //         dateString+=`${day}/`;
        //     }
        //     dateString+=`${year}`
        // }else{
        //     dateString+=`${month}/`
        //     if(day<10){
        //         dateString+=`0${day}/`;
        //        }else{
        //            dateString+=`${day}/`;
        //        }
        //        dateString+=`${year}`
        // }

      newObject = {
        ...newObject,
        [key]: e,
      };
    }

    let newArray1 = [
      ...updateDetails.slice(0, index),
      newObject,
      ...updateDetails.slice(index + 1),
    ];
    setEducationComponent(newArray1);
  }

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="stretch"
          gap="2vw"
        >
          <h1 id="Head">Education Details</h1>
          <div className="add-button">
            <Button variant="outlined" onClick={handleAddClick}>
              ADD
            </Button>
          </div>
        </Grid>
      </Grid>
      {educationComponent.map((item, idx) => {
        return (
          <div key={idx}>
            {idx > 0 && <RemoveButton handleRemove={handleRemove} idx={idx} />}
            <EducationComponent
              ID={idx}
              item={item}
              handleChange={handleChange}
            />
          </div>
        );
      })}

      <Button
        variant="outlined"
        onClick={() => {
          handlePrevClick();
        }}
      >
        {" "}
        Previous{" "}
      </Button>
    </div>
  );
}
