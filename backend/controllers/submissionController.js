const prisma = require('../lib/prismaClient');

exports.submitCompany = async (req, res) => {
    try {
        const {
            titlePrefix,
            firstName,
            lastName,
            titleSuffix,
            email,
            verifyEmail,
            phoneNumber,
            companyType,
            companyName
        } = req.body;

        const newSubmission = await prisma.startCompanySubmission.create({
            data: {
                titlePrefix,
                firstName,
                lastName,
                titleSuffix,
                email,
                verifyEmail,
                phoneNumber,
                companyType,
                companyName
            }
        });

        res.status(201).json({ 
            message: 'Submission received and saved to database successfully', 
            data: newSubmission 
        });
    } catch (error) {
        console.error('Error saving submission to database:', error);
        res.status(500).json({ 
            message: 'Internal server error', 
            error: error.message 
        });
    }
};

exports.submitAgentSinglePayment = async (req, res) => {
    try {
        const { companyName, stateFileNumber } = req.body;
        const newSubmission = await prisma.agentSinglePaymentSubmission.create({
            data: { companyName, stateFileNumber }
        });
        res.status(201).json({ message: 'Success', data: newSubmission });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.submitAgentMultiPayment = async (req, res) => {
    try {
        const { accountNumber } = req.body;
        const newSubmission = await prisma.agentMultiPaymentSubmission.create({
            data: { accountNumber }
        });
        res.status(201).json({ message: 'Success', data: newSubmission });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.submitFranchiseSinglePayment = async (req, res) => {
    try {
        const { title, firstName, lastName, suffix, email, verifyEmail, companyName } = req.body;
        const newSubmission = await prisma.franchiseSinglePaymentSubmission.create({
            data: {
                title,
                firstName,
                lastName,
                suffix,
                email,
                verifyEmail,
                companyName
            }
        });
        res.status(201).json({ message: 'Success', data: newSubmission });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.submitFranchiseMultiPayment = async (req, res) => {
    try {
        const { 
            title, firstName, lastName, suffix, countryCode, 
            phoneNumber, email, verifyEmail, companyName 
        } = req.body;

        const newSubmission = await prisma.franchiseMultiPaymentSubmission.create({
            data: {
                title,
                firstName,
                lastName,
                suffix,
                countryCode,
                phoneNumber,
                email,
                verifyEmail,
                companyName
            }
        });
        res.status(201).json({ message: 'Success', data: newSubmission });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
