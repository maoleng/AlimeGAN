import Base from './Base.js'
import mongoose from 'mongoose'

const image = new mongoose.Schema({
    label: {
        type: String,
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
        ref: 'User',
    },
    imageOriginalPath: {
        type: String,
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

export default mongoose.model('Image', image.loadClass(Image))
