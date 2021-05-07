const orm = require("../config/orm");

const burger = {
	allBurgers(callback) {
		orm.selectAll("burgers", (res) => callback(res));
	},
	addBurger(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, (res) => callback(res));
	},
	eatBurger(burger) {
		orm.updateOne(
			"burgers",
			{ devoured: true },
			`burger_name="${burger.name}"`
		);
	},
};

module.exports = burger;
