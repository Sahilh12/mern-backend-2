const express = require('express')
const { register, getUsers, login, updateUser, logOut, getUserForPortfolio, forgotPassword, resetPassword, updatePassword } = require('../controller/userController')
const { isAuthMiddleware } = require('../auth/authentication')

const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.get('/logout', logOut)
router.get("/getAllUsers", isAuthMiddleware, getUsers)
router.put("/update/profile", isAuthMiddleware, updateUser)
router.put("/update/password", isAuthMiddleware, updatePassword)
router.get("/me/portfolio", getUserForPortfolio)
router.post("/password/reset", forgotPassword)
router.put("/password/reset/:token", resetPassword)


module.exports = router