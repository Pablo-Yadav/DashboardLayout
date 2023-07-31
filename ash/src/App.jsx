import * as React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const MyContext = React.createContext();
function App()
{
    const [data, setData] = React.useState({});
    return (
        <>
        <MyContext.Provider value={{data, setData}}>
            <BrowserRouter>
            <Routes>
                <Route path="/first" element={<First />}/>
                <Route path="/second" element={<Second />}/>
                <Route path="/third" element={<Third />}/>
            </Routes>
            </BrowserRouter>
        </MyContext.Provider>
        </>
    )
}
export {MyContext, App}