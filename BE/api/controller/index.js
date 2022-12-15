const Models = require('../model/index')

exports.getStudent = async (req, res) => {
    try {
        let getData = await Models.find({})
        res.send({
            getData
        })
    } catch (error) {
        res.send(error)
    }
}

exports.addStudent = async (req, res) => {
    try {
        let name = req.body
        await Models.create(name)
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}