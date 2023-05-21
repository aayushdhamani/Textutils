import React  from "react";


export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
 let mystyle={
  color :props.mode==='dark'?'white':'black',
  backgroundColor: props.mode==='dark'?'#574f9b':'white'
 }


  return (
    <div className="container" >
      <h2 className="my-2" style= {{color :props.mode==='dark'?'white':'black'}}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button Collapsed" style={mystyle} type="button" data-bs-toggle="collapse"  data-bs-target="#collapseOne"aria-expanded="false" aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,Character count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-expanded="false"   aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"aria-labelledby="headingTwo"data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils is a free counter tools that provide instant character count and word count statistics for a given text. Textutilsreports the number of words and characters.Thus it is sutable forwriting the text with words/character
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"style={mystyle}type="button"data-bs-toggle="collapse"data-bs-target="#collapseThree"aria-expanded="false" aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browser such aschrome, firebox etc.It suits to counts characters in fb, blogs, books, pdf documents, documents etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
