import React, { useState } from 'react';
import "../style/Compinent.css"
import axios from "axios"
const CodeConverter = () => {
  const [inputCode, setInputCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState({targe:"",to:""});
  const [convertedCode, setConvertedCode] = useState('');

  const handleConvert = () => {
    // Make a request to the backend to convert the code
    // You can use a library like Axios for making API requests
    // Replace <API_ENDPOINT> with the actual endpoint of your backend
    axios.post('https://convert-debug.onrender.com/convert', { code: inputCode, targetLanguage })
      .then(response => {
        // Set the converted code in the state
        console.log(response)
        setConvertedCode(response.data.shayari);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error scenarios
      });
  };


  function handleDebug(){
    axios.post('https://convert-debug.onrender.com/debug', { code: inputCode })
    .then(response => {
        // Set the converted code in the state
        console.log(response)
        setConvertedCode(response.data.shayari);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error scenarios
      });
  }


function handleQuality(){
    axios.post('https://convert-debug.onrender.com/check', { code: inputCode })
    .then(response => {
        // Set the converted code in the state
        console.log(response)
        setConvertedCode(response.data.shayari);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error scenarios
      });
}

  return (
    <div>
      <textarea value={inputCode} onChange={e => setInputCode(e.target.value)} />
      <select value={targetLanguage.target} onChange={e => setTargetLanguage({target:e.target.value.target,to:targetLanguage.to})}>
        <option value="">Select target language</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">javascript</option>
        {/* Add more language options here */}
      </select>
      <select value={targetLanguage.to} onChange={e => setTargetLanguage({target:targetLanguage.target,to:e.target.value})}>
        <option value="">Select target language</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">javascript</option>

        {/* Add more language options here */}
      </select>
      <button onClick={handleConvert}>Convert</button>
      <button onClick={handleDebug}>debug</button>
      <button onClick={handleQuality}>quality check</button>
      <div>
        <h3>Converted Code:</h3>
        <pre>{convertedCode}</pre>
      </div>
    </div>
  );
};

export default CodeConverter;