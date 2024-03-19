import axios from "axios"
import { useState } from "react";

function AjaxDemo1() {

    const [customers, setCustomers] = useState([])

    function HandleButtonClick(){
        let url = 'https://www.w3schools.com/angular/customers.php';
        axios.get(url).then((resData) => {
            console.log(resData.data.records);
            setCustomers(resData.data.records);
        })
    }

    let result = customers.map((customer, index)=>{
        return <tr key={index}>
            <td>{customer.Name}</td>
            <td>{customer.City}</td>
            <td>{customer.Country}</td>
        </tr>
    })

    return (
        <>
        <h3>Working with AJAX</h3>
        <button onClick={HandleButtonClick}>GetData</button>

        <hr/>
        <table border={1} cellSpacing={0} cellPadding={5}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
        </>
    )
}
export default AjaxDemo1