import { useState } from 'react'
import './App.css'
import DashboardLayout from '../src/Components/DashboardLayout';
import PageNotFound from './PageNotFound';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DashboardLayout/>}/>
            <Route path="/firstpage" element={<FirstPage/>}/>
            <Route path="/secondpage" element={<SecondPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
