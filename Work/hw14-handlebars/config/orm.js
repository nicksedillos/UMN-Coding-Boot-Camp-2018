// Dependencies
const connection = require(`../config/connection`);

const orm = {
	selectAll: function() {
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
			if (err) throw err;

		})
	},
	insertOne: function() {
		var queryString = 'INSERT INTO (?) VALUE (?)';
		connection.query(queryString, [tableInput, valueInput], function(err, result) {
			if (err) throw err;
			
		})
	},
	updateOne: function() {
		var queryString = '????????';
	},
};

module.exports = orm;