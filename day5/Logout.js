import { useNavigate } from "react-router-dom";

function Logout(){

    let navigate = useNavigate();
    sessionStorage.removeItem('user-token');
    navigate("/")

    return (<>
    <h1>Logged Out</h1>
    </>);
}
export default Logout;