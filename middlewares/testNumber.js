
const testNumber = (req, res, next) => {    

    if(req.query.valor === undefined)    res.status(400).send(process.env.NOTVALUE)
    if(isNaN(Number(req.query.valor)))   res.status(400).send(process.env.MISTAKEMESSAGE)
    next()

}

module.exports = testNumber