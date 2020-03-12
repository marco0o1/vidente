const express = require('express');
const router = express.Router();
// replaces exising ctrlMain reference with new requires
const ctrlUser = require('../controllers/groups');

const ctrlLabels = require('../controllers/labels');
const ctrlOthers = require('../controllers/others');
// const path = require('path');

/* Locations pages */

router.get('/', ctrlUser.homePage)
router.get('/groups/', ctrlUser.groups);
// router.get('/groups-alt/', (req, res) => res.sendFile(path.resolve(__dirname, "../../public/vidente-app/index.html")));
// contains locationid parameter so that we
// can request a specific location in the API
router.get('/label/', ctrlLabels.labelInfo);
// 
// router.get('/location/:locationid', ctrlLabels.locationInfo);

router
    // updates router syntax to leverage locationid
    .route('/location/:locationid/review/new')
    .get(ctrlLabels.addReview)
    // creates a new route on the same URL, but using
    // the POST method and referencing a different controller
    .post(ctrlLabels.doAddReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
