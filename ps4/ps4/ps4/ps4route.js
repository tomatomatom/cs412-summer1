const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

require('dotenv').config()
/* GET home page. */

router.route('/')
    .get((req, res, next) => {
        res.render('index',{
            city: null,
            temp: null
        });


    })
    .post(async(req, res, next) => {
        console.log(req.body);
        const city = req.body.city;
        const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

        try {
            await fetch(url_api)
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'city not found') {
                        res.render('index', {
                            city: data.message,
                            //des: null,
                            // icon: null,
                            temp: null
                        })
                    } else {
                        const city = data.name;
                        //const des = data.weather[0].description;
                        //const icon = data.weather[0].icon;
                        const temp = data.main.temp;

                        res.render('index', {
                            city, temp
                        });
                    }
                });

        } catch (err) {
            res.render('index', {
                city: 'something wrong',
                temp: null
            })
        }
    })


module.exports = router;