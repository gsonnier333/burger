const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.allBurgers((data) => {
		const handlebarsObj = {
			burgers: data,
		};
		console.log(handlebarsObj);
		res.render("index", handlebarsObj);
	});
});

router.post("/api/burgers", (req, res) => {
	burger.addBurger(
		["burger_name", "devoured"],
		[req.body.name, req.body.devoured],
		(result) => {
			// Send back the ID of the new burger
			res.json({ id: result.insertId });
		}
	);
});

router.put("/api/burgers/:id", (req, res) => {
	const condition = `id = ${req.params.id}`;

	console.log("condition", condition);
	console.log(req.body);
	burger.eatBurger(req.body, condition, (result) => {
		if (result.changedRows === 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

// Export routes for server.js to use.
module.exports = router;
