const router = require('express').Router();
const {User, Restaurant, Hours} = require('../models');
const authorization = require('../middleware/authorization');
require("dotenv").config();



// loading user page
router.get("/:id", authorization, async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })

        if (user) {
            return res.json({valid: true, token: req.user})
        }
    } catch (err) {
        console.error(err.message)
        return res.json(false)
    }
})


// adding restaurant contact info
router.post("/contact_info", authorization, async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({
            where: {
                UserId: req.body.id
            }
        });

        const updatedRestaurant = await Restaurant.set({
            street_address: req.body.street_address,
            town: req.body.town,
            phone_number: req.body.phone_number
        });

        await updatedRestaurant.save();
        return res.json(req.user);
    } catch (err) {
        console.error(err.message)
    }
})



// updating restaurant additional info
router.post("/additional_info", authorization, async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({
            where: {
                UserId: req.body.id
            }
        });

        const updatedRestuarant = await restaurant.set({
            breakfast: req.body.breakfast,
            lunch: req.body.lunch,
            dinner: req.body.dinner,
            brunch: req.body.brunch,
            website_url: req.body.website_url,
            facebook_url: req.body.facebook_url,
            instagram_url: req.body.instagram_url
        });

        await updatedRestuarant.save();
        return res.json(req.user);
    } catch (err) {
        console.log("FUCK")
        console.error(err.message)
    }
})

// RESTAURANT HOURS
router.get("/get_hours/:restaurantId/:userId", authorization, async (req, res) => {
    try {

        const validUser = await Restaurant.findOne({
            where: {
                id: req.params.restaurantId
            }, include: {
                model: User, where: { id: req.params.userId }
            }
        })

        if (validUser) {
            const hours = await Hours.findAll({
                where: {
                    restaurantId: req.params.restaurantId
                }
            })

            return res.json({valid: true, hours})
        } 

        return res.json({valid: false});
    } catch (err) {
        console.error(err.message);
    }
})

router.post("/update_hours", authorization, async (req, res) =>{
    try {
        const sundayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 0
            }
        });
        const mondayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 1
            }
        });
        const tuesdayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 2
            }
        });
        const wednesdayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 3
            }
        });
        const thursdayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 4
            }
        });
        const fridayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 5
            }
        });
        const saturdayHours = await Hours.findOne({
            where: {
                restaurantId: req.body.restaurantId,
                weekday: 6
            }
        });

        const setSundayHours = await sundayHours.set({
            openHour: req.body.sundayOpen,
            closeHour: req.body.sundayClose
        });
        await setSundayHours.save();
        const setMondayHours = await mondayHours.set({
            openHour: req.body.mondayOpen,
            closeHour: req.body.mondayClose
        });
        await setMondayHours.save();
        const setTuesdayHours = await tuesdayHours.set({
            openHour: req.body.tuesdayOpen,
            closeHour: req.body.tuesdayClose
        });
        await setTuesdayHours.save();
        const setWednesdayHours = await wednesdayHours.set({
            openHour: req.body.wednesdayOpen,
            closeHour: req.body.wednesdayClose
        });
        await setWednesdayHours.save();
        const setThursdayHours = await thursdayHours.set({
            openHour: req.body.thursdayOpen,
            closeHour: req.body.thursdayClose
        });
        await setThursdayHours.save();
        const setFridayHours = await fridayHours.set({
            openHour: req.body.fridayOpen,
            closeHour: req.body.fridayClose
        });
        await setFridayHours.save();
        const setSaturdayHours = await saturdayHours.set({
            openHour: req.body.saturdayOpen,
            closeHour: req.body.saturdayClose
        });
        await setSaturdayHours.save();

        return res.json("nailed it");

    } catch (err) {
        console.log("dammit")
        console.error(err.message)
    }
})



// admin page ALL RESTAURANTS/USERS
router.get("/admin/all_restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll({
            include: {
                model: User
            }
        })
        console.log(1);
        return res.json(restaurants);
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;