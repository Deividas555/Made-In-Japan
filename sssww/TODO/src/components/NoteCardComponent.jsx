
import axios from 'axios';
import { useState } from 'react'; 

export default function Register() {
    const [topic, setTopic] = useState('');
    const [tasks, setTasks] = useState('');
    let description
    let action = "addNote"

    const handleSubmit = async (e) => {
        e.preventDefault();
        action = "register"
        
        try {
            description = {
                description: "swx",
                completed: true
            } 
            await axios.post('http://localhost:5000/api/notes', { topic, tasks, description }); // (Istestuota, serveris gauna informacija)
        } catch (error) {
            console.error('Registration error:', error);
        }
    };
    return (
        <section className=''>
                    <div className=''>
                        <h3>Username</h3>          
                        <input type="text" onChange={(e) => {
                            setTopic(e.target.value)
                            console.log(e.target.value)
                            }}/>
                    </div>

                    <div className=''>
                        <h3>Email</h3>
                        <input type="email" onChange={(e) => setTasks(e.target.value)}/>
                    </div>


                    <div>
                        <button className='' onClick={handleSubmit}>Submit</button>
                    </div>
                </section>
    )
}