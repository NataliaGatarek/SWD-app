const mongoose = require("mongoose");
const dogsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    kennel: {
        type: String,
        required: true, 
    }, 
    live: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
   }

});
module.exports = mongoose.model('Dog', dogsSchema);