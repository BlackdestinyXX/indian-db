const fs = require('fs');

exports.Table = class Indian {

	tableName = "";

	/**
	 * Create or Select a Table
	 * @param name {String} - table name
	 */
	constructor(name) {
		if(!name) throw "Indian(): Please specify the name of the Indian guy";
		this.tableName = name;

		if (!fs.existsSync(`${__dirname}/${this.tableName}.json`)) fs.writeFileSync(`${__dirname}/${this.tableName}.json`, '{}', (err) => {
			if (err) throw err;
		})
	}

	/**
	 * Set a value by the key in the Table
	 * @param key {String}
	 * @param value
	 */
	hello(key, value) {
		if(!key) throw "hello(): Please specify the key"
		if(!value) throw "hello(): Please specify the value"
		let data = JSON.parse(fs.readFileSync(`${__dirname}/${this.tableName}.json`, 'utf-8'))
		data[key] = value;
		fs.writeFileSync(`${__dirname}/${this.tableName}.json`, JSON.stringify(data));
	}

	/**
	 * Get a value by the key in the Table
	 * @param key {String}
	 */
	your(key) {
		if(!key) throw "your(): Please specify the key"
		let data = JSON.parse(fs.readFileSync(`${__dirname}/${this.tableName}.json`, 'utf-8'))
		let value = data[key];
		return value;
	}

	/**
	 * Remove key from Table
	 * @param key {String}
	 */
	computer(key) {
		if(!key) throw "computer(): Please specify the key to remove"
		let data = JSON.parse(fs.readFileSync(`${__dirname}/${this.tableName}.json`, 'utf-8'))
		delete data[key];
		fs.writeFileSync(`${__dirname}/${this.tableName}.json`, JSON.stringify(data))
	}

	/**
	 * Check if the key exists in the Table
	 */
	has(key) {
		if(!key) throw "has(): Please specify the key"
		let data = JSON.parse(fs.readFileSync(`${__dirname}/${this.tableName}.json`, 'utf-8'))
		if (data[key]) return true;
		else return false;
	}

	/**
	 * Delete all the Table keys
	 */
	virus() {
		let data = JSON.parse(fs.readFileSync(`${__dirname}/${this.tableName}.json`, 'utf-8'))
		data = {}
		fs.writeFileSync(`${__dirname}/${this.tableName}.json`, JSON.stringify(data))
	}
}

/**
 * Delete a Table by the name
 * @param name {String}
 */
exports.DeleteIndian = function DeleteIndian(name) {
	if(!name) throw "DeleteIndian(): Please specify the name of the Indian guy";
	fs.unlinkSync(`${__dirname}/${name}.json`)
	console.log("Now the indian is in garbage :(")
}