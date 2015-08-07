var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var countdownTitleValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text...
    'Select a valid member name.' ];

var countdownSchema = new Schema({
    countdownTitle: {
        type: String,
        required: true,
        validate: countdownTitleValidator },
    createdOn: { type: Date, default: Date.now }
});

// Export model...
module.exports = mongoose.model( 'Countdown', countdownSchema );
