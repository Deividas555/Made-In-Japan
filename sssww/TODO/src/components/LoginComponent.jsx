import axios from 'axios';
import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let action = ""

    const handleSubmit = async (e) => {
        e.preventDefault();
        action = "Login"
        
        try {
            await axios.post('http://localhost:5000/api/login', { username, password, action }); // (Istestuota, serveris gauna informacija)
            window.location.href = "/mainpage"
        } catch (error) {
            console.error('Loginerror', error);
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
        <section className=' border-2  bg-[#D9D9D9] w-1/5 '>
                    <div className='text-center  pb-4 '>
                        <h3 className=''>Username</h3>  
                                <div className=' justify-center flex'>
                                    <div className='place-content: center;  '>        
                                        <input className='text-align: right border-2  ' type="text" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>

                    </div>

                    <div  className='text-center pb-6 '>
                        <h3>Password</h3>
                        <input className='border-2' type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='text-center pb-4 '>
                        <button className='border-2 bg-white w-2/4' onClick={handleSubmit}>Login</button>
                    </div>   

                     <div className='text-center pb-4 '>
                        <Link to="/register" className='text-red-600 hover:text-red-300'>Registration</Link>
                    </div>     
        </section>
    </div>
                   
    )
}