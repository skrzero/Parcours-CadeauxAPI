const Joi = require('joi');

//TODO: completer ici le schema
const giftSchema = Joi.object({
    title:
    Joi.string().max(255).required(),
    description:
    Joi.string().allow(''),
    price:
    Joi.number(),
    reserved:
    Joi.boolean()
});

module.exports = giftSchema;
