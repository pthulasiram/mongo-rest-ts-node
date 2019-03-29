import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BankSchema = new Schema({
    name: {
        type: String,
        required: 'bank name'
    },
    ifsc: {
        type: String,
        required: 'ifsc code'
    },
    address: {
        type: String
    },
    branch: {
        type: String
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    phone: {
        type: Number
    },
    pincode: {
        type: Number
    }

});