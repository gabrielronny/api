const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.live.com',
	secureConnection: false,
	port: 587,
	auth: {
		user: 'EMAIL',
		pass: 'SENHA DO EMAIL'
	},
	tls: {
		ciphers: 'SSLv3'
	}
});

module.exports = transporter;