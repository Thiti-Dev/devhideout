const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [ true, 'Please add a title for the review' ],
		maxlength: 100
	},
	text: {
		type: String,
		required: [ true, 'Please add some text' ]
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
		required: [ true, 'Please add a rating between 1 and 10' ]
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	bootcamp: {
		//mongoose.Schema.ObjectId
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Bootcamp',
		required: true
	},
	user: {
		//mongoose.Schema.ObjectId
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
});

// Prevent user from submitting more than one review per bootcamp
// If this is not working after applied => try db.dropDatabase() in the mongoDB to do the trick
ReviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);
