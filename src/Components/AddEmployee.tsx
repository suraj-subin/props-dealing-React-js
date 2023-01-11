import React from 'react'

type Props = {
    backClick : () => void;
}


const AddEmployee = (props:Props) => {
    const {backClick } = props;
  return (
    <>
         <h1>This is Add Employee</h1>
        <input type="button" value="Back" onClick={backClick}/>
    </>
  
  )
}

export default AddEmployee;