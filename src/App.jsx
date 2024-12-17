
import { TextField,Stack,Button} from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() {
  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)
  const [interest,setInterset] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const validInput = (inputTag)=>{
    // console.log(inputTag);
    const {name,value} = inputTag
    console.log(name,typeof value);
    // console.log(!!value.match(/^\d+(\.\d+)?$/));

     if(name == 'principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
     }else if( name =='rate'){
      setRate(value) 
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }  else{
        setInvalidRate(true)
      }

     }else{
    setYear(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
      setInvalidYear(false)
    }else{
      setInvalidYear(true)
    }
  }
    
  }
 
   const handleCalculate=(e)=>{
     e.preventDefault()
    if(principle && rate && year){
      setInterset(principle*rate*year/100)
    }else{
      alert("Fill the form completely...")
    }
   }

   const handleReset = ()=>{
    setInterset(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)


   }

  return (
    <>
      <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
     
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h1>Simple Interset Calculator</h1>
      <p>Calculate your simple interset easily</p>
      <div className='bg-warning p-3 text-light text-center rounded'>
        <h1> ₹ {interest}</h1>
        <p>Total simple interset</p>
      </div>
      <form className='mt-5'>
        {/* principle */}
        <div className='mb-3'>
        <TextField  value={principle || ""} name='principle' onChange={(e)=>validInput(e.target)} className='w-100' id="outlined-principle" label="Principle" variant="outlined" />
        </div>

        {/*Invalid principle*/}
        {invalidPrinciple && <div className= 'mb-3 fw-bolder text-danger'>Invalid Principle amount</div>}
        

         {/* Rate */}
         <div className='mb-3'>
        <TextField name='rate' value={rate || ""}  onChange={(e)=>validInput(e.target)} className='w-100' id="outlined-principle" label="Rate" variant="outlined" />
        </div>

         {/*Invalid Rate*/}
         {invalidRate && <div className= 'mb-3 fw-bolder text-danger'>Invalid rate</div>}

         {/* Year */}
         <div className='mb-3'>
        <TextField name='year' value={year || ""}  onChange={(e)=>validInput(e.target)} className='w-100' id="outlined-principle" label="Year" variant="outlined" />
        </div>

         {/*Invalid Year*/}
         {invalidYear && <div className= 'mb-3 fw-bolder text-danger'>Invalid Year </div>}

        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%', height:'70px'}} className='bg-dark'>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{width:'50%', height:'70px'}} >RESET</Button>
  
        </Stack>
      </form>
      </div>

      </div>
    </>
  )
}

export default App
