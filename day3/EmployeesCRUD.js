import { useState } from "react";

function EmployeesCRUD(){
    const [empArray, setEmpArray] = useState([]);

    const [empno,setEmpno] = useState(null);
    const [empname, setEmpname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState(null);
    const [deptno, setDeptno] = useState(null);

    function getEmployees_click(){
        let tempArray = [];

        setEmpArray(tempArray);
    }

    function deleteEmployee_click(eno){
        let tempArray = [...empArray]
        let index = tempArray.findIndex(emp => emp.empno == eno)
        tempArray.splice(index,1)
        setEmpArray(tempArray)
    }

    function selectEmployee_click(eno){
        let tempArray = [...empArray]
        let index = tempArray.findIndex(emp => emp.empno == eno)
        setDeptno(tempArray[index].deptno)
        setEmpname(tempArray[index].empname)
        setJob(tempArray[index].job)
        setEmpno(tempArray[index].empno)
        setSal(tempArray[index].sal)
    }

    function addEmployee_click(){
        let empobj = {}
        empobj.deptno = deptno;
        empobj.empno = empno;
        empobj.empname = empname;
        empobj.sal = sal;
        empobj.job = job;

        let tempArray = [...empArray]
        tempArray.push(empobj)
        setEmpArray(tempArray)
        clearFields();
    }

    function clearFields(){
        setEmpno("");
        setEmpname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function updateEmployee_click(){
        let tempArray = [...empArray]
        let index = tempArray.findIndex(emp => emp.empno == empno)
        tempArray[index].empname = empname;
        tempArray[index].job = job;
        tempArray[index].sal = sal;
        tempArray[index].deptno = deptno;

        setEmpArray(tempArray);
        clearFields()
    }

    let results = empArray.map((emp, index)=>{
        return <tr key={index}>
            <td>{emp.empno}</td>
            <td>{emp.empname}</td>
            <td>{emp.job}</td>
            <td>{emp.sal}</td>
            <td>{emp.deptno}</td>
            <td>
            <a  onClick={() => selectEmployee_click(emp.empno)} href="javascript:void(0);">Select</a> |
            <a  onClick={() => deleteEmployee_click(emp.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    })

    return (<>
        <h1>Employees CRUD</h1>
        Enployee No: <input type="number" value={empno}   onChange={(e) => setEmpno(e.target.value)} />
        Employee Name: <input type="text" value={empname}   onChange={(e) => setEmpname(e.target.value)} />
        Employee Job: <input type="text" value={job}  onChange={(e) => setJob(e.target.value)} />
        Employee Salary: <input type="number" value={sal}  onChange={(e) => setSal(e.target.value)} />
        Employee Department No: <input type="number" value={deptno}  onChange={(e) => setDeptno(e.target.value)} />
        <hr />
        
        <input type="button" value="Get Employees" onClick={getEmployees_click}/>
        <input type="button" onClick={addEmployee_click} value="Add Employee" />
        <input type="button" onClick={updateEmployee_click} value="Update Employee" />
        <hr />
        <table>
            <tr>
                <th>Employee No</th>
                <th>Employee Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Department No</th>
            </tr>
            {results}
        </table>
    </>);
}

export default EmployeesCRUD;



