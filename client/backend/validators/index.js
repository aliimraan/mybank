const {check,validationResult} =require('express-validator')

exports.signUpRequestValidator=[
    check('allInputs.firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('allInputs.lastName')
    .notEmpty()
    .withMessage('lastName is required'),

    check('allInputs.mobileNumber')
    .notEmpty()
    .withMessage('mobile Number is required')
    .isLength({min:10,max:11})
    .withMessage('Enter valid mobile number'),

    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:4})
    .withMessage('password length mustbe greater than 4 characters'),

    check('allInputs.cardNo')
    .notEmpty()
    .withMessage('Account Number is required')
    .isLength({min:10,max:11})
    .withMessage('Account no length mustbe greater than 10 characters'),

    check('allInputs.dob')
    .notEmpty()
    .withMessage('dob is required'),
];

exports.signUpRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.loginRequestValidator=[
    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.loginRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}


exports.depositeRequestValidator=[
    check('allInputs.depositeAmount')
    .notEmpty()
    .withMessage('Amount is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.depositeRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.widthdrawRequestValidator=[
    check('allInputs.widthdrawAmount')
    .notEmpty()
    .withMessage('Amount is required'),

    check('allInputs.pass')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.widthdrawRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}