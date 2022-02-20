const controller = require('../controllers');
const router = require('express-promise-router')();

router.route('/').get((req, res) => res.end("Hello client. I am your server"))
router.route('/countries').get(controller.getAllCountries)
router.route('/country/:id').get(controller.getCountry)

module.exports = router;