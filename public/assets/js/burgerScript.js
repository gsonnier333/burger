// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
	}
	// UPDATE
	const eatBtns = document.querySelectorAll(".eatBtn");

	// Set up the event listener for the create button
	if (eatBtns) {
		eatBtns.forEach((button) => {
			button.addEventListener("click", (e) => {
				console.log("Eat button clicked");
				// Grabs the id of the element that goes by the name, "id"
				const id = e.target.getAttribute("id");

				fetch(`/api/burgers/${id}`, {
					method: "PUT",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},

					// make sure to serialize the JSON body
					body: JSON.stringify({ devoured: true }),
				}).then((response) => {
					// Check that the response is all good
					// Reload the page so the user can see the updated lists
					if (response.ok) {
						console.log(`devoured burger with id ${id}`);
						location.reload("/");
					} else {
						alert("something went wrong!");
					}
				});
			});
		});
	}

	// CREATE
	const addBurgerBtn = document.getElementById("addForm");

	if (addBurgerBtn) {
		addBurgerBtn.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Add button clicked");
			// Grabs the value of the textarea that goes by the name, "quote"
			const newBurger = {
				burger_name: document
					.getElementById("newBurgerName")
					.value.trim(),
				devoured: false,
			};

			// Send POST request to create a new quote
			fetch("/api/burgers", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},

				// make sure to serialize the JSON body
				body: JSON.stringify(newBurger),
			}).then(() => {
				// Empty the form
				document.getElementById("newBurgerName").value = "";

				// Reload the page so the user can see the new quote
				console.log("Added a new burger!");
				location.reload();
			});
		});
	}
});
