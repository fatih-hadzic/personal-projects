import  { useState } from 'react'
import Header from "./Components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from './components/Results.jsx'

function App() {
    const [userInputState, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    const isValidInput = userInputState.duration >= 1;

    function handleChange(inputId, newValue){
        setUserInput(prevUserInput=>{
            return {
                ...prevUserInput,
                [inputId]: +newValue
            }
        })
    }


  return (
    <>
    <Header />
    <UserInput userInput={userInputState} onChange={handleChange}/>
    {!isValidInput && <p className='center'>Please enter a duration that is greater than 0!</p>}
    {isValidInput && <Results input={userInputState}/>}
    </>
  )
}

export default App
