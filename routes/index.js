const express = require('express');
const post = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
	post.find({status: 'PUBLIC'}, (err, posts) => {
		if (err) res.render('index.hbs', { pageName: 'blog', pageDescription: "antoine '30c27b' coulon's personal blog themed around computer science and cryptography.", msg: 'cannot load posts' });
		else if (!posts.length) res.render('index.hbs', { pageName: 'blog', pageDescription: "antoine '30c27b' coulon's personal blog themed around computer science and cryptography.", msg: "nothing to see here yet" });
		else res.render('index.hbs', { pageName: 'blog', pageDescription: "antoine '30c27b' coulon's personal blog themed around computer science and cryptography.", posts: posts.map(post => post.to_display_format()) });
	});
});

router.get('/:post', (req, res) => {
	post.findOne({ uid: req.params.post, $or: [{status: 'PUBLIC'}, {status: 'UNLISTED'}] }, (err, post) => {
		if (err) res.render('post.hbs', { pageName: 'error', msg: "cannot load post" });
		else if (!post) res.redirect('/');
		else {
			res.render('post.hbs', { pageName: post.title, pageDescription: post.description, post: post.to_display_format() });
			if (!post.readers.includes(req.ip)) {
				post.readers.push(req.ip);
				post.views++;
				post.save((err2, post2) => { if (err2) console.error(err2) });
			}
		}
	});
});

module.exports = router;