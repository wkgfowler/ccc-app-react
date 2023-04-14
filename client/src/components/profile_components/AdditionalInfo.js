import axios from "axios";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import Checkbox from "../subcomponents/Checkbox";

const AdditionalInfo = () => {
    const {user, setUser} = useContext(UserContext)

    const breakfastRef = useRef();
    const lunchRef = useRef();
    const dinnerRef = useRef();
    const brunchRef = useRef();
    const websiteRef = useRef();
    const facebookRef = useRef();
    const instagramRef = useRef();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/additional_info',  {
            id: user.id,
            breakfast: breakfastRef.current.checked,
            lunch: lunchRef.current.checked,
            dinner: dinnerRef.current.checked,
            brunch: brunchRef.current.checked,
            website_url: websiteRef.current.value,
            facebook_url: facebookRef.current.value,
            instagram_url: instagramRef.current.value
        }, {
            headers: {
                "token" : localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
        }, (error) => {
            console.log("SHIT")
            console.log(error)
        })
    };
    
    return (
        <div className="flex justify-center">
            <form>
                <p className="text-2xl pt-4 pb-2 text-center underline">Additional Information</p>
                <div className="grid grid-cols-4 pb-2">
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Breakfast</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Brunch</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Lunch</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Dinner</label>
                    </div>
                </div>
                <div className="grid grid-cols-1">

                </div>
            </form>
            {/* <form onSubmit={onSubmitForm}>
                <Checkbox label="Breakfast" ref={breakfastRef} />
                <Checkbox label="Lunch" ref={lunchRef} />
                <Checkbox label="Dinner" ref={dinnerRef} />
                <Checkbox label="Brunch" ref={brunchRef} />
                <input type="text" name="website_url" placeholder={user.Restaurant.website_url ? user.Restaurant.website_url : "Your restaurant's website"} ref={websiteRef} />
                <input type="text" name="facebook_url" placeholder={user.Restaurant.facebook_url ? user.Restaurant.facebook_url : "Your restaurant's Facebook"} ref={facebookRef} />
                <input type="text" name="instagram_url" placeholder={user.Restaurant.instagram_url ? user.Restaurant.instagram_url : "Your restaurant's Instagram"} ref={instagramRef} />
                <button>Submit</button>
            </form> */}
        </div>
    );
}
 
export default AdditionalInfo;