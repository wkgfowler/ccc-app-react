import ContactInfo from "./ContactInfo";
import HoursForm from "./HoursForm";
import { SlArrowDown, SlArrowLeft } from "react-icons/sl"
import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";

const EditInfo = () => {
    const [hoursVisible, setHoursVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);

    const hoursVisibility = () => {
        setHoursVisible(!hoursVisible)
    }

    const infoVisibility= () => {
        setInfoVisible(!infoVisible)
    }


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

                <div>
                    <div className="pt-4 flex justify-center border-b-2 pb-2">
                        <button className="w-1/2 cursor-pointer" onClick={infoVisibility}>
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
                
                {/* <div>
                    <div className="pt-4 flex justify-center border-b-2 pb-2">
                        <button className="w-1/2 cursor-pointer" onClick={infoVisibility}>
                            <div className="flex justify-evenly">
                                <p className="text-3xl">Edit Additional Info</p>
                                {!infoVisible ? <SlArrowLeft className="text-2xl"/> : <SlArrowDown className="text-2xl"/>}
                            </div>
                        </button>
                    </div>
                    <div className={`${infoVisible ? "flex justify-center" : "hidden"}`}>
                        <AdditionalInfo />
                    </div>
                </div> */}
            </div>

                
            
        </div>
    )
}

export default EditInfo;