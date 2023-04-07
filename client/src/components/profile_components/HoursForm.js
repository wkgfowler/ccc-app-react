import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const HoursForm = () => {
    const date = new Date();
    const navigate = useNavigate();

    const [hours, setHours] = useState([]);
    const [valid, isValid] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const {restaurantId} = useParams();
    const userId = user.id;

    const mondayOpenRef = useRef();
    const mondayCloseRef = useRef();
    const tuesdayOpenRef = useRef();
    const tuesdayCloseRef = useRef();
    const wednesdayOpenRef = useRef();
    const wednesdayCloseRef = useRef();
    const thursdayOpenRef = useRef();
    const thursdayCloseRef = useRef();
    const fridayOpenRef = useRef();
    const fridayCloseRef = useRef();
    const saturdayOpenRef = useRef();
    const saturdayCloseRef = useRef();
    const sundayOpenRef = useRef();
    const sundayCloseRef = useRef();

    const config = {
        headers: {"token": localStorage.getItem("token")},
        params: {
            restaurantId: restaurantId,
            userId: user.id
        }
    };

    const getHours = () => {
        axios.get(`http://localhost:3000/api/get_hours/${restaurantId}/${userId}`, config)
        .then((response) => {
            console.log(response.data)
            isValid(response.data.valid)
            // console.log(response.data.hours)
            setHours(response.data.hours)
        }, (error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        getHours();
    }, [])

    const onSubmitForm = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/update_hours', {
            restaurantId: restaurantId,
            sundayOpen: sundayOpenRef.current.value,
            sundayClose: sundayCloseRef.current.value,
            mondayOpen: mondayOpenRef.current.value,
            mondayClose: mondayCloseRef.current.value,
            tuesdayOpen: tuesdayOpenRef.current.value,
            tuesdayClose: tuesdayCloseRef.current.value,
            wednesdayOpen: wednesdayOpenRef.current.value,
            wednesdayClose: wednesdayCloseRef.current.value,
            thursdayOpen: thursdayOpenRef.current.value,
            thursdayClose: thursdayCloseRef.current.value,
            fridayOpen: fridayOpenRef.current.value,
            fridayClose: fridayCloseRef.current.value,
            saturdayOpen: saturdayOpenRef.current.value,
            saturdayClose: saturdayCloseRef.current.value
        }, {
            headers: {
                "token" : localStorage.getItem("token")
            }
        })
        .then((response) => {
            console.log(response)
            navigate(`/profile/${user.id}`)
        }, (error) => {
            console.log("not quite")
            console.log(error)
        })
    }

    const convertToNormalHours = (time) => {
        if (time === "Closed") {
            return time;
        } else if (time === "1200") {
            let newTime = "12pm"
            return newTime
        } else if (time === "1230") {
            let newTime = "1230pm"
            return newTime
        } else if (time === "0000") {
            let newTime = "12am"
            return newTime
        } else if (time === "0030") {
            let newTime = "1230am"
            return newTime
        } else if (time[0] === '0') {
            let newTime = time.replace(time[0], "")
            if (newTime[1] === '0') {
                let newerTime = newTime.replace('00', '')
                newerTime += "am"
                return newerTime
            }
            newTime += "am"
            return newTime;
        } else if ((time[0] === '1' && time[1] > 2) || time[0] === '2') {
            let newTime = +time.slice(0,2)
            newTime -= 12
            let newerTime = newTime.toString()
            if (time[2] === '0') {
                newerTime += "pm"
                return newerTime
            }
            newerTime += "30pm"
            return newerTime
        }
    }

    const mondayClose = () => {
        const mondayOpen = document.getElementById("mondayOpen")
        const mondayClose = document.getElementById("mondayClose")
            
        if (mondayOpen.value === "Closed") {
            mondayClose.setAttribute("disabled", "")
            mondayClose.value = "Closed"
        }
        
        if (mondayOpen.value !== "Closed") {
            mondayClose.removeAttribute("disabled")
            mondayClose.value = ""
        }
    };

    const tuesdayClose = () => {
        const tuesdayOpen = document.getElementById("tuesdayOpen")
        const tuesdayClose = document.getElementById("tuesdayClose")
            
        if (tuesdayOpen.value === "Closed") {
            tuesdayClose.setAttribute("disabled", "")
            tuesdayClose.value = "Closed"
        }
        
        if (tuesdayOpen.value !== "Closed") {
            tuesdayClose.removeAttribute("disabled")
            tuesdayClose.value = ""
        }
    };

    const wednesdayClose = () => {
        const wednesdayOpen = document.getElementById("wednesdayOpen")
        const wednesdayClose = document.getElementById("wednesdayClose")
            
        if (wednesdayOpen.value === "Closed") {
            wednesdayClose.setAttribute("disabled", "")
            wednesdayClose.value = "Closed"
        }
        
        if (wednesdayOpen.value !== "Closed") {
            wednesdayClose.removeAttribute("disabled")
            wednesdayClose.value = ""
        }
    };

    const thursdayClose = () => {
        const thursdayOpen = document.getElementById("thursdayOpen")
        const thursdayClose = document.getElementById("thursdayClose")
            
        if (thursdayOpen.value === "Closed") {
            thursdayClose.setAttribute("disabled", "")
            thursdayClose.value = "Closed"
        }
        
        if (thursdayOpen.value !== "Closed") {
            thursdayClose.removeAttribute("disabled")
            thursdayClose.value = ""
        }
    };

    const fridayClose = () => {
        const fridayOpen = document.getElementById("fridayOpen")
        const fridayClose = document.getElementById("fridayClose")
            
        if (fridayOpen.value === "Closed") {
            fridayClose.setAttribute("disabled", "")
            fridayClose.value = "Closed"
        }
        
        if (fridayOpen.value !== "Closed") {
            fridayClose.removeAttribute("disabled")
            fridayClose.value = ""
        }
    };

    const saturdayClose = () => {
        const saturdayOpen = document.getElementById("saturdayOpen")
        const saturdayClose = document.getElementById("saturdayClose")
            
        if (saturdayOpen.value === "Closed") {
            saturdayClose.setAttribute("disabled", "")
            saturdayClose.value = "Closed"
        }
        
        if (saturdayOpen.value !== "Closed") {
            saturdayClose.removeAttribute("disabled")
            saturdayClose.value = ""
        }
    };

    const sundayClose = () => {
        const sundayOpen = document.getElementById("sundayOpen")
        const sundayClose = document.getElementById("sundayClose")
            
        if (sundayOpen.value === "Closed") {
            sundayClose.setAttribute("disabled", "")
            sundayClose.value = "Closed"
        }
        
        if (sundayOpen.value !== "Closed") {
            sundayClose.removeAttribute("disabled")
            sundayClose.value = ""
        }
    };

    if (valid) {
        return (
            <div className="flex justify-center">
                <form onSubmit={onSubmitForm}>
                    <p className="text-2xl pt-4 pb-2 text-center underline">Your restaurant's hours</p>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Monday's opening time:</label>
                            <select name="mondayOpen" className="ml-2" id="mondayOpen" ref={mondayOpenRef} onClick={mondayClose}>
                                {hours ? <option value={`${hours.find(item => item.weekday === 1).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 1).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Monday's closing time:</label>
                            <select name="mondayClose" className="ml-2" id="mondayClose" ref={mondayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 1).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 1).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Tuesday's opening time:</label>
                            <select name="tuesdayOpen" className="ml-2" id="tuesdayOpen" ref={tuesdayOpenRef} onClick={tuesdayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 2).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 2).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Tuesday's closing time:</label>
                            <select name="tuesdayClose" className="ml-2" id="tuesdayClose" ref={tuesdayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 2).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 2).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Wednesday's opening time:</label>
                            <select name="wednesdayOpen" className="ml-2" id="wednesdayOpen" ref={wednesdayOpenRef} onClick={wednesdayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 3).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 3).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Wednesday's closing time:</label>
                            <select name="wednesdayClose" className="ml-2" id="wednesdayClose" ref={wednesdayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 3).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 3).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Thursday's opening time:</label>
                            <select name="thursdayOpen" className="ml-2" id="thursdayOpen" ref={thursdayOpenRef} onClick={thursdayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 4).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 4).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Thursday's closing time:</label>
                            <select name="thursdayClose" className="ml-2" id="thursdayClose" ref={thursdayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 4).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 4).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Friday's opening time:</label>
                            <select name="fridayOpen" className="ml-2" id="fridayOpen" ref={fridayOpenRef} onClick={fridayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 5).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 5).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Friday's closing time:</label>
                            <select name="fridayClose" className="ml-2" id="fridayClose" ref={fridayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 5).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 5).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <div>
                            <label htmlFor="">Saturday's opening time:</label>
                            <select name="saturdayOpen" className="ml-2" id="saturdayOpen" ref={saturdayOpenRef} onClick={saturdayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 6).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 6).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Saturday's closing time:</label>
                            <select name="saturdayClose" className="ml-2" id="saturdayClose" ref={saturdayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 6).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 6).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <label htmlFor="">Sunday's opening time:</label>
                            <select name="sundayOpen" className="ml-2" id="sundayOpen" ref={sundayOpenRef} onClick={sundayClose}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 0).openHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 0).openHour}`)}</option> : <option value="">--Select an opening time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0500">5am</option>
                                <option value="0530">530am</option>
                                <option value="0600">6am</option>
                                <option value="0630">630am</option>
                                <option value="0700">7am</option>
                                <option value="0730">730am</option>
                                <option value="0800">8am</option>
                                <option value="0830">830am</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                            </select>
                        </div>
                        <div className="pl-4">
                            <label htmlFor="">Sunday's closing time:</label>
                            <select name="sundayClose" className="ml-2" id="sundayClose" ref={sundayCloseRef}>
                            {hours ? <option value={`${hours.find(item => item.weekday === 0).closeHour}`}>{convertToNormalHours(`${hours.find(item => item.weekday === 0).closeHour}`)}</option> : <option value="">--Select a closing time--</option>}
                                <option value="Closed">Closed</option>
                                <option value="0900">9am</option>
                                <option value="0930">930am</option>
                                <option value="1000">10am</option>
                                <option value="1030">1030am</option>
                                <option value="1100">11am</option>
                                <option value="1130">1130am</option>
                                <option value="1200">12pm</option>
                                <option value="1230">1230pm</option>
                                <option value="1300">1pm</option>
                                <option value="1330">130pm</option>
                                <option value="1400">2pm</option>
                                <option value="1430">230pm</option>
                                <option value="1500">3pm</option>
                                <option value="1530">330pm</option>
                                <option value="1600">4pm</option>
                                <option value="1630">430pm</option>
                                <option value="1700">5pm</option>
                                <option value="1730">530pm</option>
                                <option value="1800">6pm</option>
                                <option value="1830">630pm</option>
                                <option value="1900">7pm</option>
                                <option value="1930">730pm</option>
                                <option value="2000">8pm</option>
                                <option value="2030">830pm</option>
                                <option value="2100">9pm</option>
                                <option value="2130">930pm</option>
                                <option value="2200">10pm</option>
                                <option value="2230">1030pm</option>
                                <option value="2300">11pm</option>
                                <option value="2330">1130pm</option>
                                <option value="0000">12am</option>
                                <option value="0030">1230am</option>
                                <option value="0100">1am</option>
                                <option value="0130">130am</option>
                                <option value="0200">2am</option>
                            </select>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <p>Not authorized</p>
            </div>
        )
    }
}
 
export default HoursForm;