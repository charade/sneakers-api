const { NOT_FOUND } = require("../status_codes");

module.exports = class NotFoundError extends Error{
    constructor(description, ...params){
        super(params);
        this.name = 'NotFoundError'
        this.message = 'ressource not found';
        this.code = NOT_FOUND;
        this.description = description
        if(Error.captureStackTrace)
            Error.captureStackTrace(this, NotFoundError)
    }
}
