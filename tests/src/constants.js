exports.resources = {
    USER: 'user',
    USERS: 'users'
};

exports.authmethods = {
    ANONYMOUS: 'anonymous',
    AUTHENTICATED: 'authenticated'
};

exports.responseStatuses = {
    ASYNCHRONOUS_OK: 201,
    AUTHENTICATION_KO: 401,
    SYNCHRONOUS_OK: 200
};

exports.errorMessages = {
    AUTHENTICATION_KO: 'Authentication failed'
};

exports.ordinals = {
    FIRST: 'first',
    INTERMEDIATE: 'intermediate',
    LAST: 'last'
};

exports.baseURL = 'https://gorest.co.in/public-api';

const regexpDoubleString = /^[a-z]{8} [a-z]{8}$/
const regexpText = /^[a-z ]{80}$/
const regexpEmail = /^[a-z0-9._+-]{1,20}@[a-z0-9]{3,15}\.[a-z]{2,4}$/
const regexpUrl = /^https:\/\/loremflickr.com\/250\/[\d]{3}$/
const regexpInteger = /^[\d]{3}$/
const regexpGender = /^(Male|Female)$/
const regexpUserStatus = /^(Active|Inactive)$/

exports.fieldTypes = {
    BOOLEAN: 'boolean',
    EVAL: 'eval',
    REGEXP: 'regexp'
};


exports.usersResponseFields = {
    mandatory: [
        "id",
        "name",
        "email", 
        "gender", 
        "status"
    ]
};

exports.usersRequestFields = {
    mandatory: {
        name: {type: 'regexp', value: regexpDoubleString},
        email: {type: 'regexp', value: regexpEmail},
        gender: {type: 'regexp', value: regexpGender},
        status: {type: 'regexp', value: regexpUserStatus}
    }
};

exports.postsResponseFields = {
    mandatory: [
        "id",
        "user_id",
        "title", 
        "body"
    ]
};

exports.commentsResponseFields = {
    mandatory: [
        "id",
        "post_id",
        "name",
        "email",
        "body"
    ]
};

exports.todosResponseFields = {
    mandatory: [
        "id",
        "user_id",
        "title", 
        "due_on",
        "status"
    ]
};

exports.formsForResouce = {
    "user": this.usersRequestFields
}

exports.capitalizedFields = {
    users: ["gender", "status"]
}

exports.stepWording = {
    ALL: 'all',
    COMPLETE: 'complete',
    MANDATORY: 'mandatory',
    OPTIONAL: 'optional',
    RANDOM: 'random'
};