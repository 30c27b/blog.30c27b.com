const mongoose = require('mongoose');
const md = require('markdown-it')({
	html: true,
	xhtmlOut: true,
	breaks: true
});

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
		enum: ['EN', 'FR'],
		default: 'EN'
	},
	content: {
		type: String
	},
	readers: [{
		type: String
	}],
	status: {
		type: String,
		enum: ['LISTED', 'UNLISTED', 'PRIVATE'],
		default: 'PRIVATE'
	}
}, { collection: 'posts' });

post_schema.methods.to_display_format = function () {

	let language;
	let langColor;
	switch (this.language) {
		case 'EN':
			language = 'English';
			langColor = '#ff0000';
			break;
		case 'FR':
			language = 'French';
			langColor = '#003cff';
			break;
		default:
			language = 'English';
			langColor = '#ff0000';
	}

	return {
		title: this.title,
		date: this.created_at.getUTCDate() + "_" + this.created_at.getMonth() + "_" + this.created_at.getFullYear(),
		views: this.views,
		link: "/" + this.uid,
		content: md.render(this.content),
		status: (this.status == 'UNLISTED' || this.status == 'PRIVATE' ? ' ; ' + this.status.toLowerCase() : ''),
		language: language,
		langColor: langColor
	}

}

module.exports = mongoose.model("post", post_schema);
