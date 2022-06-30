export default function addScan() {
    function submitForm() {

    }
    return <>
    <h1>Add New Scan</h1>
    <label htmlFor="badge-number">Badge Number</label>
    <input name="badge-number"/><br></br>
    <label htmlFor="part-number">Part Number</label>
    <input name="part-number"/><br></br>
    <label htmlFor="work-order-number">Work Order Number</label>
    <input name="work-order-number"/><br></br>
    <button onClick={submitForm}>Submit</button>
    </>
}

