

### The brief

The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).

It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

Optional advanced features might include:
support for n-a-side, where a list of any length can be split into two teams
support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly

For the project I chose to use a combination of a Laravel API for the backend and React frontend using redux. 
I decided to use Laravel for storing the players and creating the teams and to use React for the UI to add players and view teams. 

Installation instructions 

```clone the repository```

```cd into the repo dir```

```npm install```

```npm start```

Inside the react app in the /src folder there is a file called axios.js - this is where the url for the api is stored. 
If using the app with a locally hosted laravel app on homestead, uncomment the homestead.test/api/players url and if using the remote api, uncomment the aws url line.



This was to use the combined PHP/laravel and js/Reactjs knowledge I have learnt throughout the course. 

My original plan was to create a react and react-native front end systems and use the backend for the logic and storage. This would allow for expansion in the future and to change the UI without losing the functionality. 

Unfortunately the react-native app is on the future to-do list as I ran in to problems with redux and connecting the API, which meant I was behind schedule. 


#### The React and Laravel apps are hosted on aws
The frontend can be found here:

http://pick-a-mix-20190409212756-hostingbucket-teamaws.s3-website-eu-west-1.amazonaws.com/

the repo for the backend is here:

https://github.com/h2obuffalo/team-picker-backend

## Still To Do List

- Make it responsive for mobile use, currently image is not displaying correctly.
- add a loading component so the delay in state change with the API call is no longer there
- Add labels to the skill radio buttons to clarify what they are.
- Add a remove button to each player in the list before the teams are made
- Add a button to change the shuffle to actual random instead of by skill level.

