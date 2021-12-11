const { HttpRequest } = require('../../utils/requestClient');
const Apis = require('../../utils/apis.json');
const { contextObject } = require('../../utils/authType');
const { HeaderFactory } = require('../../utils/headerFactory');

const searchResultWebsiteClient = async (params) => {
    let authFactory = HeaderFactory(params);
    let config = {
        method: 'post',
        url:
            contextObject.provisionKey.instanceUrl +
            Apis.search.searchResultByPost,
        data: JSON.stringify(authFactory.body),
        headers: authFactory.headers,
    };
    let response = await HttpRequest(config);
    return response.data;
};

module.exports = {
    searchResultWebsiteClient,
};
