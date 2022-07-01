import Abed_Thumbs_Up from "../public/Abed_Thumbs_Up.svg"

export default function IdDiv() {
    let firstName = "Name"
    let lastName = "Nameson"
    return <>
    <table>
        <td><img class="Profile-Photo" src={Abed_Thumbs_Up} alt="profile-photo"></img></td>
        <td>{firstName}<br></br>{lastName}</td>
        <td><button>Add Scan</button></td>
    </table>
    </>
}