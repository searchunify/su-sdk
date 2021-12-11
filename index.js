const { searchResultWebsiteClient } = require('./components/search/search');
const { WebsiteSearchValidation } = require('./validators/search.validations');
const { ProvisionKeyValidation } = require('./validators/auth.validations');
const { contextObject } = require('./utils/authType');

/**
 * @author Mohan Rana
 * @class SearchUnifyApiClient
 * @summary Used to initialize SearchUnify SDK client for API access.
 * @param {string} instanceUrl SearchUnify instance url.
 * @param {string} apiKey SearchUnify API key to access API's.
 */

exports.SearchUnifyApiClient = function (instanceUrl, apiKey) {
    try {
        let params = {
            enable: true,
            instanceUrl: instanceUrl,
            accessToken: apiKey,
        };
        const isValid = ProvisionKeyValidation(params);
        if (isValid.error) {
            throw new Error(isValid.error.message);
        }
        // add required context for other methods.
        contextObject.provisionKey = isValid.value;
        return {
            search,
        };
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * @author Mohan Rana
 * @param {Object} params
 * @summary This method is used to get result from searchunify instance.
 */

const search = async (params) => {
    try {
        const isValid = await WebsiteSearchValidation(params);
        if (isValid.error) throw new Error(isValid.error.message);
        let response = await searchResultWebsiteClient(isValid.value);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
