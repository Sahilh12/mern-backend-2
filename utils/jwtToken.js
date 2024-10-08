module.exports.jwtToken = async (user , message , statusCode , res) => {
    const token = await user.generateJsonWebToken()

    res.status(statusCode).cookie("token", token , {
        httpOnly:true,
        sameSite:"None",
        secure:true
    }).json({
        success: true,
        token,
        message,
        user
    })
}