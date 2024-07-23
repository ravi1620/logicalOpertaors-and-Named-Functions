import React from 'react'

function Operators() {

    let a=10;
    let b=5;

    let c=50;
  return (
    <div>
        <h3>Opertaors</h3>
        <h4>Arithmetic Operators</h4>
<div className='div'>
<button type='button' onClick={()=>{
          console.log(a+b);
       
      }}>Addition</button>
</div>
<div className='div'>
<button type='button' onClick={()=>{
        
          console.log(a-b);
        
      }}>Substraction</button>
</div>
<div className='div'>
    <button type="button" onClick={()=>{
        
           console.log(a*b)
         
    }}>Multiplication</button>
</div>

<div className='div'>
    <button type="button" onClick={()=>{
        
           console.log(a/b)
         
    }}>Division</button>
</div>
<div className='div'>
    <button type="button" onClick={()=>{
        
           console.log(a%b)
         
    }}>Modulus</button>
</div>
<div className='div'>
    <button type="button" onClick={()=>{
       
           console.log(a++);
         
    }}>Increment</button>
</div>
<div className='div'>
    <button type="button" onClick={()=>{
        
           console.log(a--);
         
    }}>Decrement</button>
</div>
<h4>Assignment Operators</h4>
<div className='div'>
    <button type='button'onClick={()=>{
           console.log(a=50);
          
           
    }} >=</button>
</div>
<div className='div'>
    <button type='button'onClick={()=>{
     
           console.log(a +=50);
           
    }} >+=</button>
</div>
<div className='div'>
    <button type='button'onClick={()=>{
         
           console.log(a -=50);
        
    }} >-=</button>
</div>

<div className='div'>
    <button type='button'onClick={()=>{
         
           console.log(a *=50);
        
    }} >*=</button>
</div>
<div className='div'>
    <button type='button'onClick={()=>{
         
           console.log(a /=50);
        
    }} >/=</button>
</div>
<div className='div'>
    <button type='button'onClick={()=>{
         
           console.log(a +=50);
        
    }} >%=</button>
</div>


        

    </div>
  )
}

export default Operators