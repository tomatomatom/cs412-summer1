const express = require('express');
const router = express.Router();

/* GET home page. */

router.route('/')
    .get((req, res, next) => {
        console.table(`PS3 GET method ${req.query}`);
        //res.render('index', {getmsg: "HEY NOW!!"})
        res.render('index',
            {
                title: "PS3",
                getmsg: req.query.message,
                fixedmsg: "HEYNOW!!"
            });
        //res.render('index', {getmsg: req.query.message});

        //res.send(` It said: ${req.query.message}`);


    })
    .post((req, res, next) => {
        console.log('PS3 POST method');
        res.render('index', {title: "PS3",postmsg: req.body.msg, postlength: req.body.msgl});
        //  First key: msg
        //  Second key: msgl

        //res.render('index', {req.body.username});
        //res.send({req.body.password});

    })
// //
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Hey Now' });
//     //res.render('index', data.name);
// });
//
// router.post((req, res, next) => {
//     console.log(`In paramDemo (POST)`)
//     res.send(`paramDemo complete (POST), firstName = ${req.body.firstName}`);
// })

module.exports = router;
