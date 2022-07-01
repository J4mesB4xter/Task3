import InputBox from "../components/inputBox"
import NavBar from "../components/navBar"
import PartCounter from "../components/partCounter"

export default function addScan() {
    function submitForm() {

    }
    return <>
    <NavBar/>
    <h1>Add New Scan</h1>
    <InputBox name="Badge Number"/>
    <InputBox name="Work Order Number"/>
    <InputBox name="Part Number"/>
    <button onClick={submitForm}>Submit</button>
    </>
}

