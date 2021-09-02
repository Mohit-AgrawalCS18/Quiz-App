import React,{useEffect, useState} from 'react'
import QuizQuestion from './quiz_question';
function QuizPage({Data,contestantname,Total,history,setTotal}) {
    const [count, setcount] = useState(0);
    const [answer, setanswer] = useState([]);
    const [score, setscore] = useState(0);
    const [emptyList]=useState(Array(Data.length).fill(0));
    const [auth, setauth] = useState('');
    const valid = answer.includes(auth);
    useEffect(() => (
        function answerHandle() {
            setanswer([Data[count].correct_answer, ...Data[count].incorrect_answers].sort(() => Math.random() - 0.5));
            document.title = "quiz-Question";
        } ()
    ), [Data, count]);

    const quizHandler = () => {
        emptyList.splice(count,1,score)
        setauth('')
        if (count !== Data.length - 1) {
            setcount(count + 1);
        }else {
            setTotal(emptyList.reduce((total,amount)=>(total+amount)));
            history.push("/quiz-Result");
        }
    };
    const QuitHandler=()=>{
        if(window.confirm("Are you sure")){
            history.push("/")
        }
    }
    return (
        <>{Total===0?
            <section className="flex justify-center mt-14">
                <article className="rounded-xl w-7/12 shadow-lg border-b-8 border-gray-500 bg-gray-200">
                    <QuizQuestion {...Data[count]} contestantname={contestantname} setauth={setauth} auth={auth} questionNo={count} setscore={setscore} answer={answer} />
                    <div className="flex justify-between pr-5 pl-5 pb-4">
                        <button type="button" onClick={()=>QuitHandler()} className={`transition ease-in-out duration-300 w-28 p-2 outline-none rounded-md focus:ring-blue-500 focus:ring-opacity-60 focus:ring-4 font-medium text-white bg-red-600 font-sans text-lg `}>Quit</button>
                        <button type="button" disabled={!valid} onClick={() => quizHandler()} className={`transition ease-in-out duration-300 w-28 p-2 outline-none rounded-md focus:ring-blue-500 focus:ring-opacity-60 focus:ring-4 font-sans text-lg font-medium text-white ${!valid ? `bg-gradient-to-r from-blue-300 to-pink-300 cursor-not-allowed` : `bg-gradient-to-r from-blue-500  to-pink-500`}`}>Next</button>
                    </div>
                </article>
            </section>
        :history.push("/")
        }
        </>
    );
}

export default QuizPage
