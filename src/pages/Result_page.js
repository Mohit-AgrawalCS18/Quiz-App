import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
const Result = ({Total,contestantname}) => {
    const history=useHistory()
    useEffect(()=>(
        document.title="Quiz-Result"
    ))

    const QuitHandler=()=>{
        if(window.confirm("Are you sure")){
            history.push("/")
        }
    }

    return (
        <>
        {Total !== -1 && contestantname?
            <section className="flex justify-center mt-36">
                <main className="w-5/12 shadow-xl h-80 bg-gray-100 border-b-8 border-gray-500 rounded-lg">
                    <div className="pl-4 pt-4 pb-4 bg-gradient-to-r rounded-t-lg from-blue-500 to-pink-500 text-white font-semibold text-3xl">Result</div>
                    <div className="pl-4 pr-4 pt-6 pb-10 flex">
                        <div className="text-center pt-2">
                            <div className="w-40 h-44 bg-green-50 border-8 border-gray-600 shadow-md pt-10 font-semibold text-green-600 text-6xl">{contestantname[0].toUpperCase()}</div>
                        </div>
                            <ul className="pl-4 pt-2">
                                <li>
                                    <span className="text-xl font-sans font-bold">Name:</span>
                                    <span className="text-xl font-sans font-semibold text-gray-600 ml-1 font-normal">{contestantname}</span>
                                </li>
                                <li className="pt-3 pb-4">
                                    <span className="font-bold font-sans text-xl">Score:</span>
                                    <span className="text-xl font-sans font-semibold text-gray-600 ml-1 font-normal">{Total*10} of 100</span>
                                </li>
                                <li className="flex pb-4">
                                    <div className="relative pt-2 w-72">
                                        <div className="h-3 text-xs flex rounded-l-full rounded-r-full bg-gray-300">
                                            <div style={{width:`${Total*10}%`}} className="transition duration-700 delay-100 ease-in-out shadow-none rounded-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-semibold">{Total*10}%</div>
                                </li>
                                <li className="flex justify-between">
                                    <button type="button" onClick={()=>QuitHandler()} className={`bg-red-500 w-28 p-2 focus:outline-none rounded-md focus:ring-red-500 focus:ring-opacity-50 focus:ring-4 font-sans text-lg font-medium text-white`}>Back</button>
                                    <div className="text-lg pt-2 pl-2 font-sans font-semibold">{Total*10>30?'Great,You have passed!':'Fail,better luck next time'}{Total*10>30?<span className="text-xl">&#128077;</span>:<span className="text-xl">&#128078;</span>}</div>
                                </li>
                            </ul>

                    </div>
                </main>
            </section>
        :''
        }
        </>
    )
}

export default Result
