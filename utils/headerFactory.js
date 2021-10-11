const { contextObject } = require('./authType');

exports.HeaderFactory = (params) => {
    let options = {
        body: {},
        headers: { 'Content-Type': 'application/json' }
    }
    if (contextObject.provisionKey.enable) {
        params['accessToken'] = contextObject.provisionKey.accessToken;
        options.body = params;
    }
    return options;
}