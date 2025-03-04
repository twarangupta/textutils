 import React, {useState} from 'react'
 
 export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');//default value is enter text here
    // setText("New Text");

   const handleOnCLick = () => {  
    //    console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
   } 
   const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);

 //    let newText = text.toUpperCase();
 //    setText(newText);
    } 
    const handleLoCLick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // const deleteDefaultText = () => {
    //     let newText = '';
    //     setText(newText);
    // }
    const handleClearCLick = () => {
        let newText = '';
        setText(newText);
    }
    const handleTextToSpeech = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
   return (
    <>
    <div className="container my-3" >
        <h1>{props.heading}</h1>
        <div className="mb-3">   
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea> {/* onClick={deleteDefaultText} */}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearCLick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleTextToSpeech}>Text to Speech</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>  
   )
 }
 