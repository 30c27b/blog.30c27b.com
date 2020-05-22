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

post_schema.methods.to_display_format = function () {

	return {
		title: this.title,
		date: this.created_at.getUTCDate() + "_" + this.created_at.getMonth() + "_" + this.created_at.getFullYear(),
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
