import logo from './logo.svg';


import './App.css';
import { useState } from 'react';

function App() {

  const[count, setCount]=useState(0);
  function minusHandler(){
   setCount(count-1);
  }

  function plusHandler(){
    setCount(count+1);
  }

 function resetHandler(){

  setCount(0);
 }

  return (
    <div  className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#8487]  flex-col gap-10'>
     <div className='text-[#0fffff]   font-medium text-2xl'>aage aao ya peeche jao</div> 
     <div  className=' bg-[white] flex justify-center py-3 gap-12 rounded-sm text-[25px] text-[#122525]'>


      <button  onClick={minusHandler}  className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'> -</button>
      <div className='font-bold gap-12 text-5xl'>  {count}  </div>
    <button onClick={plusHandler}   className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'> +</button>
    
     </div>
    <button  onClick={resetHandler}  className='bg-[#0398d4] rounded-sm  text-white px-5 py-2 text-lg'> reset</button>

    </div>
   
  );
}

export default App;

// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}