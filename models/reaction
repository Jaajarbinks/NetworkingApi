const { schema, model, Schema, Types } = require('mongoose')
const date = require('date-and-time')

const reactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        defaul: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },

    userName: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (time) => time.toUTCString(),
    }
},
{
    toJSON: {
        getters:true,
    },
    id: false,
}
)

model.exports = reactionSchema