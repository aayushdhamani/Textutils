import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    console.log("you have clicked on button");
    let newtext=text.toUpperCase();
    setText(newtext)

  }
  const handleLoClick=()=>{
    console.log("you have clicked on button");
    let newtext=text.toLowerCase();
    setText(newtext)

  }
  const handleOnChange=(event)=>{
    console.log("Onchange");
    setText(event.target.value);

  }
  const handleCopy=()=>{
  
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

 
const[text, setText]=useState('');
// console.log(props);



  return (
  <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

<h2 className='mb-2'>{props.heading} </h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#6e5baf':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
</div>
<div className="conatainer my-2" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your text summery</h2>
<p>{text.split( /\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<p>Preview</p>
<p>{text.length>0?text:'Nothing to preview'}</p>
</div>
  </>
  )
}
