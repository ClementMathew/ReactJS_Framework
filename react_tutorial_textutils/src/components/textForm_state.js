import React, { useState } from 'react'


export default function TextForm(props) {

    let handleOnClick = () => {
        setText("")
    }

    let handleOnChange = (event) => {
        setText(event.target.value)
        console.log("On Change")
    }

    let handleUpClick = () => {
        console.log("Convert to Uppercase " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("success", "Uppercase conversion done.")
        // setText("You clicked Convert to Uppercase ")
    }

    let handleLowClick = () => {
        console.log("Convert to Lowercase " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("warning", "Lowercase conversion done.")
        // setText("You clicked Convert to Lowercase ")
    }

    let handleCopy = () => {
        var copy = document.getElementById("myBox")
        copy.select();
        navigator.clipboard.writeText(copy.value)
        document.getSelection().removeAllRanges();
        props.showAlert("danger", "Text copied to clipboard.")
    }

    let handleExtraSpaces = () => {
        let noSpace = text.split(/[ ]+/)
        setText(noSpace.join(" "))
        props.showAlert("success", "Extra spaces removed.")
    }

    const [text, setText] = useState('Enter text here ');
    return (
        <>
            <div className='my-5'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onClick={handleOnClick} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.colorPal} mx-1 my-1`} disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.colorPal} mx-1 my-1`} onClick={handleLowClick} disabled={text.length === 0}>Convert to Lowercase</button>
                <button className={`btn btn-${props.colorPal} mx-1 my-1`} onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
                <button className={`btn btn-${props.colorPal} mx-1 my-1`} onClick={handleExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
            </div>
            <div className="container my-5">
                <h1>Your Text Summary</h1>
                <p className='mt-4'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>Take {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
            </div>
            <div>
                <h1>Preview</h1>
                <p className='mt-4'>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    )
}
