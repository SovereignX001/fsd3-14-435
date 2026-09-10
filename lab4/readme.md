create project folder

2.right click on project folder and select reveal integrated terminal 
3.type in terminal `npm init -y` press enter 
4.open package.json file from project folder
5.isme update type ko module krna hai in package.json 
6.type in terminal `npm i nodemon -D` to install nodemon ,which restarts server while file changes,-D flag indicate install as dev dependency 
7.it creates node_modules folder and package-lock.json
8.update .gitignore with lab4/node_modules
9.update package.json to run the project ,upodate script property as below 
```
"scripts ":{
start:"node app.js
dev:"nodemon app.js"

},
now you can start the server by typing 


```
10.`npm run dev` in the terminal of project folder
11.ab app.js and team.js ko lab 4 mein move krdo 