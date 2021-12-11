const Joi = require('joi');

exports.WebsiteSearchValidation = (options) => {
    const schema = Joi.object()
        .keys({
            uid: Joi.string().required(),
        })
        .unknown(true);
    const result = schema.validate(options);
    return result;
};
