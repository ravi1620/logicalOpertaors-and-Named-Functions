import React, { useRef } from "react";
import Operators from "./Operators";

function MarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let hindiInputRef = useRef();
  let engInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let telResultRef = useRef();
  let hindiResultRef = useRef();
  let engResultRef = useRef();
  let mathsResultRef = useRef();
  let sciResultRef = useRef();
  let socResultRef = useRef();
  let paraRef=useRef();

  let calculate=()=>{
    let firstName=firstNameInputRef.current.value;    
    let lastName=firstNameInputRef.current.value;   
    let telMarks=Number(telInputRef.current.value);
    let hindiMarks=Number(hindiInputRef.current.value);
    let engMarks=Number(engInputRef.current.value);
    let mathsMarks=Number(mathsInputRef.current.value);
    let sciMarks=Number(sciInputRef.current.value);
    let socMarks=Number(socInputRef.current.value);
  
    let totalMarks=(telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+socMarks);

    let result;

    if(telMarks<35|| hindiMarks<35|| engMarks<35|| mathsMarks<35|| sciMarks<35|| socMarks<35){
result="Failed"
    }else{
result="Passed"
    }


    alert(`${firstNameInputRef.current.value} ${lastNameInputRef.current.value} got total marks are ${totalMarks}`);
    paraRef.current.innerHTML=`${firstNameInputRef.current.value} ${lastNameInputRef.current.value} ${result} and got total marks are ${totalMarks}`;
  }

  let firstNameonFocus=()=>{
    firstNameInputRef.current.style.backgroundColor = "green";
  }
  let firstNameonChange=()=>{
    firstNameInputRef.current.style.backgroundColor = "pink";
    firstNameInputRef.current.style.color = "black";
  }
  let firstNameonBlur=()=>{
    firstNameInputRef.current.style.backgroundColor = "";
  }

  let lastNameonFocus=()=>{
    lastNameInputRef.current.style.backgroundColor = "green";
  }
  let lastNameonChange=()=>{
    lastNameInputRef.current.style.backgroundColor = "pink";
    lastNameInputRef.current.style.color = "black";
  }
  let lastNameonBlur=()=>{
    lastNameInputRef.current.style.backgroundColor = "";
  }


  let telonFocus=()=>{
    telInputRef.current.style.backgroundColor = "green";
  }
  let telonChange=()=>{
    telInputRef.current.style.backgroundColor = "pink";
    telInputRef.current.style.Color = "black";
    if (
      telInputRef.current.value >= 0 &&
      telInputRef.current.value <= 100
    ) {
      if (telInputRef.current.value >= 35) {
        telResultRef.current.innerHTML = "Pass";
        telResultRef.current.style.color = "green";
      } else {
        telResultRef.current.innerHTML = "Fail";
        telResultRef.current.style.color = "red";
      }
    } else {
      telResultRef.current.innerHTML = "invalid";
      telResultRef.current.style.color = "blue";
    }
  }
 let telOnBlur=()=>{
    telInputRef.current.style.backgroundColor = "";
  }

  let hindionFocus=()=>{
    hindiInputRef.current.style.backgroundColor = "green";
  }
  let hindionChange=()=>{
    hindiInputRef.current.style.backgroundColor = "pink";
    hindiInputRef.current.style.Color = "black";
    if (
      hindiInputRef.current.value >= 0 &&
      hindiInputRef.current.value <= 100
    ) {
      if (hindiInputRef.current.value >= 35) {
        hindiResultRef.current.innerHTML = "Pass";
    hindiResultRef.current.style.color = "green";
      } else {
        hindiResultRef.current.innerHTML = "Fail";
        hindiResultRef.current.style.color = "red";
      }
    } else {
      hindiResultRef.current.innerHTML = "invalid";
      hindiResultRef.current.style.color = "blue";
    }
  }
  let hindiOnBlur=()=>{
    hindiInputRef.current.style.backgroundColor = "";
  }
  let engonFocus=()=>{
    engInputRef.current.style.backgroundColor = "green";
  }
  let engonChange=()=>{
    engInputRef.current.style.backgroundColor = "pink";
    engInputRef.current.style.color = "black";
    if (
      engInputRef.current.value >= 0 &&
      engInputRef.current.value <= 100
    ) {
      if (engInputRef.current.value >= 35) {
        engResultRef.current.innerHTML = "Pass";
        engResultRef.current.style.color = "green";
      } else {
        engResultRef.current.innerHTML = "Fail";
        engResultRef.current.style.color = "red";
      }
    } else {
      engResultRef.current.innerHTML = "invalid";
      engResultRef.current.style.color = "blue";
    }
  }
let engonBlur=()=>{
    engInputRef.current.style.backgroundColor = "";
}

let mathsonFocus=()=>{
    mathsInputRef.current.style.backgroundColor = "green";
}
let mathsonChange=()=>{
    mathsInputRef.current.style.backgroundColor = "pink";
    mathsInputRef.current.style.color = "black";
    if (
      mathsInputRef.current.value >= 0 &&
      mathsInputRef.current.value <= 100
    ) {
      if (mathsInputRef.current.value >= 35) {
        mathsResultRef.current.innerHTML = "Pass";
        mathsResultRef.current.style.color = "green";
      } else {
        mathsResultRef.current.innerHTML = "Fail";
        mathsResultRef.current.style.color = "red";
      }
    } else {
      mathsResultRef.current.innerHTML = "invalid";
      mathsResultRef.current.style.color = "blue";
    }
}
let mathsonBlur=()=>{
    mathsInputRef.current.style.backgroundColor = "";
}

let scionFocus=()=>{
  sciInputRef.current.style.backgroundColor = "green";
} 
let scionChange=()=>{
    sciInputRef.current.style.backgroundColor = "pink";
    sciInputRef.current.style.color = "black";
    if (
      sciInputRef.current.value >= 0 &&
      sciInputRef.current.value <= 100
    ) {
      if (sciInputRef.current.value >= 35) {
        sciResultRef.current.innerHTML = "Pass";
        sciResultRef.current.style.color = "green";
      } else {
        sciResultRef.current.innerHTML = "Fail";
        sciResultRef.current.style.color = "red";
      }
    } else {
      sciResultRef.current.innerHTML = "invalid";
      sciResultRef.current.style.color = "blue";
    }
}
let scionBlur=()=>{
    sciInputRef.current.style.backgroundColor = "";
}

let soconFocus=()=>{
    socInputRef.current.style.backgroundColor = "green";
   }
   let soconChange=()=>{
       socInputRef.current.style.backgroundColor = "pink";
       socInputRef.current.style.color = "black";
       if (
         socInputRef.current.value >= 0 &&
         socInputRef.current.value <= 100
       ) {
         if (socInputRef.current.value >= 35) {
           socResultRef.current.innerHTML = "Pass";
           socResultRef.current.style.color = "green";
         } else {
           socResultRef.current.innerHTML = "Fail";
           socResultRef.current.style.color = "red";
         }
       } else {
         socResultRef.current.innerHTML = "invalid";
         socResultRef.current.style.color = "blue";
       }
   }
   let soconBlur=()=>{
       socInputRef.current.style.backgroundColor = "";
   }
  return (
    <div>
      <form className="form">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            onFocus={() => {
              firstNameonFocus();
            }}
            onChange={() => {
            firstNameonChange();            
            }}
            onBlur={() => {
              firstNameonBlur();
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label className="label">Last Name</label>
          <input
            type="text"
            ref={lastNameInputRef}
         onFocus={()=>{
          lastNameonFocus();
         }}
         onChange={()=>{
          lastNameonChange();
         }}
         onBlur={()=>{
          lastNameonBlur();
         }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label className="label">Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
            telonFocus();
            }}
            onChange={() => {
            
        telonChange();
            }}
            onBlur={() => {
          telOnBlur();
            }}
          ></input>
          <span ref={telResultRef}></span>
        </div>
        <div>
          <label className="label">Hindi</label>
          <input
            type="number"
            ref={hindiInputRef}
            onFocus={() => {
             hindionFocus();
            }}
            onChange={() => {
           hindionChange();
              
            }}
            onBlur={() => {
           hindiOnBlur();
            }}
          ></input>
          <span ref={hindiResultRef}></span>
        </div>
        <div>
          <label className="label">English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
            engonFocus();
            }}
            onChange={() => {
           engonChange();
            }}
            onBlur={() => {
              engonBlur();
            }}
          ></input>
          <span ref={engResultRef}></span>
        </div>
        <div>
          <label className="label">Maths</label>
          <input
            type="number"
            ref={mathsInputRef}
            onFocus={() => {
            mathsonFocus();
            }}
            onChange={() => {
              mathsonChange();
            }}
            onBlur={() => {
             mathsonBlur();
            }}
          ></input>
          <span ref={mathsResultRef}></span>
        </div>
        <div>
          <label className="label">Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => {
            scionFocus();
            }}
            onChange={() => {
              scionChange();
            }}
            onBlur={() => {
             scionBlur();
            }}
          ></input>
          <span ref={sciResultRef}></span>
        </div>
        <div>
          <label className="label">Social</label>
          <input
            type="number"
            ref={socInputRef}
           
          onFocus={()=>{
            soconFocus();
          }}
          onChange={()=>{
            soconChange();
          }}
          onBlur={()=>{
            soconBlur();
            }}></input>
          <span ref={socResultRef}></span>
        </div>

        <button type="button" onClick={() => {
         calculate();
     
        }}>
          calculate
        </button>
        <p ref={paraRef}></p>
      </form>

      <Operators></Operators>
    </div>
  );
}




export default MarksSheet;
