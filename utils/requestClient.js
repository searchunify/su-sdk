const axios = require('axios');

exports.HttpRequest = async (options) => {
    try {
        let response = await axios(options);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
