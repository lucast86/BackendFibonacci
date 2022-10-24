const getUsers = (req, res) => {
    
    const fibonacci = [1];

    if(req.query.valor == 0)    res.status(200).send("Ingreso un 0")
    if(req.query.valor == 1)    res.status(200).send(fibonacci)
    if(req.query.valor != 1){
        fibonacci[1] = 1
        for (var i = 2; i < req.query.valor; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }

        res.status(200).send(fibonacci)  
    }
}

module.exports = {getUsers}