const mongoose = require('mongoose');
const marked = require('marked');

const post_schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	created_at:
	{
		type: Date,
		required: true
	},
	views: {
		type: Number,
		required: true
	},
	uid: {
		type: String,
		required: true
	},
	language: {
		type: String,
		enum: ['english', 'french'],
		default: 'english'
	},
	content: {
		type: String
	},
	readers: [{
		type: String
	}],
	status: {
		type: String,
		enum: ['PUBLIC', 'UNLISTED', 'PRIVATE'],
		default: 'PRIVATE'
	}
}, { collection: 'posts' });

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

post_schema.methods.to_display_format = function () {

	return {
		title: this.title,
		date: weekdays[this.created_at.getDay()] + " " + this.created_at.getUTCDate() + " " + months[this.created_at.getMonth()] + " " + this.created_at.getFullYear(),
		views: this.views,
		link: "/" + this.uid,
		content: marked(this.content, {
			breaks: true
		}),
		status: (this.status == 'UNLISTED' || this.status == 'PRIVATE' ? ' ; ' + this.status.toLowerCase() : ''),
		language: this.language
	}

}

module.exports = mongoose.model("post", post_schema);
