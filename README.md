# microserviceA
##A. 
To request data from my microservice, you need to fetch data from the Port it is on (mine was set to 5001, but you need to have your own .env file in the same directory). 

This microservice handles full CRUD operations (Create, Read, Update, Delete) for events using a MongoDB database. You can search, delete, or update events by ID or by name.

##Requirements:
- Node.js installed
- A valid .env file in the project root
- Access to the MongoDB cluster

##Install Dependencies
Run these commands in your terminal to install the required Node packages:

```javascript
npm install
npm install mongodb
```


#.env File Format
Create a .env file in the root directory of the project with the following contents:

```javascript
PORT=5001
MONGODB_CONNECT_STRING="mongodb+srv://<username>:<password>@cluster0.9878mlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
```

Replace <username> and <password> with your MongoDB credentials.

If you're not using your own MongoDB cluster, I’ll need to add you as a user to my database.




##B. 
To receive data, you can set the fetch to variable so that you can get the response status back. You can also use a get call to get all the events.

Here is an example of a post request: 
```javascript
    let result = await fetch(
    'http://localhost:5001/event', {
        method: "post",
        body: JSON.stringify({ name, date}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("Response status:", result.status);
```

Here is a an example of a get request:
```javascript
let res = await fetch("http://localhost:5001/event");
let events = await res.json();
console.log(events);
```

#C. 
<img width="795" alt="Screenshot 2025-05-19 at 3 34 33 PM" src="https://github.com/user-attachments/assets/84c55e17-16ca-4f6d-9bee-6fd13fa51c82" />

