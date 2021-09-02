import React, { useState, useEffect } from 'react'
import categories from '../categories';

const QuizForm = ({ history,setTerms,Terms}) => {
    const [Inputs,setinputs]=useState({
        Value:0,
        level:'',
        name:''
    });
    const inputValidity = Inputs.Value === 0 || Inputs.level === '' || Inputs.name === '';
    const submitHandler = (e) => {
        e.preventDefault()
        setTerms({...Terms,category:Inputs.Value,difficulty:Inputs.level,contestantname:Inputs.name})
        history.push("/quiz-start")
    }
    useEffect(() => {
        document.title = 'Quiz-App';
    })
    return (
        <>
            <section>
                <article className="flex justify-center pt-28 pb-28">
                    <section className="rounded-lg z-40 bg-gray-200 shadow-xl border-b-8 border-gray-600">
                        <div className="bg-gradient-to-r from-blue-500 to-pink-500 pb-6 pt-6 rounded-t-lg text-center font-medium text-3xl text-white top-0">Quiz App</div>
                        <div className="pt-8 pb-8 pr-5 pl-5">
                            <form onSubmit={(e) => submitHandler(e)} className="flex flex-col justify-items-center" action="">

                                <input type="text" className="leading-tight outline-none hover:border-gray-500 hover:border-opacity-70 focus:border-blue-600  placeholder-gray-800 focus:placeholder-gray-400 focus:bg-white rounded-md border-2 border-opacity-40 border-gray-600 h-11 pl-2 w-72" placeholder="Name" value={Inputs.name} onChange={(e) => setinputs({...Inputs,name:e.target.value})} />

                                <select name="select" className="p-2 appearance-none mt-5 h-11 w-72 hover:border-gray-500  hover:border-opacity-70  border-2 outline-none border-opacity-40 focus:border-blue-600  rounded-md focus:bg-white border-gray-600" value={Inputs.Value} onChange={(e) => setinputs({...Inputs,Value:e.target.value})}>
                                    {categories.map((item, i) => (
                                        <option key={i} value={item.value} className={item.classes}>{item.category}</option>
                                    ))}
                                </select>
                                <select placeholder="select" name="Medium" value={Inputs.level} className="border-2 hover:border-gray-500 hover:border-opacity-70 appearance-none outline-none focus:border-blue-600  border-opacity-40 focus:bg-white rounded-md h-11 border-gray-600 p-2 mt-5 w-72" onChange={(e) => setinputs({...Inputs,level:e.target.value})}>
                                    <option value="">Select Difficulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                                <input type="submit" disabled={inputValidity} value="Start Quiz" className={`w-72 mt-7 p-2 h-11 outline-none rounded-md focus:ring-gray-900 focus:ring-opacity-60 focus:ring-4 text-lg font-medium text-white bg-gray-800 ${inputValidity ? `bg-opacity-50 cursor-not-allowed` : "transition ease-in-out duration-200 hover:bg-gray-900 cursor-pointer"} `} />
                            </form>
                        </div>
                    </section>
                </article>
            </section>

        </>
    )
}

export default QuizForm
