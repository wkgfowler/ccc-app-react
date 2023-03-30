import axios from "axios";
import { Fragment, useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";

const ContactInfo = () => {
    const {user, setUser} = useContext(UserContext)
    const [town, setTown] = useState("")

    const streetAddressRef = useRef();
    const phoneNumberRef = useRef();

    const selectTown = (e) => {
        setTown(e.value)
    }

    const onSubmitForm = async (e) => {
        e.prevenetDefault();
        axios.post('http://localhost:3000/api/contact_info', {
            id: user.id,
            street_address: streetAddressRef.current.value,
            town: town,
            phone_number: phoneNumberRef.current.value
        })
        .then((response) => {
            console.log(response.data)
        }, (error) => {
            console.log(error)
        })
    }

    return (
        <Fragment>
            <h1>Contact Info</h1>
            <div>
                <form onSubmit={onSubmitForm}>
                    <label>Street Address</label>
                    <input type="text" name="street_address" placeholder="Enter your street address" ref={streetAddressRef} />
                    <label>Select your town</label>
                    <select name="town" value={town} onChange={selectTown}>
                        <option value="default">Select your town</option>
                        <option value="Atlantic Beach">Atlantic Beach</option>
                        <option value="Morehead City">Morehead City</option>
                    </select>
                    <input type="text" name="phone_number" placeholder="Enter your phone number" ref={phoneNumberRef} />
                    <button>Submit</button>
                </form>
            </div>
        </Fragment>
    );
}
 
export default ContactInfo;