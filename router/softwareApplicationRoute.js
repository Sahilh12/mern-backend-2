const express = require('express')
const { isAuthMiddleware } = require('../auth/authentication')
const { addApplication, getAllApplication, deleteApplication } = require('../controller/softwareApplicationController')

const router = express.Router()


router.post("/add", isAuthMiddleware, addApplication)
router.get("/getAll", getAllApplication)
router.delete('/delete/:id', isAuthMiddleware, deleteApplication)


module.exports = router