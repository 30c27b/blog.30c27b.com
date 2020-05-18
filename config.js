const production = {
	http: {
		port: process.env.HTTP_PORT
	},
	mongo: {
		uri: process.env.MONGO_URI
	}
};

const developement = {
	http: {
		port: 8080
	},
	mongo: {
		uri: "mongodb://127.0.0.1/cln_blog"
	}
};

module.exports = process.env.NODE_ENV == 'production' ? production : developement;
