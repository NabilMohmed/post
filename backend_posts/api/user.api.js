const { userValidation } = require('../middleware/userValidation/user.valid')
const { signUp, signin } = require('../services/user.service')

const router=require('express').Router()

router.post('/signup/:id',userValidation,signUp)
router.post('/signin',signin)


module.exports=router