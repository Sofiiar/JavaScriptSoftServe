# Task 1
Create a `Node.js http server` that will listen for requests on `port 5000` on the local machine. 

The server should return a page containing the name of the current user of the operating system, the type of the operating system, the system's operating time in minutes (use the OS module ), the current working directory and the name of the server file (use the path module ).

![Task 1 Output](./images/Screenshot%202023-12-12%20at%2019.25.16.png)

# Task 2
It is necessary to create your own module `personalmodule.js` , which contains a function that accepts the name of the system user and works with the current time and, based on the time of day, displays a message greeting the user. 

To export module variables or functions externally, you can use the module.exports object . 

Create Node . js server, which, using the functionality of the developed module, will return the following page : 

![Task 2 Output](./images/Screenshot%202023-12-12%20at%2019.34.34.png)