import React,{useState} from 'react'

export default function Textform(props) {

  const [text, setText] = useState('MY NAME IS UMAIR  IM FRONTEND DEVELOPER I DESIGN AND CODE BEAUTIFULLY SIMPLE THINGS, AND I LOVE WHAT I DO');
  /*text ="new text";*/   //Wrong way to change the state//
  // setText=(new text);   //correct way to change state

  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    // console.log("Upper case was clicked ")
    // setText("This is a correct way to change state")
}

const handleOnChange = (event)=>{
  // console.log("Upper case was clicked ")
  setText(event.target.value);
}

const handleLoClick = ()=>{
  let newText=text.toLowerCase();
  setText(newText)
  // console.log("Upper case was clicked ")
  // setText("This is a correct way to change state")
}

const handleClearClick = () => {
   let newText = '';
   setText(newText)
};

const replacecasefunc = () => {
  let existing_text = prompt("Enter which word to replace : ");
  let replaced_text = prompt("Enter New Text");
  setText(text.replaceAll(existing_text, replaced_text))
};

const speakfun = () => {
  let message = new SpeechSynthesisUtterance();
  message.text = text;
  window.speechSynthesis.speak(message);
};

  const copyText =()=> {
    navigator.clipboard.writeText(text);
    setText(text);
  };

  const removespc =()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
        <div className="container" style={{ color: props.mode==='dark'?'white':'dark'}}>
                <div className="mb-3">
                    <h1 className='my-5'>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'light'}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-success mx-3 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
                
                <button type="button" className="btn btn-success mx-3 my-3" onClick={handleLoClick}>Convert To LowerCase</button>

                <button type="button" className="btn btn-success mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
        
                <button type="button" className="btn btn-success mx-3 my-3" onClick={replacecasefunc}>Replace Word</button>

                <button type="button" className="btn btn-success mx-3 my-3" onClick={speakfun}>Speak Now</button>

                
                 <button type="button" className="btn btn-success mx-3 my-3" onClick={removespc}>Remove Extra Space</button> 

                 <button type="button" className="btn btn-success mx-3 my-3" onClick={copyText}>Copy Data</button>

                

        
        </div>
      

        <div className='container my-4'>
             <h3>Your Text Summary</h3>
             <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
             <p>{0.008*text.split("").length}Mintues  read </p>
             <h4>Preview</h4>
             <p>{text}</p>
        </div>
    </>
  )
};
