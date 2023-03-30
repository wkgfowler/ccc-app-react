import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PermissionContext } from "../context/PermissionContext";
import { UserContext } from "../context/UserContext";
import Admin from "./admin_components/Admin";
import AdditionalInfo from "./subcomponents/AdditionalInfo";

const Profile = () => {
    const [valid, isValid] = useState(true)
    const {user, setUser} = useContext(UserContext)
    const {permission, setPermission} = useContext(PermissionContext)

    const [userRestaurants, setUserRestaurants] = useState([]);

    const config = {
        headers: {"token": localStorage.getItem("token")},
        params: {
            id: user.id
        }
    };
    
    const loadUser = () => {
        axios.get(`http://localhost:3000/api/${user.id}`, config)
        .then((response) => {
            // console.log(response.data)
            console.log(user.Restaurants)
            setUserRestaurants(user.Restaurants)
            console.log(userRestaurants)
            localStorage.setItem("token", response.data.token.token)
            isValid(true)
        }, (error) => {
            console.log(error)
        })};

    useEffect(() => {
        loadUser();
    }, [])

    if (valid) {
        if (user && permission === 1) {
            return (
                <Fragment>
                    <h1>Basic User Page</h1>
                    <h1>{user.email}</h1>
                </Fragment>
            )
        } else if (user && permission === 2) {
            return (
                <Fragment>
                    <h1>Restaurant Edit Page</h1>
                    {user.Restaurants.map(x => (
                        <Link to={`/restaurants/${x.id}`}>{x.restaurant_name}</Link>
                        ))
                    }
                    <h1>{user.Restaurants.restaurant_name}</h1>
                </Fragment>
            )
        } else if (user && permission === 3) {
            return (
                <Fragment>
                    <h1>Admin Page</h1>
                    <Admin/>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>Not Authorized</h1>
                </Fragment>
            )
        }
    } else {
        return (
            <Fragment>
                <h1>Not Authorized</h1>
            </Fragment>
        )
    }
}
 
export default Profile;