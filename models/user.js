const { Schema, model } = require('mongoose')

const UserSchema = new mongoose.Schema({
  // title: {type: String, required: true},
  // author: {type: String, required: false},
  // published: String,
  // stockCount: Number,
  // price: Number,
  // inStock: Boolean,
  // lastAccessed: {type: Date, default: Date.now}
  userName: {
    type: String,
    unique: true,
    required: 'required for user name',
    trim: true,
  },

  email: {
    type: String,
    required: 'email is required',
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'fill with a valid email address',
    ],
  },

  thoughts: [
    {
      tpye: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],

  toJSON: {
    virtuals: true,
  },
  id: false,
})

UserSchema = virtual('friendCount').get(function () {
  return `${this.friends.length}`
})

const User = model('user', UserSchema)

// const handleError = (err) => console.error(err)

// user.create(
//   {
//     name: '',
//     email: '',
//   },
//   (err) => (err ? handleError(err) : console.log('make new document')),
// )

model.exports = User
