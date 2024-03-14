import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {

  const images = ['image1.jpg', 'image2.jpg']

  const employees = [{
                      empno: "1",
                      empname: "Aditya",
                      job: "SDE",
                      salary: "1000000",
                      dept: "Tech"
                      },
                      {
                        empno: "2",
                        empname: "John",
                        job: "CA",
                        salary: "600000",
                        dept: "Accounts"
                      },
                    ]
    let  file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";
 
    let file2  = "Image2.jpg";
  
  return (
    <>
      <h3>ReactJS Development Demo - DAY 2</h3>
      <hr />
      <br />
      <br />
      <h1>Question 1</h1>
      <h3>Employee Object Mapping</h3>
      <table border={1} cellSpacing={1}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Dept</th>
        </tr>
        {employees.map((employee) => {
            return <tr>
              <td>{employee.empno}</td>
              <td>{employee.empname}</td>
              <td>{employee.job}</td>
              <td>{employee.salary}</td>
              <td>{employee.dept}</td>
            </tr>
          })}
      </table>
      
      <br />
      <br />
      <hr />
      <br />
      <h1>Question 2</h1>
      <h3>Working with Images React JS</h3>
 
        <img  width="400" height={200}  src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg" alt='from net'/>
        <br/>
        <img  width="400" height={200}  src={file1} alt='from variable' />
        <br/>
 
        <img  width="400" height={200}   src="./Images/Image1.jpg" alt='using directory'/>
 
        <br />
 
 
        <img  width="400"  height="200"  src="./Images/Image2.jpg"  alt='using directory'/>
        <br/>
 
        <img  width="400" height="200"   src={ "./Images/" + file2} alt='using file + directory' /> 
        <br />      
      
      <hr />
      <br />
      <h1>Question 3</h1>
      <h3>UserList Component</h3>
      <table>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
        <UserList/>
      </table>

      <hr />
      <h1>Question 4</h1>
      <h3>Accessing local images using List</h3>
      {
        images.map((image)=>{
          return <>
           <img width={400} height={200} src={'./Images/'+image} alt='imageplaceholder'/>
           <br />
          </>
        })
      }

      <br />
      <hr />
      <h1>Question 5</h1>
      <p>Keys are used to provide a unique identity to each row element in the list. It can help in identifying what elements are being updated changed and deleted.</p>

      
    </>
  );
}

export default App;
