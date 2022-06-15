const mongoose = required("mongoose");

const activitySchema = new mongoose.Schema ({
    _id: {
        type: ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('User', activitySchema)