const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgressSchema = new Schema({
    Module1: {
        type: Schema.Types.Decimal128,
        default: 0.00
    },
    Module2: {
        type: Schema.Types.Decimal128 ,
        default: 0.00  
    },
    Module3: {
        type: Schema.Types.Decimal128,
        default: 0.00
    },
    Overall: {
        type: Schema.Types.Decimal128,
        default: 0.00
    }

});
const Progress = mongoose.model("Progress", ProgressSchema);
mongoose.set('useCreateIndex', true);
module.exports = Progress