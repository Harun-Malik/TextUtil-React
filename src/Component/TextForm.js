import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Please Enter Text')

    const handleUPClick = () => {
        // console.log('Uppercase was clicked')
        setText(text.toUpperCase())
        props.showAlert('Converted into Uppercase', 'success')
    }
    const handleLWclick = () => {
        // console.log('Lowercase was clicked')
        setText(text.toLowerCase())
        props.showAlert('Converted into Lowerercase', 'success')
    }
    const handleOnChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }
    const reverseHandle = () => {
        let reverseText = text.split(' ').reverse()
        let reverseWord = reverseText.map(word => word.split('').reverse().join(''))
        console.log(reverseWord)
        let [...copyFinalText] = reverseWord
        console.log(...copyFinalText)
        setText(...copyFinalText);
    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Spaces Removed', 'success')
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const clearText = ()=>{
        setText('')
        props.showAlert('Text Removed', 'success')
    }
    
    return (
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white':'black'}}>

            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743':'white',color: props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="10"></textarea>
                <button className='btn btn-primary my-2' onClick={handleUPClick}>Convert to UpperCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleLWclick}>Convert to LowerCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={reverseHandle}>Reverse Text</button>
                <button className='btn btn-primary my-2 mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary my-2 mx-2' onClick={clearText}>Clear Text</button>
                {/* <button className='btn btn-primary my-2 mx-2' onClick={preview}>Preview</button> */}
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <button type="button" className="btn btn-light">{text.split(' ').length} words, and {text.length} characters</button>
                <br /><button type="button" className="btn btn-light my-2">{0.008 * text.split(' ').length} minuts for read</button>   
                <h3>Preview</h3>
                <p>{text.length>0 ? text:'Please enter text in above text box to preview here'}</p>

            </div>
        </div>
    )
}
