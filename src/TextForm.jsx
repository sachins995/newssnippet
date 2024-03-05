import React, {useState} from "react";

export default function TextForm(props){
  const [text, setText] = useState();
  const change = (e) =>{
    console.log("changed")
    setText(e.target.value)
  }
  const handleClick = () =>{
    let upperText = text.toUpperCase();
    setText(upperText)
    console.log("clicked")
    
  }
return(
    <div>
      <h3>{props.heading}</h3>
      <textarea className="text" rows={4} value = {text} onChange={change}></textarea>
      <button onClick={handleClick}>Convert</button>
     
    </div>
)

}