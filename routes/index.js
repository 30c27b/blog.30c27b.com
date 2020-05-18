const express = require('express');
const post = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
	post.find({status: 'LISTED'}, (err, posts) => {
		if (err) res.render('index.hbs', { pageName: 'blog', msg: "cannot load posts" });
		else if (!posts.length) res.render('index.hbs', { pageName: 'blog', msg: "nothing to see here yet" });
		else res.render('index.hbs', { pageName: 'blog', posts: posts.map(post => post.to_display_format()) });
	});
});

router.get('/:post', (req, res) => {
	post.findOne({ uid: req.params.post, $or: [{status: 'LISTED'}, {status: 'UNLISTED'}] }, (err, post) => {
		if (err) res.render('post.hbs', { pageName: 'error', msg: "cannot load post" });
		else if (!post) res.render('post.hbs', { pageName: 'error', msg: "this post does not exist; yet" });
		else {
			res.render('post.hbs', { pageName: post.title, post: post.to_display_format() });
			if (!post.readers.includes(req.ip)) {
				post.readers.push(req.ip);
				post.views++;
				post.save((err2, post2) => { if (err2) console.error(err2) });
			}
		}
	});
});

module.exports = router;