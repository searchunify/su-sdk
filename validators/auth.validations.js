const Joi = require('joi');

exports.ProvisionKeyValidation = (options) => {
    const schema = Joi.object().keys({
        enable: Joi.boolean().invalid(false).label(`enable must be true`),
        accessToken: Joi.string().required(),
        instanceUrl: Joi.string().required()
    });
    // Removing trailing slash.
    options.instanceUrl = options.instanceUrl.replace(/\/$/, "");
    const result = schema.validate(options);
    return result;
}