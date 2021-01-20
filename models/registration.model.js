const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentRegistration = new Schema ({
    gender: {
        type: String
    },
    grade: {
        type: String
    },
    clubMember:{
        type : Boolean
    }
})

module.exports = mongoose.model('Student', StudentRegistration);