/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				pathname: '/**',
			},
		],
	},
	reactStrictMode: true,
};
