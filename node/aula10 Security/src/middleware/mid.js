exports.csrfToken = (req, res, next) => {
    
    res.locals.token = req.csrfToken()
    next()
}

exports.csrfTokenError = (err, req, res, next) => {
    
    if(err && err.code === 'EBADCSRFTOKEN')
    {
       return res.send('BAD TOKEN')
    }
}

