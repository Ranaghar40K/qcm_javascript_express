const express = require('express');
const router = express.Router();
const { displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed, submitAnswer } = require('../controllers/qcms');

router.get('/', displayQcms);

router.get('/json', displayQcmJson);
router.get('/new', displayFormQcm);
router.post('/new', createNewForm);

router.get('/submit-answer', submitAnswer);
router.post('/submit-answer', submitAnswer);


module.exports = router;
