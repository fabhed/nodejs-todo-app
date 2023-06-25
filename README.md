Let's start by laying out the core classes, functions, and methods necessary for this project:

1. `server.js`: This is the entry point of the application. It will set up the Express server, import the necessary routes, and listen on port 8000.
2. `routes.js`: This file will contain the routes for the CRUD API and the UI.
3. `todoController.js`: This file will contain the controller functions for handling the CRUD operations on the todos.
4. `todoModel.js`: This file will contain the Todo class and methods for interacting with the JSON file on the local filesystem.
5. `public/index.html`: This file will contain the HTML for the UI.
6. `public/styles.css`: This file will contain the CSS styles for the UI.
7. `public/scripts.js`: This file will contain the JavaScript for handling the UI interactions with the CRUD API.
8. `package.json`: This file will contain the project's dependencies and scripts.

Now let's create the content of each file:

server.js
