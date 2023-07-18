import React, { useState } from 'react'

function calChars(str) {
    return `${str.replaceAll(' ', '').length}`;
}

export default function TextForm(props) {

    const handleClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const hadleOnChange = (event) => {
        // this makes text var as oldtext + newtext we write on 
        setText(event.target.value);
    }

    const handleChange1 = (event) => {
        setText1(event.target.value);
    }

    const handleChange2 = (event) => {
        setText2(event.target.value);
    }

    const handleClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClickReplace = () => {
        console.log(inputText1);
        let newText = text.replaceAll(inputText1, inputText2);
        setText(newText);
        setText1('')
        setText2('')
    }

    const [text, setText] = useState('Enter your text');
    const [inputText1, setText1] = useState('');
    const [inputText2, setText2] = useState('');


    return (
        <>
            <div className="container" >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={hadleOnChange} id="myBox" rows="10"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleClickUpper}>toUpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClickLower}>toLowerCase</button>

                <div>
                    <h5 className='my-3'>Replace text</h5>
                    <input type="text" name="oldval" id="oldval" style={{ backgroundColor: `${props.mode === 'dark' ? '#212529' : 'white'}` }} onChange={handleChange1} value={inputText1} /> <span className='mx-3'>to</span>
                    <input type="text" name="newval" id="newval" style={{ backgroundColor: `${props.mode === 'dark' ? '#212529' : 'white'}` }} onChange={handleChange2} value={inputText2} />
                    <button className="btn btn-primary mx-2" onClick={handleClickReplace}>ReplaceAll</button>
                </div>
            </div >

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.length > 0 ? text.trim().split(' ').length : 0} words and {calChars(text)} characters (excluding space)</p>
                <p>approx time taken to read {(0.008 * text.split(' ').length)} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
