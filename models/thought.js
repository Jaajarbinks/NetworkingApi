const { schema, model } = require('mongoose')
const reactionSchema = require('./reaction')
const date = require('date-and-time')

const thoughtSchema = new schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: [1, 'What do you think ?'],
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // timestamps: true,
      get: (time) => time.toUTCString(),
    },

    userName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getter: true,
    },
    id: false,
  },
)

thoughtSchema.virtual('reactionCount').get(function () {
  return `${this.reactions.length}`
})

const Thought = model('Thought', thoughtSchema)

model.exports = Thought
