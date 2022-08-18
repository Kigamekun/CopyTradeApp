const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            user_id: {
                type: String,
                required: true,
            },
            subscription: {
                type: String,
                required: true,
            },
            status: {
                type: Number,
            },   
        },
        { timestamps: true }

    );
    schema.plugin(uniqueValidator)
    const Subscription = mongoose.model("subscriptions", schema)
    return Subscription

}
