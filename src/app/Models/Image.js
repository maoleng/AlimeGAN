import Base from './Base.js'
import mongoose from 'mongoose'

const image = new mongoose.Schema({
    label: {
        type: String,
        required: false,
    },
    path: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    isShow: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        default: false,
        ref: 'User',
    },
    imageOriginalId: {
        type: mongoose.Schema.Types.ObjectId,
        default: false,
        ref: 'Image',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'images',
})

class Image extends Base
{

}

export default mongoose.model('User', image.loadClass(Image))
