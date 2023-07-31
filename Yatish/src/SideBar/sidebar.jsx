import { BrowserRouter ,Route,Routes,NavLink,useNavigate } from "react-router-dom";


function Navigation(){
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"2em",marginBottom:"10px"}}>
        <NavLink to="/img1">Image1</NavLink>
        <NavLink to="/img2">Image2</NavLink>
        <NavLink to="/img3">Image3</NavLink>
        <NavLink to="/form">Form</NavLink>
        </div>
        
    
      );
}

export default function SideBar(){
    return(
        <div style={{backgroundColor:"#5de1f5" , display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",width:"20%",height:"100%"}}>
            <h1>SideBar</h1>
            <Navigation/>
        </div>
    );
}