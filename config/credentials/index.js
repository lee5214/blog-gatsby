const devKey = require ('./development');
const prodKey = require ('./production');

if (process.env.NODE_ENV === 'production') {
	module.exports = prodKey;
} else {
	module.exports = devKey;
}
