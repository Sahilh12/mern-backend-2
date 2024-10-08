const express = require('express') 
const { sendMessage, getAllMessages, deleteMessage } = require('../controller/messageController')
const { isAuthMiddleware } = require('../auth/authentication')

const router = express.Router()


router.post("/send", sendMessage)
router.get("/getAll" , getAllMessages)
router.delete('/delete/:id' ,isAuthMiddleware, deleteMessage)



module.exports = router