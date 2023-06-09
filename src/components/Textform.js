import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const clearup = () =>{
        // console.log("UpperCase was Clicked " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleLoClick = () =>{
        // console.log("UpperCase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const handleUpChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    // setText('new text')
    return (
        <>
        <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className ="form-control" value= {text} onChange={handleUpChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={clearup}>Clear</button>
        </div>
        <div className="container my-3" style ={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
