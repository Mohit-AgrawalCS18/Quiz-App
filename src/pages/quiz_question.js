import React from 'react'

const QuizQuestion = ({correct_answer,setauth,contestantname,auth,setscore,answer,category,question,questionNo}) => {
    const list_style=["A","B","C","D"];
    const currentanswerHandler=(currentoption)=>{
        setauth(currentoption);
            if(currentoption === correct_answer){
                setscore(1);
            }
            else{
                setscore(0);
            }
    }
    return (
        <section>
            <header className="flex justify-between font-medium text-2xl font-sans pl-4 pr-4 pt-5 pb-5 rounded-t-lg bg-gradient-to-r from-blue-500 to-pink-500  text-white">
                <div>{contestantname}</div>
                <div>{category}</div>
            </header>
            <main className="pl-4 pr-4 pt-5 pb-6">
                <div className="font-medium tracking-normal antialiased text-xl font-sans">
                    <span>Q.{questionNo+1}</span>
                    <span> {question}</span>
                </div>
                <div>
                    <ul className="p-2">
                        {answer.map((option,i)=>(
                            <li key={i} className={`text-lg font-sans rounded-3xl p-3 border bg-white shadow-lg cursor-pointer antialiased mt-3 outline-none font-medium md:w-auto${auth === option?`transition-all ease-in-out duration-300 bg-gradient-to-r from-blue-500 to-pink-500 border text-white border-none shadow-md`:``} `} onClick={()=>currentanswerHandler(option)}><span className={`pt-1 pb-1 pl-3 pr-3 rounded-full mr-1 ${auth === option && option!== null?`text-gray-50 bg-gray-300 bg-opacity-60`:`text-blue-600 bg-opacity-30 bg-gray-400`} `}>{list_style[i]}</span>{option}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </section>
    )
}

export default QuizQuestion
