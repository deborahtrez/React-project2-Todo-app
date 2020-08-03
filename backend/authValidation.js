const joi = require('@hapi/joi')

const signupChecks = (data) =>{
    const validationSchema = joi.object({
        fullName: joi.string().required(),
        gender: joi.string().required(),
        email:joi.string().required().email(),
        password:joi.string().required()
    })
    return validationSchema.validate(data)
}

const loginChecks = (data) =>{
    const validationSchema = joi.object({
        email:joi.string().required().email(),
        password:joi.string().required()
    })
    return validationSchema.validate(data)
}

module.exports.signupChecks = signupChecks 
module.exports.loginChecks = loginChecks