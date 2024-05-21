import axios from 'axios';
import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("")
    let action = ""

    const handleSubmit = async (e) => {
        e.preventDefault();
        action = "Register"
        
        try {
            await axios.post('http://localhost:5000/api/register', { username,email, password, action }); // (Istestuota, serveris gauna informacija)
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
                                        <img className='w-7 absolute' src="./src/img/ciuvas.png" alt="" />
                                        <input className='text-align: right border-2  ' type="text" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>

                    </div>

                    <div className='text-center pb-4'>
                        <h3>Email</h3>
                        <input className='border-2' type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div  className='text-center pb-6 '>
                        <h3>Password</h3>
                        <input className='border-2' type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='text-center pb-4 '>
                        <button className='border-2 bg-white w-2/4' onClick={handleSubmit}>Register</button>
                    </div>    
        </section>
    </div>
    )
}