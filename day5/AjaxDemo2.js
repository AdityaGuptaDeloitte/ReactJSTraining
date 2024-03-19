import axios from "axios"
import { useState } from "react";
import {dataServiceObj} from "./services/data.service";


function AjaxDemo2() {

    const [users, setUsers] = useState([])

    function HandleButtonClick(){
        let url = 'https://reqres.in/api/users';
        axios.get(url).then((resData) => {
            console.log(resData.data.data);
            setUsers(resData.data.data);
        })
    }

    let result = users.map((user, index)=>{
        return <tr key={index}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td> <img src={user.avatar}></img></td>
        </tr>
    })

    return (
        <>
        <h3>Working with AJAX</h3>
        <button onClick={HandleButtonClick}>GetData</button>

        <hr/>
        <table border={1} cellSpacing={0} cellPadding="10px">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
        </>
    )
}
export default AjaxDemo2