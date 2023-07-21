import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <DashboardLayout>
                  <h1>Home Page</h1>
                </DashboardLayout>
              }
            />
            <Route path="first" element={<First />} />
            <Route path="second" element={<Second />} />
            <Route path="third" element={<Third />}></Route>
            <Route
              path="unauth"
              element={
                <h1>
                  You are Unauthorized to Enter this page as you have not logged
                  in/ Signed Up
                </h1>
              }
            />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
