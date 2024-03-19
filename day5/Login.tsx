import { useState } from "react";

function Login()
{
    const [uname,setUname] = useState("");
    const [pwd, setPwd] = useState("")
    const [result, setResult] = useState("");

    function handleClick(){
        if(uname == "admin" && pwd == "admin123"){
            let str = `Hi ${uname}, Welcome! Your password is ${pwd}`;
            setResult(str);
        }else{
        setResult("Incorrect Username and Password");
        }
    }

    return (<>
        <fieldset>
        <legend>User Login</legend>
        <h3>Working with States</h3>
        UserName: <input type="text" onChange={(event)=>setUname(event.target.value)}></input><br />
        Password: <input type="text" onChange={(event)=>setPwd(event.target.value)}></input>
        <input type="button" value="Login" onClick={handleClick} />
        <p>{result}</p>
        </fieldset>
    </>);
}

export default Login;