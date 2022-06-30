export default function InputBox({name}) {    
    return <>
    <label htmlFor={name}>{name}</label><br></br>
    <input name={name} type={isPassword(name)}/><br></br>
    </>
}


function isPassword(name: string) {
    if (name == "Password") {
        return "password"
    } else {return "text"}
}