const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 13;
const Schema = mongoose.Schema


const UserSchema = new Schema({
     username: {
        type: String,
        min: [15,"Not Enough"],
        max:[20],
        required: true,
        unique: true
     },
     password: {
        type: String,
        min:[15,"Not Enough"],
        max:[20],
        required: true
     },
     email: {
        type: String,
        trim: true,
        lowercase: false,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    createdDate: {
        type: Date, default: Date.now
    },
    // Referencing other documents
    
    progress:[
        {
        type: Schema.Types.ObjectId,
        ref: "Progress",
        }
        
    ],
    points: [
        {
        type : Schema.Types.ObjectId,
        ref: "Points",
        }
        
    ]

    
    //Make sure to finish
});
// Pre save hook to hash passwords
UserSchema.pre('save', function (next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            console.log(user.password);
            next();
        });
    });
  });
  // Helper method for password comparison promise based
UserSchema.methods.comparePassword = function(candidatePassword) {
    return new Promise((resolve, reject) => { 
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if (err) reject(err, 'passwords not a match');
            return resolve(isMatch);
        });
    });
  };
mongoose.set('useCreateIndex', true);
const User = mongoose.model("User", UserSchema);
module.exports = User

