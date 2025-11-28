const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

router.post('/submit-company', submissionController.submitCompany);
router.post('/submit-agent-single', submissionController.submitAgentSinglePayment);
router.post('/submit-agent-multi', submissionController.submitAgentMultiPayment);
router.post('/submit-franchise-single', submissionController.submitFranchiseSinglePayment);
router.post('/submit-franchise-multi', submissionController.submitFranchiseMultiPayment);

module.exports = router;
