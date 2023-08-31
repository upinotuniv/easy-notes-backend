const { notes } = require("../../models")

exports.CreateNotes = async(req, res) => {
    try {
        const data = await notes.create(req.body);
        return res.status(200).send({
            message: "success",
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error!"
        })
    }
}

exports.GetAllNotes = async(req, res) => {
    try {
        const data = await notes.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })
        return res.status(200).send({
            message: "success",
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error!"
        })
    }
}

exports.GetOneNotes = async(req, res) => {
    try {
        const data = await notes.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

        if (!data) {
            return res.status(404).send({
                message: "data not found!"
            })
        }

        return res.status(200).send({
            message: "success",
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error!"
        })
    }
}

exports.UpdateNotes = async (req, res) => {
    try {
        const data = await notes.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

        if (!data) {
            return res.status(404).send({
                message: "data not found!"
            })
        }

        const updatedData = await data.update(req.body)

        return res.status(200).send({
            message: "success",
            data: updatedData
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error!"
        })
    }
}



exports.DeleteNotes = async(req, res) => {
    try {
        const data = await notes.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

        if (!data) {
            return res.status(404).send({
                message: "data not found!"
            })
        }

        await data.destroy()
        
        return res.status(200).send({
            message: `success to deleted data with id ${req.params.id}`
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error!"
        })
    }
}