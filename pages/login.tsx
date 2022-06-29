export default function login() {
    function submitForm() {

    }
    return <>
    <h1>Login</h1>
    <label htmlFor="username">Username</label>
    <input name="username"/>
    <label htmlFor="password">Password</label>
    <input name="password" type="password"/>
    <button onClick={submitForm}>Submit</button>
    </>
}