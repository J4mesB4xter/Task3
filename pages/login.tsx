import InputBox from "../components/inputBox"

export default function login() {
    function submitForm() {

    }
    
    return <>
    <h1>Login</h1>
    <InputBox name="Username"/>
    <InputBox name="Password"/>
    <button onClick={submitForm}>Submit</button>
    </>
}