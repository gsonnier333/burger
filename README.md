# Burger Devourer

![Screenshot of deployed site](./public/assets/img/burgers-screenshot.png)

Deployed to heroku at: https://burger-devourer-gfs.herokuapp.com/

For this assignment, I was tasked with creating an ORM with which I could interact with a SQL database on the backend. I was then instructed to create a simple webpage with express-handlebars that could use this ORM to add and "eat" burgers, which are tracked using the backend database. The user can type in the name of a burger and click the "Add" button by the text box to add it to the page. Once added, the user can see all the burgers that have ever been added, and can click the "Devour it!" buttons next to the yet-uneaten burgers to move them to the "Devoured burgers" section on the other side of the page.

This assignment provided vital practice with deploying websites that use a database on the back end to heroku, as well as useful experience creating and employing ORMs/creating pages with handlebars. The ORM took some work to wrap my head around, since it functions by calling many different methods across several different files in the directory, but with a little effort and practice I feel I have a much better grasp on it and how it can be useful in larger projects to abstract database queries across the codebase.
