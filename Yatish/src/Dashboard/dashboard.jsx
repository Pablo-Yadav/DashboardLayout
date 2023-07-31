import MainContent from "../MainContent/mainContent";
import { MyContext } from "../Mycontext/MyContext";
import SideBar from "../SideBar/sidebar";
import { useState } from "react";


let initialD={
    firstName:"",
    lastName:"",
    "profile-summary":"",
    "email-id":"",
    "contact-number":"",
    "Alternate-email-id":"",
    "Alternate-contact-number":"",
  
  };
  let initialE={
  "university-name":"",
  "degree":"",
  "specialization":"",
  "start-date":"",
  "end-date":""
}

export default function Dashboard(props){

    let [formD,setFormD]=useState([initialD,[initialE]]);

     return(
        <div style={{backgroundColor:"#d6f55d",width:"100vw",height:"100vh",padding:"20px"}}>
            <h1>Home</h1>
            <p>Below is SideBar and its Content</p>
            <div style={{display:"flex",gap:"0em",width:"100%",height:"80%"}}>
                <SideBar/>
                <MyContext.Provider value={{formD,setFormD}}>
                <MainContent/>
                </MyContext.Provider>

             
            </div>

        </div>
     );
}


