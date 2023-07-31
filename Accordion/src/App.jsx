import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./accordion_medium";
import Accordion_easy from "./accordion_easy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import AccordionNotFound from "./AccordionNotFound";
function Navigation() {
  return (
    <div className="Head">
      <span> </span>
      <NavLink
        to="/easy"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize: isActive ? "50px" : "15px",
          };
        }}
      >
        Easy
      </NavLink>
      <span> </span>
      <NavLink
        to="/medium"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize: isActive ? "50px" : "15px",
          };
        }}
      >
        Medium
      </NavLink>
      <span> </span>
      <NavLink
        to="/hard"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize: isActive ? "50px" : "15px",
          };
        }}
      >
        Hard
      </NavLink>
    </div>
  );
}

function App() {
  const items = [
    {
      title: "Section 1",
      content: "This is the content of section 1",
    },
    {
      title: "Section 2",
      content: "This is the content of section 2",
    },
    {
      title: "Section 3",
      content: "This is the content of section 3",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Route path="/">
            <Route
              path="easy"
              element={items.map((item, idx) => {
                return <Accordion_easy {...item} />;
              })}
            />
            <Route path="medium" element={<Accordion items={items} />} />
            {/* <Route path="hard" element={<Carousel_hard />} >
            </Route> */}
            {/* <Route path="unauth" element={<h1> Create Account First! </h1>} /> */}
         
            <Route  path="*" element={<AccordionNotFound/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
