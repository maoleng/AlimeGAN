import mongoose from 'mongoose'

async function connect()
{
    await mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected!'))
}

export default connect