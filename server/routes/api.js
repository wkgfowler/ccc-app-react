const router = require('express').Router();
const {User, Restaurant} = require('../models');
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
        console.err(err.message)
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