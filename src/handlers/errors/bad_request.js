const {BAD_REQUEST} = require("../status_codes");

module.exports = class BadRequestError extends Error{
    constructor(message, description, ...params){
        super(params);
        this.name = 'BadRequestError',
        this.message = message;
        this.code = BAD_REQUEST;
        this.description = description;

        // if(Error.captureStackTrace)
        //     Error.captureStackTrace(this, BadRequestError)
    }
}