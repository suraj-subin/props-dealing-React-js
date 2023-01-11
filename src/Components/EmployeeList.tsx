import React from 'react'
import  '../Style/EmployeeList.css'
import { IEmployee } from './Employee.type'

type Props ={
    list : IEmployee[]
}

const EmployeeList = (props:Props) => {
  
const {list} = props

  return (
    <>
    <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  {list.map((employee)=>{
    console.log(employee)
    return (
        <tr key={employee.id}>
        <td>{`${employee.firstName} ${employee.firstName}`}</td>
        <td>{`${employee.email}`}</td>
        <td>
            <div>
                <input type="button" value="View"/>
                <input type="button" value="Edit"/>
                <input type="button" value="Delete"/>
            </div>
        </td>
      </tr>
    )
  })}

  
</table>

    </>
  )
}

export default EmployeeList;