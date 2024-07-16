import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/pswdmng').then(()=>{console.log("connected")})
.catch((e)=>{"failed to connect"})

const sch = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('PswdCol', sch)