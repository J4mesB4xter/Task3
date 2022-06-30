import InputBox from "../components/inputBox"
import NavBar from "../components/navBar"

export default function login() {
    function submitForm() {

    }
    
    return <>
    <NavBar/>
    <h1>Login</h1>
    <InputBox name="Username"/>
    <InputBox name="Password"/>
    <button onClick={submitForm}>Submit</button>
    </>
}