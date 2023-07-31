import TextFieldComponent from '../TextField/textField';
import {useContext,useState, useEffect} from 'react'
import { BrowserRouter ,Route,Routes,Link,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { MyContext } from '../Mycontext/MyContext';

let initialDetails={
    "firstName":"",
    "lastName":"",
    "profile-summary":"",
    "email-id":"",
    "contact-number":"",
    "Alternate-email-id":"",
    "Alternate-contact-number":"",
  
  };
export default function BasicForm(){
    let [formDetails,setFormDetails]=useState(initialDetails);
    let context=useContext(MyContext);
    // console.log("Context is",context);
    let navigate=useNavigate();
    
    useEffect(()=>{
       setFormDetails(context.formD[0]);
    },[])

    function handleChange(e,name){
      let newObj={...formDetails};
    //   console.log("value is",newObj);
      setFormDetails({...newObj,[name]:e.target.value});
    }

    function handleNextClick(){
        let newObject={...formDetails};
        let contextFormArray=[...context.formD];
        let contextFormArray1=contextFormArray[1];

        context.setFormD([newObject,contextFormArray1]);
       navigate("/eduForm");
    }

    return(

        <div className="form">
      <h1 id="Head">Basic Details</h1>
     
   <div style={{
    display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gridTemplateRows:"auto auto auto"
}}>

      <TextFieldComponent 
    handleChangeField={handleChange}
    value={formDetails["firstName"]}
    
    id="fname" 
    label="First-Name" 
    variant="outlined" 
    name="firstName" 
   />

    <TextFieldComponent 
    handleChangeField={handleChange}
    value={formDetails["lastName"]}
    
    id="lname" 
    label="Last-Name" 
    variant="outlined" 
    name="lastName" 
    />
    
    
    <TextFieldComponent 
    handleChangeField={handleChange}
    value={formDetails["email-id"]}
   
    id="email-id" 
    label="Email-Id" 
    variant="outlined" 
    name="email-id" 
    />
    
   

    <TextFieldComponent 
    handleChangeField={handleChange}
    value={formDetails["contact-number"]}
    
    id="contact-number" 
    label="Contact-Number" 
    variant="outlined"  
    name="contact-number" 
    
    />
    
    <TextFieldComponent 
    handleChangeField={handleChange}
    value={formDetails["Alternate-email-id"]}
    
    id="A-email-id" 
    label="Secondary-Email-Id (Optional)" 
    variant="outlined" 
    name="Alternate-email-id" 
   
    />
    
    <TextFieldComponent 
    handleChangeField={handleChange}
   
    value={formDetails["Alternate-contact-number"]}
    id="A-contact-number" 
    label="Alternate-Contact-Numbe (Optional)" 
    variant="outlined" 
    name="Alternate-contact-number"
    
    />
    
    <TextFieldComponent 
    handleChangeField={handleChange}
    
    value={formDetails["profile-summary"]}
    id="profile-summary" 
    label="Profile-Summary" 
    variant="outlined" 
    
    multiline 
    style={{
         gridColumn:"auto/span 3"
    }  }
    name="profile-summary"
    
    />
   </div>
    
    <div className="nextButton">
    <Button variant="contained" onClick={()=>{handleNextClick()}}>Next</Button>
    </div>

    </div>
    );
}