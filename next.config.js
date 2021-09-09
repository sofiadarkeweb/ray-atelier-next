const debug = process.env.NODE_ENV !== "production";

module.exports = {
	images: {
		domains: ["picsum.photos", "images.ctfassets.net"],
	},
	assetPrefix: !debug ? "ray-atelier" : "",
};

// const withVideos = require("next-videos");

// module.exports = withVideos();

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
