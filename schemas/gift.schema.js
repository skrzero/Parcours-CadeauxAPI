const Joi = require('joi');

const giftSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().optional().allow(''),
    price: Joi.number().positive().required(),
    reserved: Joi.boolean().optional(),
});

module.exports = giftSchema;
