import InputBox from "../components/inputBox"
import NavBar from "../components/navBar"

export default function login() {
    function submitForm() {

    }
    
    return <>
    <NavBar/>
    <h1>Login</h1>
    <InputBox name="First Name"/>
    <InputBox name="Last Name"/>
    <InputBox name="Badge Number"/>
    <button onClick={submitForm}>Submit</button>
    </>
}