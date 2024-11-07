import { useState } from "react";
import { Form } from "./components/Form/index.jsx";
import {Text} from "./components/Text/index.jsx"

function App() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [submittedData, setSubmittedData] = useState({name:'',email:'',message:''});

  const handleInputName = (e)=>{
    setInputName(e.target.value);
  }

  const handleInputEmail = (e)=>{
    setInputEmail(e.target.value);
  }

  const handleInputMessage = (e) =>{
    setInputMessage(e.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setSubmittedData({name: inputName, email: inputEmail, message: inputMessage});
    //Below rerender will happen
    setInputName(""); //inputName ="" we should add this updated inputName in our actual form as a value of the input
    setInputEmail(""); //inputEmail ="" we should add this updated inputName in our actual form as a value of the input
    setInputMessage(""); //inputMessage="" we should add this updated inputName in our actual form as a value of the input
  }

  return (
    <div>
      <Form
        inputName={inputName}
        inputMessage={inputMessage}
        inputEmail={inputEmail}
        handleInputMessage={handleInputMessage} 
        handleInputName={handleInputName} 
        handleInputEmail={handleInputEmail} 
        handleSubmit={handleSubmit}/>

      {/* Rendering submitted data when click to submit button */}
      <Text submittedData={submittedData}/>
    </div>
  )
}

export default App
