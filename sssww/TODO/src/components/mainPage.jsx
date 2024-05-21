import axios from 'axios';
import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import whaHappen from '../../../BACK/fetchWhaHappen.js'
import noteSchema from '../../../BACK/src/modules/noteSchema.js';


console.log("XD?")
let betterTest = await axios.get('http://localhost:5000/api/getnotes');
console.log(betterTest)


//let getNode = await axios.get('http://localhost:5000/api/getnotes');
//console.log(getNode)

export default function mainPage () {

    const [topic, setTopic] = useState('');
    const [description, setDesc] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [completion, setCompletion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('http://localhost:5000/api/givenotes', { topic, description, completion, id }); // (Istestuota, serveris gauna informacija)
            betterTest = await axios.get('http://localhost:5000/api/getnotes');
        } catch (error) {
            console.error('Loginerror', error);
        }
    };

    async function deleteNote(topic){
        try{
            console.log(topic)
            await axios.post('http://localhost:5000/api/deletenote', { topic });
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <main className='bg-img w-screen h-screen flex fixed'>
            <section className='w-8/12 h-screen bg-slate-400/10 flex flex-wrap p-4 overflow-auto scrollable-div'>
                {
                    betterTest.data.map((smth, key) => {
                        return (
                            <div key={key} className='text-white w-[320px] h-[460px] bg-[#525252] rounded-lg m-5'>
                                <div className='flex justify-between'>
                                     <h1 className='knewave-regular pl-8 pt-4 w-max'>{smth.topic}</h1>  
                                     <Icon icon='bytesize:trash' className='text-5xl mt-3 mr-3 hover:text-red-600 hover:cursor-pointer'onClick={() => deleteNote(smth.topic)}/>
                                </div>
                                <p className='pl-8'>ID:{smth.id}</p>
                                <h1 className='ml-[10%] josefin-sans'>
                                    {smth.description}
                                </h1>
                                <div className='mt-[80%] flex justify-center font-bold'>
                                    <h1>{ smth.completion }</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
                
            <nav className='w-4/12 h-screen border-slate-100 bg-[#525252]'>
                <div className='text-white absolute top-0 right-0 ' > <p> Testuotojas | Javainis </p> </div>
                    <div>
                        <div className='bg-[#312A2A] text-white absolute bottom-0 right-0 w-4/12 h-[95%] '> 
                                <div>    
                                    <div>   <p>paserti karves </p> </div>
                                    <div>   <p>id</p> </div>
                                </div>
                            <div>
                                <p> Steps</p>
                                    <div className=''>
                                             topic
                                            <input type="text" className='bg-[#3b3131]' onChange={(e) => {
                                            setTopic(e.target.value)
                                            console.log(e.target.value)
                                            }}/>
                                    </div>
                                    
                                    <div>   
                                            desc
                                            <input type="text" className='bg-[#3b3131] 'onChange={(e) => {
                                            setDesc(e.target.value)
                                            console.log(e.target.value)
                                            }}/>
                                    </div>

                                    <div>
                                            Id
                                            <input type="text" className='bg-[#3b3131]' onChange={(e) => {
                                            setId(e.target.value)
                                            console.log(e.target.value)
                                            }}/>
                                    </div>

                                
                                
                                <div>   
                                        Completion
                                        <input type="text" className='bg-[#3b3131]' onChange={(e) => {
                                        setCompletion(e.target.value)
                                        console.log(e.target.value)
                                        }}/>
                        <button className='' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                         </div>
                  </div>
            </nav>
        </main>
    )
}


