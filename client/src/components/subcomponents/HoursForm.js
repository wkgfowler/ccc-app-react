const HoursForm = () => {
    const mondayClose = () => {
        const mondayOpen = document.getElementById("mondayOpen")
        const mondayClose = document.getElementById("mondayClose")
            
        if (mondayOpen.value === 'close') {
            mondayClose.setAttribute("disabled", "")
            mondayClose.value = 'close'
        }
        
        if (mondayOpen.value !== 'close') {
            mondayClose.removeAttribute("disabled")
            mondayClose.value = ""
        }
    };

    const tuesdayClose = () => {
        const tuesdayOpen = document.getElementById("tuesdayOpen")
        const tuesdayClose = document.getElementById("tuesdayClose")
            
        if (tuesdayOpen.value === 'close') {
            tuesdayClose.setAttribute("disabled", "")
            tuesdayClose.value = 'close'
        }
        
        if (tuesdayOpen.value !== 'close') {
            tuesdayClose.removeAttribute("disabled")
            tuesdayClose.value = ""
        }
    };

    const wednesdayClose = () => {
        const wednesdayOpen = document.getElementById("wednesdayOpen")
        const wednesdayClose = document.getElementById("wednesdayClose")
            
        if (wednesdayOpen.value === 'close') {
            wednesdayClose.setAttribute("disabled", "")
            wednesdayClose.value = 'close'
        }
        
        if (wednesdayOpen.value !== 'close') {
            wednesdayClose.removeAttribute("disabled")
            wednesdayClose.value = ""
        }
    };

    const thursdayClose = () => {
        const thursdayOpen = document.getElementById("thursdayOpen")
        const thursdayClose = document.getElementById("thursdayClose")
            
        if (thursdayOpen.value === 'close') {
            thursdayClose.setAttribute("disabled", "")
            thursdayClose.value = 'close'
        }
        
        if (thursdayOpen.value !== 'close') {
            thursdayClose.removeAttribute("disabled")
            thursdayClose.value = ""
        }
    };

    const fridayClose = () => {
        const fridayOpen = document.getElementById("fridayOpen")
        const fridayClose = document.getElementById("fridayClose")
            
        if (fridayOpen.value === 'close') {
            fridayClose.setAttribute("disabled", "")
            fridayClose.value = 'close'
        }
        
        if (fridayOpen.value !== 'close') {
            fridayClose.removeAttribute("disabled")
            fridayClose.value = ""
        }
    };

    const saturdayClose = () => {
        const saturdayOpen = document.getElementById("saturdayOpen")
        const saturdayClose = document.getElementById("saturdayClose")
            
        if (saturdayOpen.value === 'close') {
            saturdayClose.setAttribute("disabled", "")
            saturdayClose.value = 'close'
        }
        
        if (saturdayOpen.value !== 'close') {
            saturdayClose.removeAttribute("disabled")
            saturdayClose.value = ""
        }
    };

    const sundayClose = () => {
        const sundayOpen = document.getElementById("sundayOpen")
        const sundayClose = document.getElementById("sundayClose")
            
        if (sundayOpen.value === 'close') {
            sundayClose.setAttribute("disabled", "")
            sundayClose.value = 'close'
        }
        
        if (sundayOpen.value !== 'close') {
            sundayClose.removeAttribute("disabled")
            sundayClose.value = ""
        }
    };

    return (
        <div className="">
            <form action="">
                <p className="text-2xl pt-4 pb-2 text-center underline">Your restaurant's hours</p>
                <div className="grid grid-cols-2 pb-2">
                    <div>
                        <label htmlFor="">Monday's opening time:</label>
                        <select name="mondayOpen" className="ml-2" id="mondayOpen" onClick={mondayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="mondayClose" className="ml-2" id="mondayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="tuesdayOpen" className="ml-2" id="tuesdayOpen" onClick={tuesdayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="tuesdayClose" className="ml-2" id="tuesdayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="wednesdayOpen" className="ml-2" id="wednesdayOpen" onClick={wednesdayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="wednesdayClose" className="ml-2" id="wednesdayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="thursdayOpen" className="ml-2" id="thursdayOpen" onClick={thursdayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="thursdayClose" className="ml-2" id="thursdayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="fridayOpen" className="ml-2" id="fridayOpen" onClick={fridayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="fridayClose" className="ml-2" id="fridayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="saturdayOpen" className="ml-2" id="saturdayOpen" onClick={saturdayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="saturdayClose" className="ml-2" id="saturdayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
                        <select name="sundayOpen" className="ml-2" id="sundayOpen" onClick={sundayClose}>
                            <option value="">--Select an opening time--</option>
                            <option value="close">Closed</option>
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
                        <select name="sundayClose" className="ml-2" id="sundayClose">
                            <option value="">--Select a closing time--</option>
                            <option value="close">Closed</option>
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
            </form>
        </div>
    );
}
 
export default HoursForm;