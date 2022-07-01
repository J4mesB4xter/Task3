import { BlockList } from 'net';
import Image from 'next/image';

export default function IdDiv() {
    let firstName = "Name"
    let lastName = "Nameson"
    return <>
        <table>
            <tr><td>
                <Image
                src={require("../public/Abed_Thumbs_Up.jpeg")}
                alt="profile-photo"
                width={100}
                height={100}
                />
            </td>
            <td>{firstName}<br></br>{lastName}</td></tr>
        </table>
        <button className="home">Add Scan</button>
    </>
}