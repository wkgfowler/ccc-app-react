import ContactInfo from "./ContactInfo";
import HoursForm from "./HoursForm";
import { SlArrowDown, SlArrowLeft } from "react-icons/sl"
import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import axios from "axios";
=======
>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053

const EditInfo = () => {
    const [hoursVisible, setHoursVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
<<<<<<< HEAD
    const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);
    const {restaurantId} = useParams();

    const getRestaurant = () => {
        axios.get(`http://localhost:3000/api/get_restaurant/${restaurantId}`)
    }
=======
>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053

    const hoursVisibility = () => {
        setHoursVisible(!hoursVisible)
    }

<<<<<<< HEAD
    const infoVisibility = () => {
        setInfoVisible(!infoVisible)
    }

    const additionalInfoVisibility = () => {
        setAdditionalInfoVisible(!additionalInfoVisible)
    }

=======
    const infoVisibility= () => {
        setInfoVisible(!infoVisible)
    }

>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053

    return (
        <div className="justify-center flex">
            
            <div className="justify-center w-1/2">
                <div className="border-b-2 pb-2">
                    <div className="pt-5 flex justify-center">
                        <button className="w-full cursor-pointer" onClick={hoursVisibility}>
                            <div className="flex justify-evenly">
                                <p className="text-3xl">Edit Hours</p>
                                {!hoursVisible ? <SlArrowLeft className="text-2xl"/> : <SlArrowDown className="text-2xl"/>}
                            </div>
                        </button>
                    </div>
                    <div className={`${hoursVisible ? "flex justify-center" : "hidden"}`}>
                        <HoursForm />
                    </div>
                </div>

<<<<<<< HEAD
                <div className="border-b-2 pb-2">
                    <div className="pt-4 flex justify-center">
                        <button className="w-full cursor-pointer" onClick={infoVisibility}>
=======
                <div>
                    <div className="pt-4 flex justify-center border-b-2 pb-2">
                        <button className="w-1/2 cursor-pointer" onClick={infoVisibility}>
>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053
                            <div className="flex justify-evenly">
                                <p className="text-3xl">Edit Contact Info</p>
                                {!infoVisible ? <SlArrowLeft className="text-2xl"/> : <SlArrowDown className="text-2xl"/>}
                            </div>
                        </button>
                    </div>
                    <div className={`${infoVisible ? "flex justify-center" : "hidden"}`}>
                        <ContactInfo />
                    </div>
                </div>
                
<<<<<<< HEAD
                <div className="border-b-2 pb-2">
                    <div className="pt-4 flex justify-center">
                        <button className="w-full cursor-pointer" onClick={additionalInfoVisibility}>
=======
                {/* <div>
                    <div className="pt-4 flex justify-center border-b-2 pb-2">
                        <button className="w-1/2 cursor-pointer" onClick={infoVisibility}>
>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053
                            <div className="flex justify-evenly">
                                <p className="text-3xl">Edit Additional Info</p>
                                {!infoVisible ? <SlArrowLeft className="text-2xl"/> : <SlArrowDown className="text-2xl"/>}
                            </div>
                        </button>
                    </div>
<<<<<<< HEAD
                    <div className={`${additionalInfoVisible ? "flex justify-center" : "hidden"}`}>
                        <AdditionalInfo />
                    </div>
                </div>
=======
                    <div className={`${infoVisible ? "flex justify-center" : "hidden"}`}>
                        <AdditionalInfo />
                    </div>
                </div> */}
>>>>>>> 9ce905a868e2a0c1b99f105cb45088e5e9ca9053
            </div>

                
            
        </div>
    )
}

export default EditInfo;