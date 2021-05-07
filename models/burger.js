const orm = require("../config/orm");

const burger = {
	allBurgers(callback) {
		orm.selectAll("burgers", (res) => callback(res));
	},
	addBurger(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, (res) => callback(res));
	},
	eatBurger(burger, condition, callback) {
		orm.updateOne(
			"burgers",
			{ devoured: true },
			`id="${burger.id}"`,
			(res) => callback(res)
		);
	},
};

module.exports = burger;
