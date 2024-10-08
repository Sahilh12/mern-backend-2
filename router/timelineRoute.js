const express = require('express')
const { isAuthMiddleware } = require('../auth/authentication')
const { addTimeline, getAllTimeline, deleteTimeline } = require('../controller/timelineController')

const router = express.Router()


router.post("/add", isAuthMiddleware, addTimeline)
router.get("/getAll", getAllTimeline)
router.delete('/delete/:id', isAuthMiddleware, deleteTimeline)


module.exports = router