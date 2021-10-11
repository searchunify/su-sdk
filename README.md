# SearchUnify SDK

## Overview
The SearchUnify SDK enables developers to easily work with the SearchUnify platform and build scalable solutions with search, analytics, crawlers and more. You
can get started in minutes using NPM.
The SearchUnify SDK simplifies use of SearchUnify Services by providing a set of
libraries that are consistent and familiar for the developers. It provides support for API lifecycle consideration such as credential management, retries, data marshaling, and serialization. The SearchUnify SDKs also support higher level abstractions for simplified development.

## Key Features
* HTTP/2 Support and pluggable HTTP layer, new programming interfaces seamlessly take advantage of HTTP/2 features and provide new ways to build applications.
* Nonblocking I/O, the SearchUnify SDK for Javascript utilizes a new, nonblocking SDK architecture to support true nonblocking I/O. It features truly non blocking asynchronous clients that implement high concurrency across a few threads.

## Getting Started
Sign up for SearchUnify, before you begin, you need a SearchUnify account. Please see the oAuth section of the developer guide for information about how to retrieve your SearchUnify credentials.

## Installation
SDK requires [Node.js](https://nodejs.org/) to run.
Install the dependencies and devDependencies and start the server.

## Execution
Initiate SU SDK on Server, SearchUnify provides SDK for JavaScript. Using the SDK, you can route search requests. To start using, initialize the SDK with your URL and API key.
```javascript
const { SearchUnifyApiClient } = require('su-sdk');
const apiKey = "key";
const instanceUrl = 'https://api.searchunify.com';
const searchunify = new SearchUnifyApiClient(instanceUrl, apiKey);
server.post("/api/searchunify/search", async (req, res, next) => {
    try {
        let response = await searchunify.search(req.body);
        return res.json(response);
    } catch (error) {
        console.log('Exception ${error.message}');
        return res.status(422).json ({status: false, message: "error message" });
    }
})'
```
## License

MIT

**&copy; Powered by [SearchUnify](https://www.searchunify.com/)!**
