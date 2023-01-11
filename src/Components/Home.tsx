import React, { useState } from 'react'
import '../Style/Home.css'
import AddEmployee from './AddEmployee';
import { dommyEmployeeList, IEmployee } from './Employee.type';
import EmployeeList from './EmployeeList';
const Home = () => {
    const [employeeList, setEmployeeList] = useState(dommyEmployeeList as IEmployee[]);
    
   const [open, setOpen] = useState(false);
   const [activeTab, setactiveTab] = useState(true);

    const openAddEmployee = () =>{
        setactiveTab(false)
        setOpen(true)
    }
    const showListPage= () =>{
        // setactiveTab(false)
        setactiveTab(true)
    }
  return (
    <>
    <article className="article-header">
    <header>
      <h1>React: Simple CRUD Application</h1>
    </header>
  </article>
  <section className="section-content">

  <input type="button" value="Add Employee" onClick={openAddEmployee}/>
  {activeTab ? ( <EmployeeList list={employeeList}/>) : null}
    
     
    {open ? ( <AddEmployee backClick={showListPage}/>) : null}

    {/* {open ? ( 
    <AddEmployee/>
     ) : null} */}
  
  </section>
  </>
  )
}

export default Home;