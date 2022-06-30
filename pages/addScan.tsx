import InputBox from "../components/inputBox"
export default function addScan() {
    function submitForm() {

    }
    return <>
    <h1>Add New Scan</h1>
    <InputBox name="Badge Number"/>
    <InputBox name="Part Number"/>
    <InputBox name="Work Order Number"/>
    <button onClick={submitForm}>Submit</button>
    </>
}

