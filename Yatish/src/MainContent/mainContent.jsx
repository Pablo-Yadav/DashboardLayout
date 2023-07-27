import { BrowserRouter ,Route,Routes,Link,useNavigate } from "react-router-dom";
import BasicForm from "../BasicForm/basicform";
import EduForm from "../EduForm/eduform";



export default function MainContent(){
    return(
        <div style={{backgroundColor:"white",padding:"20px",width:"80%",height:"100%"}}>
            <h1> Main Content</h1>
            <p>Below are Respective Content</p>
            <Routes>
               <Route path="form" element={<BasicForm/>}/>
               <Route path="eduForm" element={<EduForm/>}/>
            </Routes>
        </div>
    );
}