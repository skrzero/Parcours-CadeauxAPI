const Joi = require('joi');

//TODO: completer ici le schema
const giftSchema = Joi.object({
    title:
    Joi.string().min(3).max(255).required(),
    description:
    Joi.string().allow('').optional(),
    price:
    Joi.number().required(),
    reserved:
    Joi.boolean().optional()
});

module.exports = giftSchema;
