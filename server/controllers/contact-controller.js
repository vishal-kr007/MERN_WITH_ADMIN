const Contact = require('../model/contact-model');

const contactForm = async () => {
    try {
        const response = req.body;
        await Contact.create(response);
        return response.status(200).json({message: "message send successfully"});
    } catch (error) {
        return response.status(200).json({message: "message not delivered"});
    }
}

module.exports = contactForm;