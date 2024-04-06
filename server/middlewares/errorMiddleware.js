const errorMiddleware = (err,req,res,next) => {
    const statusCode = err.statusCode || 500
    const statusMessage = err.message || 'Internal Server Error'

        res.status(statusCode).json({
        success:false,
        statusCode: statusCode,
        message: statusMessage,
    })

}

module.exports = errorMiddleware