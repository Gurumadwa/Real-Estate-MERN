const test = (req,res) =>{
    try {
        res.send('works')
        console.log('works')
    } catch (error) {
        console.log(error)
    }
}

module.exports = test