const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/BuddyBridge') 
    .then(
        ()=>{
            console.log('DB connected');
        }
    )
.catch(
    (err)=>{
        console.log(err);
    }
)

module.exports = mongoose;