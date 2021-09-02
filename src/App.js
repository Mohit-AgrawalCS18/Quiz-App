import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom'
import QuizForm from './Components/Quiz_form'
import QuizPage from './pages/quiz_page'
import Result from './pages/Result_page'

const App = () => {
  const [terms,setTerms]=useState({
    category:0,
    difficulty:'',
    contestantname:''
  })
  const [Data, setData] = useState(null);
  const [total,setTotal]=useState(0)
  const history=useHistory()
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://opentdb.com/api.php?amount=10${terms.category && `&category=${terms.category}`}${terms.difficulty && `&difficulty=${terms.difficulty}`}&type=multiple`).then((re) => {
        setData(re.data.results);
      })
    }
    fetchData();
  }, [terms.category, terms.difficulty])
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <QuizForm setTerms={setTerms} Terms={terms} history={history}  />
        </Route>
        <Route path="/quiz-start">
          {Data && Data.length === 10 && <QuizPage Data={Data} Total={total} history={history} setTotal={setTotal} contestantname={terms.contestantname} />}
        </Route>
        <Route path="/quiz-Result">
          <Result Data={Data} history={history} contestantname={terms.contestantname} Total={total} />
        </Route>
      </Switch>
    </>
  )
}

export default App
