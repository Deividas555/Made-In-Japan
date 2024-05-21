import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from "./components/register.jsx"
import Login from "./components/LoginComponent.jsx"
import Mainpage from './components/mainPage.jsx';
export default function Prisijungimas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/mainpage' element={<Mainpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}