
import axios from 'axios';
import { useState } from 'react'; 

export default function Register() {
    const [topic, setTopic] = useState('');
    const [tasks, setTasks] = useState('');
    let description
    let action = "addNote"
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('sw')
        try {
            let note = await axios.get('http://localhost:5000/api/getnotes');
            console.log(note.data); 
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