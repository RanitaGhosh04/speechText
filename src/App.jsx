import React from 'react'
import './App.css'
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";


const App = () => {

  // SpeechRecognition.startListening({ continuous: true })
  
  // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  
  return (
    <>
     <div className="container">
      <h2>Speech to Text Converter</h2>
      <br/>
      <p>A React hook that converts speech from the microphone to text and makes it available to you</p>
      <div className="main-content">
        {/* {transcript} */}
      </div>
      <div className="btn-style">
        <button>copy</button>
        <button>Start Listening</button>
        <button>Stop Listening</button>
      </div>
     </div>
    </>
  )
}

export default App