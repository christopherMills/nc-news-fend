# NC-News front-end

## What is this?

This is a project completed in November 2019 for the front-end block of NorthCoders. It's [hosted on Netlify](https://clm-nc-news-fend.netlify.com).

The back-end is [hosted on Heroku](https://nc-news-bend.herokuapp.com/) and you can view the [original git repository too](https://github.com/christopherMills/backendNews).

Together, they form a very basic news website, with commenting and voting functionality, styled as a bit of a love letter to the command line terminal interfaces of the 1980s (complete with CRT glow!).

## How does it work?

Let's start with the backend where all the business happens. You have a database which, in this case, uses the PostgreSQL database software. It's open source, and holds articles and users and so on.

We interact with this from our Node Express server instance, via a useful JavaScript library called KNex. Why KNex? It allows us to access the PSQL database programatically, reducing the need for shell scripts and so on and making human errors less likely. All of the above is hosted together on Heroku's server somewhere in a VM. It's for this reason the first request is slow, because the VM takes a few seconds to spin up.

Our front end interface is made with React, and hooks into the Node server via its exposed RESTful API (its public protocol). React is used because it's more efficient with the DOM than HTML which traverses the tree recursivly. It also makes the structure of a website more object-oriented and things like composition get a lot easier. React makes requests to the backend via Axios, a JavaScript library which essentially promisifies HTTP requests.

```
BACK END - HOSTED ON HEROKU
+-------------------------+
|                         |
|      +------------+     |
|      | PostgreSQL |     |
|      | database   |     |
|      +--^---------+     |
|         |               |
|         | Knex.js       |
|         |               |
|         |               |
|     +---v---------+     |
|     |Node Express |     |
|     |server       |     |
|     |             |     |
|     +--^----------+     |
|        |                |
+--------+----------------+
         |
         |
+--------+----------------+
|        |                |
|        v                |
|    React.js             |
|                         |
+-------------------------+
FRONT END - HOSTED ON NETLIFY
```

## Installilng this on your machine

### Prerequisites

- Node 13.0.1 or later
- Git

### Directions

Create a folder, navigate to it via the command line and then run the following command:

```bash
git clone https://github.com/christopherMills/nc-news-fend.git
cd nc-news-fend
npm install
# Wait for dependendcies to install!
# Then
npm start
```

This will run the app locally in development mode, and probably open a browser window (if not, you can see the URL in the command window, something like `localhost://3000` or a similar port number).

## Built with

- [Axios](https://npmjs.com/package/axios)
- [React](https://reactjs.org)
