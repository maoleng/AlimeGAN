import Base from './Base.js'
import mongoose from 'mongoose'

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    collection: 'courses',
})

class User extends Base
{

}

export default mongoose.model('User', user.loadClass(User))
