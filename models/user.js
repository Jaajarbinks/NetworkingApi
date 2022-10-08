const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    // title: {type: String, required: true},
    // author: {type: String, required: false},
    // published: String,
    // stockCount: Number,
    // price: Number,
    // inStock: Boolean,
    // lastAccessed: {type: Date, default: Date.now}
    userName: {
      type: String,
      // unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      // unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'fill with a valid email address',
      ],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
)

userSchema.virtual('friendCount').get(function () {
  return `${this.friends.length}`
})

const user = model('user', userSchema)

// const handleError = (err) => console.error(err)

// user.create(
//   {
//     name: '',
//     email: '',
//     thought:[],
//   },
//   (err) => (err ? handleError(err) : console.log('make new document')),
// )

module.exports = user
